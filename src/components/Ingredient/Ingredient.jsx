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
  setIngredientsOrder,
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
      const object = {
        ...ingredient,
        count,
      };
      setIngredientsOrder((preview) => [...preview, object]);
      setCount(0);
      setResetIngredients(false);
    }
  }, [resetIngredients]);

  const formatterPrices = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <IngredientContainer>
      <div>
        <p>{ingredient.nm_item}</p>
        <p>+ {formatterPrices.format(ingredient.vl_item)}</p>
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
