import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaVolumeMute, FaBolt, FaGlobeAmericas } from "react-icons/fa";
import "./style.css";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ContactUs } from "../../components/btnContactUs";
import { Link } from "react-router-dom";

export default function Beneficios() {
  return (
    <>
      <NavBar />
      <ContactUs />
      <div className="benefits-page">
        <motion.header
          className="header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="title">
            Por que escolher Ônibus e Veículos Elétricos?
          </h1>
          <p className="subtitle">
            Descubra os benefícios ambientais, econômicos e sociais da
            mobilidade elétrica.
          </p>
        </motion.header>

        <motion.section
          className="intro-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="intro-content">
            <motion.h2
              className="section-title"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Transformando a Mobilidade Urbana
            </motion.h2>
            <motion.p
              className="intro-text"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Os ônibus e veículos elétricos são uma solução essencial para um
              futuro mais verde e sustentável. Ao substituir os combustíveis
              fósseis por energia limpa, estamos não só melhorando a qualidade
              do ar, mas também reduzindo custos e promovendo cidades mais
              inteligentes.
            </motion.p>
          </div>
          <motion.img
            src="https://www.rivaincorporadora.com.br/wp-content/uploads/2023/06/mobilidade-urbana.jpg"
            alt="Mobilidade Urbana"
            className="intro-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.section>

        <motion.section
          className="benefits-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Benefícios para Todos</h2>
          <div className="benefit-cards">
            <motion.div
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaLeaf className="icon" />
              <h3 className="card-title">Qualidade do Ar</h3>
              <p className="card-description">
                Reduz significativamente a emissão de poluentes e melhora a
                qualidade do ar nas cidades.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaVolumeMute className="icon" />
              <h3 className="card-title">Menor Poluição Sonora</h3>
              <p className="card-description">
                O motor elétrico proporciona uma operação mais silenciosa,
                reduzindo a poluição sonora.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaBolt className="icon" />
              <h3 className="card-title">Eficiência Energética</h3>
              <p className="card-description">
                A energia elétrica é mais eficiente, com menor desperdício em
                comparação aos combustíveis fósseis.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaGlobeAmericas className="icon" />
              <h3 className="card-title">Impacto Global</h3>
              <p className="card-description">
                Contribui diretamente para a sustentabilidade global e combate
                as mudanças climáticas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="cta-title">Junte-se à Revolução Verde!</h2>
          <p className="cta-text">
            Apoie a transformação para uma mobilidade mais limpa e contribua
            para um futuro mais sustentável.
          </p>
          <button className="cta-button">
            <Link to="/saiba-mais" className="cta-button-link">
              Saiba Mais
            </Link>
          </button>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}
