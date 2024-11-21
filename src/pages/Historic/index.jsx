import "./style.css";
import { motion } from "framer-motion";
import { NavBar } from "../../components/navbar";
import { ContactUs } from "../../components/btnContactUs";
import { useEffect } from "react";
import { Footer } from "../../components/footer";

export const Historic = () => {
  useEffect(() => {
    document.title = "Gs-Eletric | Historico";
  }, []);

  const historico = [
    {
      id: 1,
      tipo: "Bicicleta",
      data: "12/11/2024",
      destino: "Parque Central",
      duracao: "30min",
      valor: "R$ 15,00",
    },
    {
      id: 2,
      tipo: "Ônibus",
      data: "11/11/2024",
      destino: "Shopping",
      duracao: "45min",
      valor: "R$ 8,00",
    },
    {
      id: 3,
      tipo: "Bicicleta",
      data: "10/11/2024",
      destino: "Praia",
      duracao: "1h",
      valor: "R$ 20,00",
    },
    // mais entradas...
  ];

  const getIcon = (tipo) => {
    if (tipo === "Bicicleta") {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="40"
          height="40"
          className="bike-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="5" cy="18" r="3" />
          <circle cx="19" cy="18" r="3" />
          <path d="M5 18L9 9h6l4 9" />
          <path d="M9 9h6l4-6" />
        </motion.svg>
      );
    }
    if (tipo === "Ônibus") {
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="40"
          height="40"
          className="bus-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="5" cy="18" r="1" />
          <circle cx="19" cy="18" r="1" />
        </motion.svg>
      );
    }
    return null;
  };

  return (
    <>
      <NavBar />
      <ContactUs />

      <div className="history-content-box">
        <motion.div className="history-title">
          <h1>Histórico de Aluguel</h1>
        </motion.div>

        <div className="history-list">
          {historico.map((item) => (
            <motion.div
              key={item.id}
              className="history-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="history-card">
                <div className="history-icon">{getIcon(item.tipo)}</div>
                <div className="history-details">
                  <h3>{item.tipo}</h3>
                  <p>{item.data}</p>
                  <p>Destino: {item.destino}</p>
                  <p>Duração: {item.duracao}</p>
                  <p className="history-value">Valor: {item.valor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
