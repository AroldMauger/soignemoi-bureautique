import React from 'react';
import './Stay.scss';

function Stay({ entrydate, leavingdate, patientfirstname, patientlastname }) {
    // Convertir les dates en objets Date
    const entryDateObj = new Date(entrydate);
    const leavingDateObj = new Date(leavingdate);

    // Fonction pour formater une date en "le 26/06/2024 à 16:00"
    const formatDate = (dateObj) => {
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont de 0 à 11
        const year = dateObj.getFullYear();
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        return `le ${day}/${month}/${year} à ${hours}:${minutes}`;
    };

    // Formater les dates
    const formattedEntryDate = formatDate(entryDateObj);
    const formattedLeavingDate = formatDate(leavingDateObj);

    return (
        <div className="stay">
            <div className="rdv-card_container">
                <span className="rdv-patient">{patientfirstname} {patientlastname}</span>
                <div className="rdv-card">
                    <p> <strong>Entrée</strong></p>
                    <p>{formattedEntryDate}</p>
                </div>
                <div className="rdv-card">
                    <p> <strong>Sortie</strong></p>
                    <p>{formattedLeavingDate}</p>
                </div>
                <button className="rdv-button-dossier">DOSSIER PATIENT</button>
            </div>
        </div>
    );
}

export default Stay;
