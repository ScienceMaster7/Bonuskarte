import { useNavigate } from "react-router-dom";
import speichern from "../services/speichern";

export default function AnzahlAngabe({
  product,
  größe,
  preis,
  bonuskartenRelevanz,
}) {
  const navigate = useNavigate();
  function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const aktuellesProdukt = [
      product,
      größe,
      preis,
      form.anzahl.value,
      bonuskartenRelevanz,
    ];

    speichern("aktuelleBestellung", aktuellesProdukt);
    form.reset();
    navigate("/abschließenOderFortsetzen");
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="number" name="anzahl" required min={1} />
        <button type="submit">Speichern und Weiter</button>
      </form>
    </>
  );
}
