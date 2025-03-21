import styled from "styled-components";

// Container principal do cabeçalho
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: var(--color-primary); // Usa a cor principal do GlobalStyle
  color: white;
`;

// Logo do site
export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

// Navegação do menu
export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-secondary); // Um tom mais claro ao passar o mouse
    }
  }
`;
