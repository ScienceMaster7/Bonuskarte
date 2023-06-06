import { Link } from "react-router-dom";
export default function ProductList({ products }) {
  const renderedProducts = products.map((product, index) => {
    return (
      <>
        <Link to={product.replace(/\s/g, "")} key={index}>
          <button>{product}</button>
        </Link>
      </>
    );
  });
  return renderedProducts;
}
