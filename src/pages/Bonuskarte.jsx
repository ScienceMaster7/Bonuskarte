import { useNavigate } from "react-router-dom";

export default function Bonuskarte() {
  const navigate = useNavigate();
  const relevanteProdukte = JSON.parse(
    localStorage.getItem("bonuskartenRelevanz")
  );
  function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const kundennummer = Number(form.kundennummer.value);
    const bonuskarten = JSON.parse(localStorage.getItem("Bonuskarten"));

    if (kundennummer < 0 || kundennummer > bonuskarten.length - 1) {
      alert("Bitte geben sie eine valide Kundennummer ein!");

      form.reset();
    } else {
      let alterBonusKartenWert = bonuskarten[kundennummer];

      let bonuskarteUpdate =
        bonuskarten[kundennummer] + Number(relevanteProdukte[1]);

      while (bonuskarteUpdate >= 15) {
        bonuskarteUpdate = bonuskarteUpdate - 15;
      }

      bonuskarten[kundennummer] = bonuskarteUpdate;

      if (alterBonusKartenWert > 10) {
        alterBonusKartenWert = alterBonusKartenWert - 10;
      } else if (alterBonusKartenWert > 5) {
        alterBonusKartenWert = alterBonusKartenWert - 5;
      }

      const anzahlGratisProdukte =
        (alterBonusKartenWert + Number(relevanteProdukte[1])) / 5;

      localStorage.setItem(
        "anzahlGratisProdukte",
        Math.floor(anzahlGratisProdukte)
      );

      localStorage.setItem("Bonuskarten", JSON.stringify(bonuskarten));

      navigate("/steuern");
    }
  }

  function handleNeu() {
    const bonuskarten = localStorage.getItem("Bonuskarten");

    const anzahlGratisProdukte = Number(relevanteProdukte[1]) / 5;
    localStorage.setItem(
      "anzahlGratisProdukte",
      Math.floor(anzahlGratisProdukte)
    );
    if (bonuskarten !== null) {
      let storedItems = JSON.parse(bonuskarten);

      storedItems.push(Number(relevanteProdukte[1]));

      localStorage.setItem("Bonuskarten", JSON.stringify(storedItems));
    } else {
      const neueBonuskarte = [relevanteProdukte[1]];
      localStorage.setItem("Bonuskarten", JSON.stringify(neueBonuskarte));
    }

    navigate("/steuern");
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="number" name="kundennummer" required />
        <button type="submit">stempeln</button>
      </form>
      <button onClick={handleNeu}>neu</button>
    </>
  );
}
