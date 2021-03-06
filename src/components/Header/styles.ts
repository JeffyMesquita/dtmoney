import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
