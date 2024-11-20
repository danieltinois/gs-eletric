import "./style.css";

export const BtnComponent = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {/* SVG do corpo principal do botão */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="199"
        height="45"
        viewBox="0 0 199 45"
        className="button-svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 44.3041L22.8486 0H199V0.158163L175.992 45H0V44.3041Z"
          fill="#F3BC2B"
        />
      </svg>
      <span className="button-text">{text}</span>
      {/* SVG da seta ao lado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="45"
        viewBox="0 0 76 45"
        className="button-arrow"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 45H53L76.0079 0.158163V0H23.0079V0.158163L0 45Z"
          fill="#FB9E02"
        />
        <foreignObject x="18" y="8" width="40" height="30">
          <span className="arrow-icon">→</span>
        </foreignObject>
      </svg>
    </button>
  );
};
