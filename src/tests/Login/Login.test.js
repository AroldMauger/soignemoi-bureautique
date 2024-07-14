import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../components/Login/Login.jsx';
import { loginSecretary } from '../../service/Api.jsx';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

jest.mock('../../service/Api.jsx', () => ({
    loginSecretary: jest.fn(),
}));

beforeAll(() => {
    Object.defineProperty(window, 'sessionStorage', {
        value: {
            getItem: jest.fn(() => null),
            setItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn(),
        },
        writable: true
    });

    global.console.log = jest.fn();
});

beforeEach(() => {
    jest.clearAllMocks();
});

test('renders login form', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Email du secrétaire/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Mot de passe/i)).toBeInTheDocument();
    expect(screen.getByText(/SE CONNECTER/i)).toBeInTheDocument();
});

test('shows error message on failed login', async () => {
    loginSecretary.mockRejectedValueOnce(new Error('Failed to login'));

    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email du secrétaire/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByText(/SE CONNECTER/i));

    await waitFor(() => {
        expect(screen.getByText(/Connexion failed/i)).toBeInTheDocument();
    });
});

test('redirects to /dashboard on successful login', async () => {
    loginSecretary.mockResolvedValueOnce('mock-csrf-token');

    const navigate = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => navigate);

    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email du secrétaire/i), { target: { value: 'valid@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/i), { target: { value: 'validpassword' } });
    fireEvent.click(screen.getByText(/SE CONNECTER/i));

    await waitFor(() => {
        expect(loginSecretary).toHaveBeenCalledWith('valid@example.com', 'validpassword');
        expect(sessionStorage.setItem).toHaveBeenCalledWith('csrf_token', 'mock-csrf-token');
        expect(console.log).toHaveBeenCalledWith('CSRF Token:', 'mock-csrf-token');
        expect(navigate).toHaveBeenCalledWith('/dashboard');
    });
});

test('redirects to /dashboard if csrf_token exists in sessionStorage', () => {
    sessionStorage.getItem.mockReturnValue('mock-csrf-token');

    const navigate = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => navigate);

    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    expect(navigate).toHaveBeenCalledWith('/dashboard');
});
