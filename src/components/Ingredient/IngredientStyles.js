import styled from "styled-components";

export const IngredientContainer = styled.div`
  background: white;
  height: 88px;
  border-bottom: 1px solid #e8a634;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  p:nth-child(1) {
    font-weight: 600;
    font-size: 14px;
    color: #4e4e4e;
  }
  p:nth-child(2) {
    font-size: 14px;
    color: #f09035;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  font-size: 1.5rem;
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  color: #d80000;
`;

export const Input = styled.input`
  width: 20px;
  height: 25px;
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: #4e4e4e;
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f09035;
  border-radius: 5px;
  height: 35px;
`;
