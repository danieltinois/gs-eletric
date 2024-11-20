import React from 'react';
import './style.css';


export default function Beneficios() {
    return (
      <div className="page-wrapper">
        <header className="header">
          <h1 className="title">Por que escolher Ônibus e Veículos Elétricos?</h1>
          <p className="subtitle">
            Entenda os impactos positivos no meio ambiente, na economia e na sociedade.
          </p>
        </header>
  
        {/* Seção de Introdução */}
        <section className="intro-section">
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Ônibus elétrico sustentável" 
            className="intro-image" 
          />
          <div className="intro-text">
            <h2 className="section-title">Mobilidade Sustentável</h2>
            <p>
              A adoção de veículos elétricos no transporte público é um passo essencial para 
              alcançar cidades mais limpas, eficientes e preparadas para o futuro. Com uma infraestrutura 
              em evolução, os ônibus elétricos oferecem uma alternativa prática, econômica e sustentável 
              para os desafios urbanos do século XXI.
            </p>
          </div>
        </section>
  
        {/* Seção de Benefícios */}
        <section className="benefits-section">
          <h2 className="section-title">Benefícios Diretos</h2>
          <div className="benefit-card">
            <div className="icon-wrapper">🌱</div>
            <h3 className="benefit-title">Qualidade do Ar</h3>
            <p className="benefit-description">
              Ônibus elétricos eliminam emissões de CO2, reduzindo drasticamente os níveis de poluição do ar nas cidades.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">🔇</div>
            <h3 className="benefit-title">Menor Poluição Sonora</h3>
            <p className="benefit-description">
              Com motores quase silenciosos, os veículos elétricos melhoram o ambiente sonoro, especialmente em áreas densas.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">⚡</div>
            <h3 className="benefit-title">Eficiência Energética</h3>
            <p className="benefit-description">
              A energia elétrica é utilizada de maneira muito mais eficiente do que os combustíveis fósseis.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">🌎</div>
            <h3 className="benefit-title">Impacto Global</h3>
            <p className="benefit-description">
              São fundamentais para atingir metas de sustentabilidade e combater as mudanças climáticas.
            </p>
          </div>
        </section>
  
        {/* Seção de Economia */}
        <section className="economy-section">
          <h2 className="section-title">Redução de Custos</h2>
          <div className="economy-content">
            <img 
              src="https://via.placeholder.com/400x250" 
              alt="Gráfico de economia" 
              className="economy-image" 
            />
            <div className="economy-text">
              <p>
                Apesar de um custo inicial maior, veículos elétricos são mais econômicos a longo prazo, 
                graças à redução de gastos com combustíveis e manutenção. Estudos mostram que o custo 
                por quilômetro rodado pode ser até 40% menor em comparação com veículos a diesel.
              </p>
              <p>
                Além disso, incentivos fiscais e programas governamentais podem tornar a transição ainda 
                mais acessível para operadores de transporte público.
              </p>
            </div>
          </div>
        </section>
  
        {/* Seção de Sustentabilidade */}
        <section className="sustainability-section">
          <h2 className="section-title">O Futuro é Verde</h2>
          <p>
            Ao investir em transporte público elétrico, não estamos apenas melhorando nossa qualidade de 
            vida hoje, mas também garantindo um futuro mais sustentável para as próximas gerações. 
            Cada ônibus elétrico que substitui um veículo a diesel reduz toneladas de emissões anuais de CO2.
          </p>
          <div className="sustainability-stats">
            <div className="stat">
              <h3>75%</h3>
              <p>Redução nas emissões de carbono</p>
            </div>
            <div className="stat">
              <h3>40%</h3>
              <p>Economia nos custos operacionais</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Energia limpa e renovável</p>
            </div>
          </div>
        </section>
  
        {/* Seção Final de Chamada para Ação */}
        <section className="cta-section">
          <h2>Junte-se à Mudança</h2>
          <p>
            Apoie o transporte público sustentável e contribua para um mundo mais saudável e ecológico.
          </p>
          <button className="cta-button">Saiba Mais</button>
        </section>
  
        <footer className="footer">
          ©️ 2024 Gs-Electric Todos os direitos reservados.
        </footer>
      </div>
    );
  }