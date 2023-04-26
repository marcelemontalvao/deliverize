import styled from "styled-components";

export const CartContainer = styled.div`
  width: 90%;
  :nth-child(2) {
    margin-top: 30px;
  }

  .title-div-cart {
    background: rgba(253, 215, 14, 0.2);
    padding: 8px 0px 5px 8px;
    min-height: 40px;
    p {
      font-weight: 600;
      font-size: 14px;
      color: #4e4e4e;
    }
    span {
      font-size: 12px;
      line-height: 20px;
      color: #e49700;
    }
    margin-top: 10px;
  }

  @media (min-width: 900px) {
    border: 1px solid #4e4e4e;
    padding: 30px;
    border-radius: 10px;
  }
`;

export const CustomRadio = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #febc10;

  &:checked {
    background-color: #febc10;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const DivCutlery = styled.div`
  background: white;
  div {
    display: flex;
    justify-content: space-between;
    padding: 8px 8px 5px 8px;
  }

  span {
    color: #4e4e4e;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
export const Button = styled.button`
  font-size: 1.8rem;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  color: #d80000;
`;

export const Input = styled.input`
  width: 60%;
  height: 25px;
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: #4e4e4e;
`;

export const DivButtons = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.8px solid #f09035;
  border-radius: 5px;
  height: 40px;
`;
export const DivAddOrder = styled.div`
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  div,
  button {
    width: 45%;
  }

  button:nth-child(2) {
    border: none;
    background-color: #f09035;
    border-radius: 4px;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    margin-bottom: 0px;
    margin-top: 20px;
  }
`;
