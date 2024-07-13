import React, { useContext, useEffect } from 'react';
import "./CardStays.scss";
import AppContext from '../../context/AppContext.jsx';
import Stay from '../Stay/Stay.jsx';

function CardStays() {
    const { staysData } = useContext(AppContext);

    useEffect(() => {
        if (staysData) {
            console.log(staysData); // Affiche les données récupérées dans la console
        }
    }, [staysData]);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normaliser aujourd'hui à 00:00:00

    const filteredStays = staysData
        ? staysData
            .filter(stay => stay.status !== 'terminé') // Filtrer les séjours terminés
            .filter(stay => {
                const entryDate = new Date(stay.entrydate);
                const leavingDate = new Date(stay.leavingdate);
                entryDate.setHours(0, 0, 0, 0);
                leavingDate.setHours(0, 0, 0, 0);
                return entryDate.getTime() === today.getTime() || leavingDate.getTime() === today.getTime() || (entryDate < today && leavingDate >= today);
            }) // Filtrer les séjours du jour ou en cours
            .sort((a, b) => new Date(a.entrydate) - new Date(b.entrydate)) // Trier les séjours par date d'entrée
        : [];

    return (
        <div className="all-cards_container">
            {filteredStays.map((stay) => (
                <Stay
                    key={stay.id}
                    entrydate={stay.entrydate}
                    leavingdate={stay.leavingdate}
                    patientfirstname={stay.user.firstname}
                    patientlastname={stay.user.lastname}
                    id={stay.id}
                />
            ))}
        </div>
    );
}

export default CardStays;
