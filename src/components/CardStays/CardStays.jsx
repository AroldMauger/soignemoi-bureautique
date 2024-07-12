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

    return (
        <div className="all-cards_container">
            {staysData && staysData.map((stay) => (
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
