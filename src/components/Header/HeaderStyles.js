import styled from "styled-components";

export const HeaderContainer = styled.header`
  div:nth-child(2) {
    display: none;
  }
  img {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  height: 36px;
  padding: 20px;
  background-color: #f4f4f4;
  width: 100%;

  @media (min-width: 900px) {
    div {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }

    div:nth-child(2) section {
      display: flex;
      justify-content: space-between;
      color: #ed3237;
      height: 40px;
    }

    input {
      border: 1.9px solid #ed3237;
      padding: 15px;
      width: 30%;
      margin-right: 25px;
      border-radius: 4px;
    }

    input::placeholder {
      color: #656363;
      font-size: 14px;
    }

    img {
      margin: 0;
    }

    .margin-r {
      margin-right: 15px;
    }
  }
`;

export const DivNumberCart = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;
  background-color: #f09035;
  border-radius: 50%;
  width: 16px !important;
  height: 16px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  span {
    font-size: 10px;
    color: #ffffff;
  }
`;

export const DivCartImg = styled.div`
  position: relative;
  height: 10px;
`;
