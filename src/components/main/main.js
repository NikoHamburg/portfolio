import "./main.css";

function Main() {
  return (
    <>
      <div className="border-gradient"></div>
      <div className="main">
        <div className="links">
          <h1>Willkommen auf meiner Portfolio-Seite</h1>
          <br />
          <p>Mein Name ist Niko, ich bin ein professioneller Webentwickler.</p>
          <br />
          <p>Ich arbeite mit: </p>
          <div className="mern"></div>
        </div>
        <div className="rechts">
          <div className="text">
            <p>
              Ich lebe in Hamburg und suche einen Job in Hamburg oder
              Norderstedt.
            </p>
            <br />
            <br />
            <p>
              Ich habe einen Hund, der mich in mein neues Arbeitsleben begleiten
              möchte. Sein Name ist Skooma.
            </p>
            <div className="skooma"></div>
          </div>
          <div className="niko"></div>
        </div>
      </div>
      <div className="border-gradient"></div>
    </>
  );
}

export default Main;
