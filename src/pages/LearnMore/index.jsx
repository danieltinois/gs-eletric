import { ContactUs } from "../../components/btnContactUs";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { FaLeaf, FaRegLightbulb, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import "./learn-more-style.css";
import { useEffect } from "react";

export const LearnMore = () => {
  useEffect(() => {
    document.title = "Gs-Eletric | Saiba Mais";
  }, []);

  return (
    <div className="saiba-mais">
      <NavBar />
      <ContactUs />

      {/* Header Section */}
      <section className="header-saiba-mais">
        <motion.div
          className="container-saiba-mais"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>Descubra Mais Sobre a GS-Eletric</h1>
          <p>
            Soluções que revolucionam a mobilidade urbana com sustentabilidade e
            inovação.
          </p>
        </motion.div>
      </section>

      {/* Sobre Nós Section */}
      <section className="sobre-nos">
        <motion.div
          className="container-saiba-mais"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Quem Somos</h2>
          <p>
            A GS-Eletric é uma empresa dedicada a criar soluções sustentáveis e
            inovadoras para mobilidade urbana. Nosso objetivo é transformar o
            transporte das cidades enquanto preservamos o meio ambiente para as
            futuras gerações.
          </p>
        </motion.div>
      </section>

      {/* Diferenciais Section */}
      <section className="diferenciais">
        <div className="container-saiba-mais">
          <h2>Nossos Diferenciais</h2>
          <div className="grid">
            <motion.div
              className="card-diferencial"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaLeaf className="icon" />
              <h3>Tecnologia de Ponta</h3>
              <p>
                Desenvolvemos sistemas elétricos inovadores, priorizando
                eficiência e desempenho.
              </p>
            </motion.div>
            <motion.div
              className="card-diferencial"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRegLightbulb className="icon" />
              <h3>Impacto Ambiental Reduzido</h3>
              <p>
                Trabalhamos para reduzir emissões de carbono e criar um futuro
                mais verde.
              </p>
            </motion.div>
            <motion.div
              className="card-diferencial"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaGlobeAmericas className="icon" />
              <h3>Compromisso com a Inovação</h3>
              <p>
                Buscamos constantemente novas formas de atender às necessidades
                das cidades modernas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="missao-saiba-mais">
        <motion.div
          className="container-saiba-mais"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Nossa Missão</h2>
          <p>
            Oferecer soluções de mobilidade que melhoram a qualidade de vida e
            respeitam o planeta.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
