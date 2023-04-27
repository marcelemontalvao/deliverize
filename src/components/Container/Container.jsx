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
  openModal,
  closeModal,
  isModalOpen,
  setIsModalOpen,
  ingredientsOrder,
  setIngredientsOrder,
}) => {
  return (
    <ContainerStyles>
      <Product product={product} />
      <Cart
        product={product}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        ingredients={ingredients}
        cartHeaderCount={cartHeaderCount}
        setCartHeaderCount={setCartHeaderCount}
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        ingredientsOrder={ingredientsOrder}
        setIngredientsOrder={setIngredientsOrder}
      />
    </ContainerStyles>
  );
};

export default Container;
