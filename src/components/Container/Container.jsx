import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { ContainerStyles } from "./ContainerStyles";

const Container = ({
  product,
  ingredients,
  totalCount,
  setTotalCount,
  cartHeaderCount,
  setCartHeaderCount,
}) => {
  return (
    <ContainerStyles>
      <Product product={product} />
      <Cart
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        ingredients={ingredients}
        cartHeaderCount={cartHeaderCount}
        setCartHeaderCount={setCartHeaderCount}
      />
    </ContainerStyles>
  );
};

export default Container;
