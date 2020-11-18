import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90vw;
  margin: 5rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  max-width: var(--fixed-width);
  display: grid;
  gap: 1rem 2rem;
`;

export const Title = styled.h3`
  line-height: 1.2;
  font-weight: 500;
`;

export const Info = styled.section``;
