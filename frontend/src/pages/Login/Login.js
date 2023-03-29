import './Login.css';
import jwt_decode from 'jwt-decode'
import { React, useEffect, useState } from 'react';

function Login() {
  const [ user, setUser ] = useState({})

  function handleCallbackResponse(response) {
      var userObj = jwt_decode(response.credential)
      setUser(userObj)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "73231770215-20si72r6ucnvvj87kmubfk33b6hb6qei.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
    { theme: "outlined", size: "large" }
    )
  }, [])

  return (
    <div className="login-container">
      <h1>Bem-Vindo</h1>
      <p>Na Hora de Agendar Seu Corte</p>
      <div id='signInDiv'></div>
    </div>
  );
}

export default Login;
