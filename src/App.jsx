import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import AnzahlAngabe from "./components/AnzahlAngabe";
import Steuern from "./pages/steuern";
import AbschließenOderFortsetzen from "./pages/ablschließenOderFortsetzen";
import Bonuskarte from "./pages/Bonuskarte";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <ProductList
                products={[
                  "Cafe",
                  "Kuchen",
                  "Frappés",
                  "Iced Drinks",
                  "Vital und Frisch",
                  "Kaltgetränke",
                  "Desserts",
                ]}
              />
            }
          />
          <Route
            path="/menu/Cafe"
            element={
              <ProductList
                products={[
                  "Espresso",
                  "Espresso Macchiato",
                  "Cafe",
                  "Flat White Espresso",
                  "Cappuccino",
                  "Cafe Latte",
                  "Latte Macchiato",
                  "Mocha Espresso",
                  "Vienna",
                ]}
              />
            }
          />
          <Route
            path="/menu/Cafe/Espresso"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/EspressoMacchiato"
            element={
              <AnzahlAngabe
                product={"Espresso Macchiato"}
                größe={"Klein"}
                preis={1.79}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cafe"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/FlatWhiteEspresso"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/Cappuccino"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/CafeLatte"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/LatteMacchiato"
            element={<ProductList products={["Klein", "Mittel"]} />}
          />
          <Route
            path="/menu/Cafe/MochaEspresso"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/Vienna"
            element={<ProductList products={["Klein", "Mittel", "Groß"]} />}
          />
          <Route
            path="/menu/Cafe/Espresso/Klein"
            element={
              <AnzahlAngabe
                product={"Espresso"}
                größe={"Klein"}
                preis={1.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Espresso/Groß"
            element={
              <AnzahlAngabe
                product={"Espresso"}
                größe={"Groß"}
                preis={2.19}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cafe/Klein"
            element={
              <AnzahlAngabe
                product={"Cafe"}
                größe={"Klein"}
                preis={1.79}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cafe/Mittel"
            element={
              <AnzahlAngabe
                product={"Cafe"}
                größe={"Mittel"}
                preis={2.19}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cafe/Groß"
            element={
              <AnzahlAngabe
                product={"Cafe"}
                größe={"Groß"}
                preis={2.49}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/FlatWhiteEspresso/Klein"
            element={
              <AnzahlAngabe
                product={"Flat White Espresso"}
                größe={"Klein"}
                preis={1.89}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/FlatWhiteEspresso/Mittel"
            element={
              <AnzahlAngabe
                product={"Flat White Espresso"}
                größe={"Mittel"}
                preis={2.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/FlatWhiteEspresso/Groß"
            element={
              <AnzahlAngabe
                product={"Flat White Espresso"}
                größe={"Groß"}
                preis={2.59}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cappuccino/Klein"
            element={
              <AnzahlAngabe
                product={"Cappuccino"}
                größe={"Klein"}
                preis={1.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cappuccino/Mittel"
            element={
              <AnzahlAngabe
                product={"Cappuccino"}
                größe={"Mittel"}
                preis={2.39}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Cappuccino/Groß"
            element={
              <AnzahlAngabe
                product={"Cappuccino"}
                größe={"Groß"}
                preis={2.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/LatteMacchiato/Klein"
            element={
              <AnzahlAngabe
                product={"Latte Macchiato"}
                größe={"Klein"}
                preis={2.39}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/LatteMacchiato/Mittel"
            element={
              <AnzahlAngabe
                product={"Latte Macchiato"}
                größe={"Mittel"}
                preis={2.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/MochaEspresso/Klein"
            element={
              <AnzahlAngabe
                product={"Mocha Espresso"}
                größe={"Klein"}
                preis={2.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/MochaEspresso/Mittel"
            element={
              <AnzahlAngabe
                product={"Mocha Espresso"}
                größe={"Mittel"}
                preis={2.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/MochaEspresso/Groß"
            element={
              <AnzahlAngabe
                product={"Mocha Espresso"}
                größe={"Groß"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/CafeLatte/Klein"
            element={
              <AnzahlAngabe
                product={"Cafe Latte"}
                größe={"Klein"}
                preis={1.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/CafeLatte/Mittel"
            element={
              <AnzahlAngabe
                product={"Cafe Latte"}
                größe={"Mittel"}
                preis={2.39}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/CafeLatte/Groß"
            element={
              <AnzahlAngabe
                product={"Cafe Latte"}
                größe={"Groß"}
                preis={2.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Vienna/Klein"
            element={
              <AnzahlAngabe
                product={"Vienna"}
                größe={"Klein"}
                preis={2.39}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Vienna/Mittel"
            element={
              <AnzahlAngabe
                product={"Vienna"}
                größe={"Mittel"}
                preis={2.69}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Cafe/Vienna/Groß"
            element={
              <AnzahlAngabe
                product={"Vienna"}
                größe={"Groß"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Kuchen"
            element={
              <ProductList
                products={["White Choc Lemon Cookie", "Blueberry Cheesecake"]}
              />
            }
          />
          <Route
            path="/menu/Kuchen/WhiteChocLemonCookie"
            element={
              <AnzahlAngabe
                product={"White Choc Lemon Cookie"}
                größe={""}
                preis={1.59}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/Kuchen/BlueberryCheesecake"
            element={
              <AnzahlAngabe
                product={"Blueberry Cheesecake"}
                größe={""}
                preis={1.0}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/Frappés"
            element={
              <ProductList products={["Schoko", "Chai", "Mocha", "Caramel"]} />
            }
          />
          <Route
            path="/menu/Frappés/Schoko"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/Frappés/Chai"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/Frappés/Mocha"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/Frappés/Caramel"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/Frappés/Mocha/Klein"
            element={
              <AnzahlAngabe
                product={"Mocha"}
                größe={"Klein"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Mocha/Groß"
            element={
              <AnzahlAngabe
                product={"Mocha"}
                größe={"Groß"}
                preis={3.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Caramel/Klein"
            element={
              <AnzahlAngabe
                product={"Chai"}
                größe={"Klein"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Caramel/Groß"
            element={
              <AnzahlAngabe
                product={"Chai"}
                größe={"Groß"}
                preis={3.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Chai/Klein"
            element={
              <AnzahlAngabe
                product={"Chai"}
                größe={"Klein"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Chai/Groß"
            element={
              <AnzahlAngabe
                product={"Chai"}
                größe={"Groß"}
                preis={3.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Schoko/Klein"
            element={
              <AnzahlAngabe
                product={"Schoko"}
                größe={"Klein"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/Frappés/Schoko/Groß"
            element={
              <AnzahlAngabe
                product={"Schoko"}
                größe={"Groß"}
                preis={3.29}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/IcedDrinks"
            element={
              <ProductList products={["Iced Schokolade", "Iced Coffee"]} />
            }
          />
          <Route
            path="/menu/IcedDrinks/IcedSchokolade"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/IcedDrinks/IcedCoffee"
            element={<ProductList products={["Klein", "Groß"]} />}
          />
          <Route
            path="/menu/IcedDrinks/IcedSchokolade/Klein"
            element={
              <AnzahlAngabe
                product={"Iced Schokolade"}
                größe={"Klein"}
                preis={2.59}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/IcedDrinks/IcedSchokolade/Groß"
            element={
              <AnzahlAngabe
                product={"Iced Schokolade"}
                größe={"Groß"}
                preis={2.99}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/IcedDrinks/IcedCoffee/Klein"
            element={
              <AnzahlAngabe
                product={"Iced Coffee"}
                größe={"Klein"}
                preis={2.59}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/IcedDrinks/IcedCoffee/Groß"
            element={
              <AnzahlAngabe
                product={"Iced Coffee"}
                größe={"Groß"}
                preis={2.99}
                bonuskartenRelevanz={true}
              />
            }
          />
          <Route
            path="/menu/VitalundFrisch"
            element={
              <ProductList products={["Italian Bagel", "Chicken Bagel"]} />
            }
          />
          <Route
            path="/menu/VitalundFrisch/ItalianBagel"
            element={
              <AnzahlAngabe
                product={"Italian Bagel"}
                größe={""}
                preis={2.69}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/VitalundFrisch/ChickenBagel"
            element={
              <AnzahlAngabe
                product={"Chicken Bagel"}
                größe={""}
                preis={2.69}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/Kaltgetränke"
            element={
              <ProductList products={["Stilles Mineralwasser", "Bionade"]} />
            }
          />
          <Route
            path="/menu/Kaltgetränke/StillesMineralwasser"
            element={
              <AnzahlAngabe
                product={"StillesMineralwasser"}
                größe={""}
                preis={1.99}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/Kaltgetränke/Bionade"
            element={
              <AnzahlAngabe
                product={"Bionade"}
                größe={""}
                preis={2.29}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/menu/Desserts"
            element={<ProductList products={["Zitronenkuchen"]} />}
          />
          <Route
            path="/menu/Kaltgetränke/Zitronenkuchen"
            element={
              <AnzahlAngabe
                product={"Zitronenkuchen"}
                größe={""}
                preis={1.0}
                bonuskartenRelevanz={false}
              />
            }
          />
          <Route
            path="/abschließenOderFortsetzen"
            element={<AbschließenOderFortsetzen />}
          />
          <Route path="/bonuskarte" element={<Bonuskarte />} />
          <Route path="/steuern" element={<Steuern />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
