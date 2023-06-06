import { useNavigate } from "react-router-dom";

export default function Steuern() {
  const navigate = useNavigate();

  function rechnungErstellen(steuer) {
    const bestellteProdukte = JSON.parse(
      localStorage.getItem("aktuelleBestellung")
    );

    let anzahlGratisProdukte = Number(
      localStorage.getItem("anzahlGratisProdukte")
    );

    if (anzahlGratisProdukte != null && anzahlGratisProdukte > 0) {
      localStorage.setItem("GratisProdukte", JSON.stringify([]));

      while (anzahlGratisProdukte > 0) {
        let smallestPrice = 10;
        let smallestIndex = -1;

        for (let i = 0; i < bestellteProdukte.length; i++) {
          const currentPrize = bestellteProdukte[i][2];

          if (currentPrize < smallestPrice && bestellteProdukte[i][4]) {
            smallestPrice = currentPrize;
            smallestIndex = i;
          }
        }

        const anzahlGünstigstesProdukt = bestellteProdukte[smallestIndex][3];

        if (anzahlGünstigstesProdukt <= anzahlGratisProdukte) {
          const GratisProdukte = JSON.parse(
            localStorage.getItem("GratisProdukte")
          );

          GratisProdukte.push(bestellteProdukte[smallestIndex]);

          localStorage.setItem(
            "GratisProdukte",
            JSON.stringify(GratisProdukte)
          );

          bestellteProdukte.splice(smallestIndex, 1);
        }

        if (anzahlGünstigstesProdukt > anzahlGratisProdukte) {
          const GratisProdukte = JSON.parse(
            localStorage.getItem("GratisProdukte")
          );

          GratisProdukte.push(bestellteProdukte[smallestIndex]);

          GratisProdukte[GratisProdukte.length - 1][3] = anzahlGratisProdukte;

          localStorage.setItem(
            "GratisProdukte",
            JSON.stringify(GratisProdukte)
          );

          bestellteProdukte[smallestIndex][3] =
            anzahlGünstigstesProdukt - anzahlGratisProdukte;
        }

        anzahlGratisProdukte = anzahlGratisProdukte - anzahlGünstigstesProdukt;
      }
    }

    let gesamtSumme = 0;

    const rechnung = bestellteProdukte.map((produkt) => {
      const produktSumme = produkt[2] * produkt[3];

      gesamtSumme = gesamtSumme + produktSumme;

      return `${produkt[3]} mal ${produkt[0]}, ${produkt[1]} für ${
        produkt[2]
      }€ : ${produktSumme.toFixed(2)}€ \n`;
    });

    gesamtSumme = (gesamtSumme + (gesamtSumme / 100) * steuer).toFixed(2);

    const GratisProdukte = JSON.parse(localStorage.getItem("GratisProdukte"));

    if (GratisProdukte != null) {
      const rechnungGratisProdukte = GratisProdukte.map((produkt) => {
        return `${produkt[3]} mal ${produkt[0]}, ${produkt[1]} für 0.00€ \n`;
      });

      alert(
        `${rechnung} Sie erhalten ${localStorage.getItem(
          "anzahlGratisProdukte"
        )} Produkte Gratis. ${rechnungGratisProdukte} \n Gesamt Summe: ${Number(
          gesamtSumme
        ).toFixed(2)}€`
      );
    } else {
      alert(`${rechnung} \n Gesamt Summe: ${Number(gesamtSumme).toFixed(2)}€`);
    }

    localStorage.removeItem("anzahlGratisProdukte");
    localStorage.removeItem("aktuelleBestellung");
    localStorage.removeItem("bonuskartenRelevanz");
    localStorage.removeItem("GratisProdukte");

    navigate("/");
  }
  return (
    <>
      <button onClick={() => rechnungErstellen(19)}>In House</button>
      <button onClick={() => rechnungErstellen(7)}>To go</button>
    </>
  );
}
