import React, { useState } from "react";
import "./style.css";

export const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button className="shadow__btn" onClick={toggleModal}>
        Fale Conosco!
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <h2>Fale Conosco!</h2>
              <form>
                <div className="input-group">
                  <label htmlFor="name">Escreva Seu Nome</label>
                  <input type="text" id="name" placeholder="Escreva seu nome" />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Escreva Seu Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Escreva seu email"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Escreva Sua Mensagem</label>
                  <textarea
                    id="message"
                    placeholder="Escreva sua mensagem"
                    rows="4"
                  />
                </div>
                <button className="submit-btn" type="submit">
                  Enviar Mensagem
                </button>
              </form>
              <button className="close-btn" onClick={toggleModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
