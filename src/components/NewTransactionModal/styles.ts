import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 536px;
  width: 100%;

  margin-top: 1rem;
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  button {
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.8rem 2rem;

    background: var(--dt-background);
    color: var(--dt-title);

    font-weight: normal;
    font-size: 1rem;

    border: none;
    border: 1px solid var(--dt-background-secondary);
    border-radius: 0.25rem;

    transition: border-color 0.3s;

    img {
      width: 20px;
      height: 20px;
    }

    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }
  }
`;

export const Form = styled.form`
  max-width: 576px;
  margin: 0 auto;

  padding: 3rem;

  background: var(--dt-background);
  border-radius: 0.25rem;

  h2 {
    margin-bottom: 2rem;
    color: var(--dt-title);
  }

  input {
    width: 100%;
    height: 4rem;

    display: flex;
    flex-direction: column;

    padding: 1.5rem 1rem;

    color: var(--dt-title);
    background: var(--dt-background-secondary);

    font-size: 1rem;
    font-weight: 400;

    border: 1px solid var(--dt-background-secondary);
    border-radius: 0.25rem;

    transition: border 0.3s;

    &:focus {
      outline: none;
      border: 1px solid var(--dt-title);
    }

    &::placeholder {
      color: var(--dt-text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    padding: 0.8rem 2rem;
    margin-top: 1rem;

    color: var(--dt-shape);
    background: var(--dt-success);

    font-weight: 600;

    border: none;
    border-radius: 0.25rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
