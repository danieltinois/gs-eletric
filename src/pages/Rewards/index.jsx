import { motion } from "framer-motion";
import "./style.css"; // Estilos para a página
import { NavBar } from "../../components/navbar";
import { ContactUs } from "../../components/btnContactUs";
import { useEffect } from "react";

const RewardsPage = () => {
  useEffect(() => {
    document.title = "Gs-Eletric | Recompensas";
  }, []);

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

  // Gera as estrelas dinamicamente no JSX
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        ></div>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="starry-background">{generateStars()}</div>

      <NavBar />
      <ContactUs />

      <div className="rewards-content-box">
        <div className="game-status-container">
          <motion.div
            className="background-animation"
            animate={{ x: ["100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <div className="centered-content">
            <div className="status-box">
              <motion.div
                className="user-profile-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2>Perfil do Usuário</h2>
                <div className="profile-info">
                  <div className="profile-pic">
                    <img
                      src="https://avatars.githubusercontent.com/u/72824112?v=4"
                      alt="Profile"
                    />
                  </div>
                  <div className="user-details">
                    <h3>Nome: {usuario.nome || "Não informado"}</h3>
                    <p>Email: {usuario.email || "Não informado"}</p>
                    <p>Telefone: {usuario.telefone || "Não informado"}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="achievements"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 80 }}
              >
                <h2>Suas Conquistas</h2>
                <div className="badges">
                  {badges.map((badge, index) => (
                    <motion.div
                      key={index}
                      className="badge unlocked"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span>{badge}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="points-progress"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2>Progresso de Pontos</h2>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p>
                  {usuario.pontos} / {goal} pontos
                </p>
              </motion.div>

              <motion.button
                className="btn-points-claim"
                onClick={handleRedeemPoints}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resgatar Pontos
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsPage;
