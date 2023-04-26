import styled from "styled-components";

export const ProductContainer = styled.section`
  max-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;

  img {
    width: 220px;
    height: 150px;
    margin: 0 auto;
  }

  div p:nth-child(1) {
    font-weight: 600;
    font-size: 18px;
    color: #4e4e4e;
    padding-bottom: 15px;
  }

  div p:nth-child(2) {
    font-size: 16px;
    color: #4e4e4e;
    padding-bottom: 10px;
  }

  div:nth-child(3) {
    display: flex;
    width: 140px;
    justify-content: space-between;
  }

  div:nth-child(3) span {
    font-size: 14px;
  }

  div:nth-child(3) span:nth-child(1) {
    color: #e49700;
  }

  div:nth-child(3) span:nth-child(2) {
    text-decoration: line-through;
    color: #4e4e4e;
  }

  @media (min-width: 900px) {
    margin-right: 150px;
    margin-left: 10px;

    img {
      width: 597px;
      height: 388px;
    }

    div:nth-child(2) p:nth-child(1) {
      width: 100%;
      font-size: 28px;
    }
    div:nth-child(2) p:nth-child(2) {
      width: 100%;
      font-size: 20px;
    }
    div:nth-child(2) span {
      margin-right: 15px;
      margin-top: 15px;
      font-size: 32px;
    }
  }
`;
