import styled from "styled-components";
export const ContainerStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 900px) {
    section {
      max-width: 65%;
    }

    max-width: 1200px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;
