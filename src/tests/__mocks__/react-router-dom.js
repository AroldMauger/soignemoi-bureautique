const navigateMock = jest.fn();

module.exports = {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => navigateMock,
};
