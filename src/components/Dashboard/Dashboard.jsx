import React from 'react'
import Header from '../Header/Header.jsx'
import "./Dashboard.scss";
import StaysContainer from '../StaysContainer/StaysContainer.jsx';

function Dashboard() {
  return (
    <div className='dashboard'>
        <Header/>
        <StaysContainer/>
    </div>
  )
}

export default Dashboard