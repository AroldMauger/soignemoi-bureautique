import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.scss";
import { loginSecretary } from '../../service/Api.jsx';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('csrf_token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const csrfToken = await loginSecretary(email, password);
            // Stockez le token ou toute autre donnée pertinente dans le localStorage
            localStorage.setItem('csrf_token', csrfToken); // Exemple de stockage du token
            console.log('CSRF Token:', csrfToken); // Log du token récupéré
            if (csrfToken) {
                navigate('/dashboard'); // Redirection vers le Dashboard après connexion réussie
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='login-main-container'>
            <img src="logo-soignemoi.png" alt="logo"/>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Identifiants secrétaire :</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                id="username" 
                                placeholder='Email du secrétaire'
                                required 
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)} 
                            />
                        </div>
                        <div className="input-wrapper">
                            <input 
                                type="password" 
                                id="password" 
                                placeholder='Mot de passe'
                                required 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="sign-in-button">SE CONNECTER</button>
                </form>
            </section>
        </div>
    );
}

export default Login;
