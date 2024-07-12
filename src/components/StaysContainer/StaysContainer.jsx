import React from 'react'
import "./StaysContainer.scss";
import CardStays from '../CardStays/CardStays.jsx';

function StaysContainer() {
  return (
    <div className='dashboard-subcontainer'>
         <div className="endedstay_title_container in-progress-container">
            <p className="endedstay_title">ENTRÉES ET SORTIES DU JOUR</p>
        </div>
        <CardStays/>
    </div>
  )
}

export default StaysContainer