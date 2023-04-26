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

const Cart = ({ ingredients, totalCount, setTotalCount }) => {
  const [orderCount, setOrderCount] = useState(0);

  const handleIncrement = () => {
    setOrderCount(orderCount + 1);
  };

  const handleDecrement = () => {
    if (orderCount > 0) {
      setOrderCount(orderCount - 1);
    }
  };

  const addToCartHeader = () => {
    setTotalCount(0);
    setOrderCount(0);
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
            key={index}
          />
        ))}
        <div className="title-div-cart">
          <p>Precisa de Talher?</p>
        </div>
        <DivCutlery>
          <div>
            <span>Sim</span>
            <CustomRadio type="radio" />
          </div>
          <div>
            <span>Não</span>
            <CustomRadio type="radio" />
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
