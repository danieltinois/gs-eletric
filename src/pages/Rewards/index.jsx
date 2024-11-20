import React from 'react';
import './style.css'; // Estilos para a página
import { NavBar } from '../../components/navbar';
import { ContactUs } from '../../components/btnContactUs';
import { MajorBelt } from '../../components/tracks/majorBelt';
import { MinorBand } from '../../components/tracks/minorBand';


const RewardsPage = () => {
  const usuario = {
    nome: "João da Silva",
    email: "joao@email.com",
    telefone: "1234-5678",
    pontos: 1200,
  };

  const badges = ["Primeira Viagem", "10 Viagens Sustentáveis"];
  const goal = 2000;
  const progress = Math.min((usuario.pontos / goal) * 100, 100);

  const handleRedeemPoints = () => {
    alert("Pontos resgatados com sucesso!");
  };

  return (
    <>

    {/* Nav bar e components */}
    <div className="container">
      <NavBar />
      <div className="teste-button-contact-us">
        <ContactUs />
      </div>

      <div className="container-tracks">
        <MajorBelt />
        <div className="minor-band">
          <MinorBand />
        </div>
      </div>
      </div>

      {/* Perfil do Usuário */}
      <div className="user-profile-container">
        <div className="profile-header">
          <h2>Perfil do Usuário</h2>
        </div>
        <div className="profile-info">
          <div className="profile-pic">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="user-details">
            <h3>Nome: {usuario.nome || "Não informado"}</h3>
            <p>Email: {usuario.email || "Não informado"}</p>
            <p>Telefone: {usuario.telefone || "Não informado"}</p>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div className="achievements">
        <h2>Suas Conquistas</h2>
        <div className="badges">
          {badges.map((badge, index) => (
            <div key={index} className="badge unlocked">
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progresso de Pontos */}
      <div className="points-progress">
        <h2>Progresso de Pontos</h2>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{usuario.pontos} / {goal} pontos</p>
      </div>

       {/* Botão para resgatar pontos */}
  <button onClick={handleRedeemPoints}>
    Resgatar Pontos
  </button>
 
    </>
  );
};

export default RewardsPage;
