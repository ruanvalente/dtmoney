import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;

      color: var(--dt-text);
      font-weight: 400;
      font-style: normal;
      text-align: left;
      line-height: 1.6rem;
    }

    tr {
      transition: transform 0.2s;

      &:hover {
        transform: translateX(20px);
        cursor: pointer;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--dt-shape);
      color: var(--dt-text);

      border-radius: 0.3rem;

      &:first-child {
        color: var(--dt-title);
      }

      &.income {
        color: var(--dt-danger);
      }

      &.outcome {
        color: var(--dt-success);
      }
    }
  }
`;
