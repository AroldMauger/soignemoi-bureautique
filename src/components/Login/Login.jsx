import React from 'react'
import "./Login.scss";

function Login() {
  return (
<div className='login-main-container'>
    <img src="logo-soignemoi.png"/>
    <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Identifiants secrétaire :</h1>
        <form className="form-container">
            <div className="input-container">
                <div className="input-wrapper">
                <input 
                    type="text" 
                    id="username" 
                    placeholder='Nom secrétaire'
                    required 
                //  onChange={(event) => setEmail(event.target.value)} 
                />
                </div>
                <div className="input-wrapper">
                <input 
                    type="password" 
                    id="password" 
                    placeholder='Mot de passe'
                    required 
                //  onChange={(event) => setPassword(event.target.value)}
                />
                </div>
            </div>
            <button className="sign-in-button">SE CONNECTER</button>
        </form>
        </section>
</div>
  )
}

export default Login