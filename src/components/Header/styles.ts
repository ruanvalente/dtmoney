import styled from "styled-components";

export const Container = styled.header`
  background: var(--dt-primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 12rem;

  button {
    padding: 0.8rem 2rem;
    height: 3rem;

    font-size: 1rem;
    color: #fff;
    background: var(--dt-primary-light);

    border: none;
    border-radius: 0.3rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
