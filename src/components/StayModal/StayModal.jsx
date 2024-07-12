import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext.jsx';
import './StayModal.scss';
import HeaderModal from '../HeaderModal/HeaderModal.jsx';

function StayModal() {
    const { id } = useParams();
    const { staysData } = useContext(AppContext);
    const [stay, setStay] = useState(null);

    useEffect(() => {
        if (staysData && id) {
            const selectedStay = staysData.find(stay => stay.id === parseInt(id));
            setStay(selectedStay);
        }
    }, [staysData, id]);

    if (!stay) {
        return <div>Loading...</div>;
    }

    // Fonction pour formater une date en "le JJ/MM/AAAA à HH:mm"
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `le ${day}/${month}/${year} à ${hours}:${minutes}`;
    };

    // Fonction pour formater une date en "JJ/MM/AAAA"
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="stay-modal">
            <HeaderModal/>
            <div className='modal-subcontainer'>
                <h2>Informations personnelles</h2>
                <p><strong>Nom :</strong> {stay.user.firstname} {stay.user.lastname}</p>
                <p><strong>Adresse :</strong> {stay.user.address}</p>
                <p><strong>Email :</strong> {stay.user.email}</p>
            </div>
            <div className='modal-subcontainer'>
                <h2>Séjour à l'hôpital</h2>
                <p><strong>Entrée :</strong> {formatDateTime(stay.entrydate)}</p>
                <p><strong>Sortie :</strong> {formatDateTime(stay.leavingdate)}</p>
                <p><strong>Motif :</strong> {stay.reason.name}</p>
                <p><strong>Médecin :</strong> Docteur {stay.doctor.name}, {stay.speciality.name}</p>
            </div>
            <div className="opinions">
                {stay.opinions && stay.opinions.map((opinion, index) => (
                    <div key={index} className="opinion">
                        <p className='opinion-subcontainer-date'>AVIS du {formatDate(opinion.date.date)}</p>
                        <p className='opinion-subcontainer'>{opinion.comment}</p>
                    </div>
                ))}
            </div>

            <h3>PRESCRIPTIONS du médecin</h3>
            <table className="prescriptions-table">
                <thead>
                    <tr>
                        <th>MÉDICAMENTS</th>
                        <th>POSOLOGIE</th>
                        <th>DÉBUT DU TRAITEMENT</th>
                        <th>FIN DU TRAITEMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {stay.prescriptions && stay.prescriptions.map((prescription, index) => (
                        prescription.medicines.map((medicine, medIndex) => (
                            <tr key={`${index}-${medIndex}`}>
                                <td>{medicine.name}</td>
                                <td>{medicine.dosage}</td>
                                <td>{formatDate(medicine.start_date.date)}</td>
                                <td>{formatDate(medicine.end_date.date)}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StayModal;
