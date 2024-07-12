import React from 'react';
import './Stay.scss';

function Stay({ entrydate, leavingdate, patientfirstname, patientlastname }) {
    return (
        <div className="stay">
            <p>Entry Date: {entrydate}</p>
            <p>Leaving Date: {leavingdate}</p>
            <p>Prénom : {patientfirstname}</p>
            <p>Nom : {patientlastname}</p>
        </div>
    );
}

export default Stay;
