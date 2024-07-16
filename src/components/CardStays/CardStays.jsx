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

    // Fonction pour formater une date au format JJ/MM/AAAA
    const formatDate = (date) => {
        const d = new Date(date);
        const day = (`0${d.getDate()}`).slice(-2);
        const month = (`0${d.getMonth() + 1}`).slice(-2);
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const today = formatDate(new Date());

    const filteredStays = staysData
        ? staysData
            .filter(stay => stay.status !== 'terminé') // Filtrer les séjours terminés
            .filter(stay => {
                const entryDate = formatDate(stay.entrydate);
                const leavingDate = formatDate(stay.leavingdate);
                return entryDate === today || leavingDate === today ;
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
