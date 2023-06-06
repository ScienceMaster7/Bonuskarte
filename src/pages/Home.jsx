import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <button>
        <Link to={"menu"}>Bestellung aufnehmen</Link>
      </button>
    </>
  );
}
