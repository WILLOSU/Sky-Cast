import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: var(--color-light);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CityName = styled.h2`
  font-size: 1.8rem;
  color: var(--color-dark);
`;

export const Temperature = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary);
`;

export const Condition = styled.p`
  font-size: 1.2rem;
  color: var(--color-secondary);
`;
