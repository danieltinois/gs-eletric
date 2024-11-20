import { useState } from "react";
import "./style.css";

export const ButtonRM = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const participants = [
    { name: "Daniel de Assis Lobo Tinois", rm: "1234" },
    { name: "Daniel de Assis Lobo Tinois", rm: "1234" },
    { name: "Daniel de Assis Lobo Tinois", rm: "1234" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button className="download-button" onClick={toggleModal}>
        <div className="docs">
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={16} y1={13} x2={8} y2={13} />
            <line x1={16} y1={17} x2={8} y2={17} />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          RM's
        </div>
        <div className="download">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} y1={15} x2={12} y2={3} />
          </svg>
        </div>
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <h2>Participantes do Grupo</h2>
              <ul>
                {participants.map((participant, index) => (
                  <li key={index}>
                    <strong>{participant.name}</strong>: RM {participant.rm}
                  </li>
                ))}
              </ul>
              <div className="close-btn-div">
                <button className="close-btn" onClick={toggleModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
