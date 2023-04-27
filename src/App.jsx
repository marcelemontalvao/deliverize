import axios from "axios";
import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  const [product, setProduct] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cartHeaderCount, setCartHeaderCount] = useState(0);
  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios.get(
          "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products"
        );
        setProduct(data[0]);
        setIngredients(data[0].ingredients[0].itens);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      <Header cartHeaderCount={cartHeaderCount} />
      <Container
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        product={product}
        ingredients={ingredients}
        cartHeaderCount={cartHeaderCount}
        setCartHeaderCount={setCartHeaderCount}
      />
    </>
  );
}

export default App;
