import { BiLeaf } from "react-icons/bi";
import { BtnComponent } from "../../components/btnComponent";
import { ImgBusAndBike } from "../../components/imgBusAndBike";
import { NavBar } from "../../components/navbar";
import { MajorBelt } from "../../components/tracks/majorBelt";
import { MinorBand } from "../../components/tracks/minorBand";

import "./styles.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaRecycle, FaRegHeart } from "react-icons/fa";
import { LuAlertCircle } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Footer } from "../../components/footer";
import { ContactUs } from "../../components/btnContactUs";
import { ButtonRM } from "../../components/btnRm";

export const Home = () => {
  return (
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

      <section className="hero">
        <div className="hero-content">
          <div className="info-1">
            <h1>Revolucionando a Mobilidade Urbana com Sustentabilidade</h1>

            <iframe
              className="iframe-video-pit"
              width="460"
              height="255"
              src="https://www.youtube.com/embed/ID_DO_VIDEO"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div className="button-rm">
              <ButtonRM />
            </div>
          </div>

          <div className="info-2">
            <h1>Gs-Electric Inovações</h1>
            <p>
              Simplifique seus trajetos com bicicletas e ônibus elétricos, ganhe
              pontos e contribua para um futuro mais verde.
            </p>
          </div>
        </div>

        <div className="more-info">
          <div className="btns-more-info">
            <BtnComponent text="Saiba Mais" />
          </div>
          <div className="img-bus-and-bike">
            <ImgBusAndBike />
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="about-us-content">
          <p className="highlight">Sobre nós!</p>
          <h1 className="main-title ">Nossa Inovação</h1>
          <p className="description">
            Nossa startup nasceu com o objetivo de transformar a mobilidade
            urbana, proporcionando uma forma sustentável e acessível de
            transporte. Oferecemos o aluguel de bicicletas elétricas e a compra
            de passagens para ônibus elétricos, tudo integrado em um aplicativo
            fácil de usar. Além disso, recompensamos nossos usuários com pontos
            que podem ser trocados por descontos e prêmios, incentivando o uso
            de transportes ecológicos.
          </p>
          <button className="btn-more-info-blue">
            <span className="text-more-info-btn">Saiba Mais</span>
            <span className="arrow-btn-more-info">→</span>
          </button>
        </div>

        <div></div>

        <div className="about-us-details">
          <div className="titles-us-details">
            <span>Inovações</span>
            <span className="title-us-details-end">Sustentáveis</span>
          </div>

          <div className="text-us-details">
            <div className="text-us-right">
              <p>
                <strong>Aluguel de Bicicletas Elétricas:</strong> Oferecemos
                bicicletas elétricas de última geração, disponíveis para aluguel
                por meio do nosso aplicativo, facilitando o transporte urbano.
              </p>
              <p>
                <strong>Passagens para Ônibus Elétricos:</strong> Viaje com
                conforto e consciência, adquirindo passagens para ônibus
                elétricos diretamente pelo nosso aplicativo.
              </p>
            </div>

            <div className="text-us-left">
              <p>
                <strong>Sistema de Pontos:</strong> Ganhe pontos ao utilizar
                nossos serviços e troque por descontos, brindes e benefícios
                exclusivos. Quanto mais você usa, mais você ganha!
              </p>
              <p>
                <strong>Impacto Ambiental Positivo:</strong> Cada viagem feita
                em nossos veículos elétricos ajuda a reduzir as emissões de CO₂,
                promovendo um futuro mais limpo e sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="activities">
        <div className="our-mission-content">
          <div className="title-our-mission">
            <h1 className="">Nossa Missão</h1>
          </div>

          <div className="information-block-content">
            <div className="information-block-1">
              <img
                src="https://s3-alpha-sig.figma.com/img/8a8d/cea5/5934479c025249d2596a96cae8b61e81?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cz78RTGTRVWKCur4b3KO12LIAEOPre~hnU3O~nkoboMngu5esDqd45Y8nZYxfd9FvpXTFWAUwNkIMkYRdTOvZvXicRIfgRMzilfFSgmZDlgI3b~jKvk~koN-Y9AGEdtqW3ES8usS1YI1i8RxI51bA7mCDAVqqYKNLr0LYJbrZy8bNdEvV2UAxt7Yv7PObQFTbPjQpl4dhBO9fYWq09pfxmhA8eFooLeqykeIcVQBIhPpFCFn9lSBSNPAwtIY~2wOBe7OQmH2r4FKZVotfgcT1WsnEo6m1hRVg6EL4O7HjqKHbGLCnrMmBE43h75MppnVgatQ3GerbwL5VwxRKNNtZg__"
                alt=""
                className="img-information-block"
              />
              <div className="text-information--block">
                <span>
                  •Proporcionar uma experiência de transporte mais sustentável,
                  prática e acessível para todos, reduzindo a emissão de carbono
                  e promovendo um estilo de vida saudável.
                </span>
              </div>
            </div>
            <div className="information-block-2">
              <div className="text-information--block">
                <span>
                  •Desenvolver uma comunidade de usuários conscientes,
                  oferecendo recompensas e vantagens para aqueles que optam por
                  um transporte mais ecológico.
                </span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/090d/40f6/1856e64f8122cd1a2eb34abf6cd0458e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayrUdJQzWDB8KTq8UJYBeeh1oKo1pSqD7m-ecGgbewsI8CAOWuN-VncHpxjDj7sD6vki5ao-jL~DGOmx3W~COyVn5sP94~jNdr8aqOjqjFFx7XmDqWS0YK2gWSk0arNaTObXfkVNQXvYdtO1zQScGpJrkdmGoQUG6bJ8qmNejy1fSPQFuA0YaCYL5809FyWvpA36juv4VwHCroRg7XyEkJP~NSL68hbbbRxJAQk98kTNZNzP4ISYrVNC27HvjG65R3zZotgYje42UDA3INc2c7oInZVnxanAiOCAFC7Pfj2P7vtKvSLe~PLnh~oCSCeYIx8hYny8ZFaRB~9dAtsmfw__"
                alt=""
                className="img-information-block"
              />
            </div>
            <div className="information-block-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/3da6/cf3a/7f053d6fad4abb099137eba230b95310?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iVKebRlPIIJpRJ5RFtSg3JGuRMz2nNalfyx7U3JMjcjFPD3-N1ODm3x3SUgkAmhyIH5dM1IqbvKnB2fBu8--8kjSCIqe~2X2S7hARJxG5pfLNZinVztTOVlo1SLt6G-~7ZgyEZsmwKGxQ0SVY2tm7CfU3mgXKyAMs2aOhrgRaPjzCrP046lqrEtENf59lFSuzyFwZNHW4TFC3PjgIp~RtEzbPfNRbMHFdCC4hcLQnDuZNNGHJRz7YQr9GPdPsdCaBPyUJrY42z~kIQZ6hJ1yaq7mJkdf4xBPxMXE6rcAxmlVa2IcRRcCoMPh4TuzGxdeF6bFHN6DKBSsNuh6--bY1g__"
                alt=""
                className="img-information-block"
              />
              <div className="text-information--block">
                <span>
                  •Implementar soluções inovadoras que atendam às necessidades
                  da mobilidade urbana moderna.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="our-values-content">
          <div className="title-our-values">
            <h1>Nossos Valores</h1>
            <span>
              Com esses valores fundamentais, planejamos alcançar nossa missão
              com sucesso.
            </span>
          </div>

          <div className="our-values--box-items">
            <div className="our-values-ul">
              <div className="value-item">
                <BiLeaf />
                <span>
                  • Comprometidos com a redução da pegada de carbono e a
                  proteção do meio ambiente.
                </span>
              </div>
              <div className="value-item">
                <AiOutlineLike />
                <span>
                  • Buscamos constantemente novas soluções para aprimorar a
                  experiência de transporte.
                </span>
              </div>
              <div className="value-item">
                <FaRegHeart />
                <span>
                  • Valorizamos a construção de uma comunidade unida e
                  consciente, que faz escolhas responsáveis.
                </span>
              </div>
              <div className="value-item last-item">
                <FaRecycle />
                <span>
                  • Tornar o transporte sustentável disponível para todos,
                  independentemente de sua localização ou condição financeira.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="our-vision-content">
          <div className="our-vision-title-and-image">
            <h1>Nossa Visão</h1>
            <img
              src="https://s3-alpha-sig.figma.com/img/ac93/886a/e27120c63df8a4cf53e24fd675337a29?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWQgvzqCA8sznMYg-CBt5iBU8BXvlUFN4PjZIEoivFwA8gcaQkNXQq8Z9LCUjMQjKyL54KQfk2snxD~fgkEOF1U-d~zAxAXA0Lq8NmmXoD0y3cXOxGeD3xkrbpP-sUv1HGyNyNMXTcj4ydQ0UxDmD6n9BD7pt680iQHaV~yzvLVkHExgUH3bL9ur3I9~Of~Y85m9bnuL5E716GGfbp8TCTFmMhA-QpeJElGi6HMnIR9RlW1yaPw-3eiJOT8qL2mGFDGd8b3iLTNARAsx5PLmMz5MXbA-7-XrpVc3g5uormI1DJja~xgPBhgB5biJC-5Ys4PBL9Yc45KwrgHRFQY96g__"
              alt=""
            />
          </div>

          <div className="our-vision-items-box">
            <div className="our-vision-items">
              <div className="vision-item">
                <div className="svg-vision-box">
                  <LuAlertCircle />
                </div>
                <span>
                  • Ser a plataforma líder em mobilidade sustentável, integrando
                  soluções de transporte elétrico e recompensas que incentivam
                  escolhas ecológicas.
                </span>
              </div>
              <div className="vision-item">
                <div className="svg-vision-box">
                  <CiCloudOn />
                </div>
                <span>
                  • Criar uma rede de transporte eficiente, acessível e alinhada
                  com as metas globais de sustentabilidade.
                </span>
              </div>
              <div className="vision-item last-item">
                <div className="svg-vision-box">
                  <IoShieldCheckmarkOutline />
                </div>
                <span>
                  • Promover um estilo de vida ativo e saudável, incentivando o
                  uso de bicicletas e transporte público para reduzir o tráfego
                  e a poluição.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
