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

const Cart = ({
  ingredients,
  totalCount,
  setTotalCount,
  cartHeaderCount,
  setCartHeaderCount,
}) => {
  console.log(cartHeaderCount);
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
    setTotalCount(0);
    setOrderCount(1);
    setResetIngredients(true);
    setCartHeaderCount(cartHeaderCount + 1);
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
        <button onClick={addToCartHeader}>Adicionar</button>
      </DivAddOrder>
    </CartContainer>
  );
};

export default Cart;
