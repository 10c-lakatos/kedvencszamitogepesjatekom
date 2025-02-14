import './Fooldal.css'
import cover from './assets/cover.jpg'
function Fooldal() {

  return (
    <>
    <div className="container">
      <h1 className="FoCim">Kedvenc számítógépes játékom</h1>
      <h1>Tom Clancy's Rainbow Six Siege</h1>
      <img
        src={cover}
        alt="Rainbow Six Siege Cover"
        className="game-image"
      />
      <p>A Rainbow Six Siege egy taktikai FPS, amely a csapatmunkára és a stratégiai gondolkodásra épül. A játék különböző operátorokat kínál, mindegyik egyedi képességekkel rendelkezik.</p>
      <ul className="lista-elonyokbol">
        <li>Realista és taktikai játékmenet</li>
        <li>Dinamikus környezet és rombolhatóság</li>
        <li>Versenyszerű multiplayer mód</li>
        <li>Folyamatosan bővülő operátorok és pályák</li>
      </ul>
      <br />
      <button className="official-button" onClick={() => window.open("https://www.ubisoft.com/game/rainbow-six/siege", "_blank")}>
        Hivatalos oldal
      </button>
      <br />
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/6wlvYh0h63k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
    </div>
    </>
  );
}

export default Fooldal
