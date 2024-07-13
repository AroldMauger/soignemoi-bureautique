import React, { useContext } from 'react';
import './Stay.scss';
import { Link } from 'react-router-dom';
import { finishStay } from '../../service/Api.jsx';
import AppContext from '../../context/AppContext.jsx';

function Stay({ entrydate, leavingdate, patientfirstname, patientlastname, id }) {
    const { setStaysData } = useContext(AppContext);

    // Convertir les dates en objets Date
    const entryDateObj = new Date(entrydate);
    const leavingDateObj = new Date(leavingdate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normaliser aujourd'hui à 00:00:00

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

    // Gérer la logique d'affichage des dates en comparant seulement les dates (sans les heures)
    const isEntryDateToday = entryDateObj.toDateString() === today.toDateString();
    const isLeavingDateToday = leavingDateObj.toDateString() === today.toDateString();
    const isOngoingStay = entryDateObj < today && leavingDateObj >= today;

    const handleFinishStay = async () => {
        const confirmed = window.confirm("Êtes-vous sûr de vouloir mettre fin au séjour?");
        if (confirmed) {
            try {
                await finishStay(id);
                // Actualiser les données des séjours après la mise à jour
                setStaysData(prevStaysData => prevStaysData.filter(stay => stay.id !== id));
            } catch (error) {
                console.error("Failed to finish stay:", error);
            }
        }
    };

    return (
        <div className="stay">
            <div className="rdv-card_container">
                <span className="rdv-patient">{patientfirstname} {patientlastname}</span>
                <div className="rdv-card">
                    {/* Cas 1 : Affiche Entrée et Sortie */}
                    {isEntryDateToday && isLeavingDateToday && (
                        <>
                            <p><strong>Entrée</strong></p>
                            <p>{formattedEntryDate}</p>
                            <p><strong>Sortie</strong></p>
                            <p>{formattedLeavingDate}</p>
                        </>
                    )}
                    {/* Cas 2 : Affiche uniquement Sortie */}
                    {!isEntryDateToday && isLeavingDateToday && (
                        <>
                            <p><strong>Sortie</strong></p>
                            <p>{formattedLeavingDate}</p>
                        </>
                    )}
                    {/* Cas 3 : Affiche uniquement Entrée */}
                    {isEntryDateToday && !isLeavingDateToday && (
                        <>
                            <p><strong>Entrée</strong></p>
                            <p>{formattedEntryDate}</p>
                        </>
                    )}
                    {/* Cas 4 : Séjour en cours */}
                    {isOngoingStay && !isEntryDateToday && !isLeavingDateToday && (
                        <>
                            <p><strong>Entrée</strong></p>
                            <p>{formattedEntryDate}</p>
                        </>
                    )}
                </div>
                <div className='container-for-btns'>
                    <Link to={`/dashboard/stays/${id}`}>
                        <button className="rdv-button-dossier">DOSSIER PATIENT</button>
                    </Link>
                    <button className="rdv-button-finish" onClick={handleFinishStay}>FIN DU SÉJOUR</button>
                </div>
            </div>
        </div>
    );
}

export default Stay;
