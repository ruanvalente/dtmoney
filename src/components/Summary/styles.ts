import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -7rem;
`;

export const CardItem = styled.div`
  background: var(--dt-shape);
  border-radius: 0.24rem;
  padding: 1.5rem 2rem;

  transition: transform 0.2s;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: var(--dt-text);
    }
  }

  strong {
    display: block;

    margin-top: 1rem;

    font-size: 2.25rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &:last-child {
    background: var(--dt-success);
    color: var(--dt-shape);

    p {
      color: var(--dt-shape);
    }
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
