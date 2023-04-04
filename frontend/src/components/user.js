import { React, useState } from 'react';
import WeeklyAgenda from './schedule';
import ButtonAppBar from './appbar';

function UserWelcome({ user }) {

  return (
    <div>
      <ButtonAppBar user={user}/>
      <div style={{ backgroundColor: '#fffff', color: '#000000', padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Olá, {user.nome}!</h2>
        <p>Bem-vindo(a) à barbearia {user.nome_barbearia}.</p>
        <WeeklyAgenda/>     
      </div>
    </div>
  );
}

export default UserWelcome;
