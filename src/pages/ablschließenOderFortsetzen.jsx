import { Link, useNavigate } from "react-router-dom";

export default function AbschließenOderFortsetzen() {
  let bonuskartenRelevant = false;
  let anzahlRelevanterProdukte = 0;
  const navigate = useNavigate();
  function handleOnClick() {
    const aktuelleBestellung = JSON.parse(
      localStorage.getItem("aktuelleBestellung")
    );

    aktuelleBestellung.forEach((bestellung) => {
      if (bestellung[4]) {
        anzahlRelevanterProdukte =
          anzahlRelevanterProdukte + Number(bestellung[3]);
        bonuskartenRelevant = true;
      }
    });

    if (bonuskartenRelevant) {
      const bonuskartenRelevanz = ["true", anzahlRelevanterProdukte];
      localStorage.setItem(
        "bonuskartenRelevanz",
        JSON.stringify(bonuskartenRelevanz)
      );
      navigate("/bonuskarte");
    } else {
      localStorage.setItem("bonuskartenRelevanz", "false");
      navigate("/steuern");
    }
  }
  return (
    <>
      <button>
        <Link to={"/menu"}>Bestellung fortsetzen</Link>
      </button>
      <button onClick={handleOnClick}>Bestellung abschließen</button>
    </>
  );
}
