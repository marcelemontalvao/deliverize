import {
  IngredientContainer,
  Button,
  Input,
  DivButtons,
} from "./IngredientStyles";
import { useState, useEffect } from "react";
const Ingredient = ({
  ingredient,
  totalCount,
  setTotalCount,
  resetIngredients,
  setResetIngredients,
}) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 8 && totalCount < 8) {
      setCount(count + 1);
      setTotalCount(totalCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0 && totalCount > 0) {
      setCount(count - 1);
      setTotalCount(totalCount - 1);
    }
  };

  useEffect(() => {
    if (resetIngredients) {
      setCount(0);
      setResetIngredients(false);
    }
  }, [resetIngredients]);
  return (
    <IngredientContainer>
      <div>
        <p>{ingredient.nm_item}</p>
        <p>
          +
          {ingredient.vl_item.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <DivButtons>
        <Button onClick={handleDecrement}>-</Button>
        <Input value={count}></Input>
        <Button onClick={handleIncrement}>+</Button>
      </DivButtons>
    </IngredientContainer>
  );
};

export default Ingredient;
