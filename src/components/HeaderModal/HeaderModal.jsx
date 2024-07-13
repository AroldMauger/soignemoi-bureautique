import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./HeaderModal.scss";

function HeaderModal() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("Êtes-vous sûr de vouloir vous déconnecter?");
        if (confirmed) {
            sessionStorage.clear(); // Nettoyage du localStorage
            navigate('/'); // Redirection vers la page de connexion
        }
    };

    return (
        <div className='header-dashboard'>
            <img className="logo_main" src="/logo-soignemoi.png" alt="Logo SoigneMoi"/>
            <nav className='nav-header-modal'>
                <NavLink to="/dashboard">Tableau de bord</NavLink>
                <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Déconnexion</a>
            </nav>
    
        </div>
    );
}

export default HeaderModal;
