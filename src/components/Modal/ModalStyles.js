import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    width: 300px;
    height: 200px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }

  .modal div {
    background: #f09035;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .modal div span {
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  .modal p {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    padding: 15px 0 15px 20px;
    color: #bc2e31;
  }

  .modal span {
    font-size: 16px;
    color: #4e4e4e;
    font-weight: 500;
    padding: 15px 0 15px 20px;
  }

  .modal ul {
    padding: 15px 0 15px 20px;
  }

  .modal li {
    font-size: 14px;
    color: #4e4e4e;
    font-weight: 500;
    padding: 1px 0 0px 0px;
    list-style-type: disc;
  }
`;
