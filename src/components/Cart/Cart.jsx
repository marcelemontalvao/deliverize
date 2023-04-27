import Ingredient from "../Ingredient/Ingredient";
import {
  CartContainer,
  CustomRadio,
  DivCutlery,
  Button,
  Input,
  DivButtons,
  DivAddOrder,
} from "./CartStyles";
import { useState } from "react";
import Modal from "../Modal/Modal";
import LiModal from "../LiModal/LiModal";

const Cart = ({
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
  const [orderCount, setOrderCount] = useState(1);
  const [resetIngredients, setResetIngredients] = useState(false);

  const handleIncrement = () => {
    setOrderCount(orderCount + 1);
  };

  const handleDecrement = () => {
    if (orderCount > 1) {
      setOrderCount(orderCount - 1);
    }
  };

  const addToCartHeader = () => {
    ingredientsOrder.splice(0, ingredientsOrder.length);
    setResetIngredients(true);
    setTotalCount(0);
    setOrderCount(1);
    setCartHeaderCount(cartHeaderCount + 1);
    openModal();
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CartContainer>
      <div>
        <div className="title-div-cart">
          <p>Adicionar Ingredientes</p>
          <span>Até 8 ingredientes.</span>
        </div>
        {ingredients.map((ingredient, index) => (
          <Ingredient
            ingredient={ingredient}
            totalCount={totalCount}
            setTotalCount={setTotalCount}
            resetIngredients={resetIngredients}
            setResetIngredients={setResetIngredients}
            ingredientsOrder={ingredientsOrder}
            setIngredientsOrder={setIngredientsOrder}
            key={index}
          />
        ))}
        <div className="title-div-cart">
          <p>Precisa de Talher?</p>
        </div>
        <DivCutlery>
          <div>
            <span>Sim</span>
            <CustomRadio type="radio" name="talher" />
          </div>
          <div>
            <span>Não</span>
            <CustomRadio type="radio" name="talher" />
          </div>
        </DivCutlery>
      </div>
      <DivAddOrder>
        <DivButtons>
          <Button onClick={handleDecrement}>-</Button>
          <Input value={orderCount}></Input>
          <Button onClick={handleIncrement}>+</Button>
        </DivButtons>
        <button onClick={() => addToCartHeader()}>Adicionar</button>
      </DivAddOrder>
      {isModalOpen && (
        <Modal
          show={openModal}
          onClose={handleCloseModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        >
          <div>
            <span>Adicionado com Sucesso</span>
          </div>
          <p>{product.nm_product}</p>
          <span>Ingredientes:</span>
          <ul>
            {ingredientsOrder.map((ingredient, index) => (
              <LiModal ingredient={ingredient} key={index} />
            ))}
          </ul>
        </Modal>
      )}
    </CartContainer>
  );
};

export default Cart;
