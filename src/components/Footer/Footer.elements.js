import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: #003c5e;
`;

export const FooterWrapper = styled.div`
  margin: auto;
  padding: 1rem;
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const Descriptions = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;

  a {
    text-decoration: none;
    color: #41c6f3;
  }

  @media screen and (max-width: 960px) {
    padding: 0.5rem 0;
  }
`;
