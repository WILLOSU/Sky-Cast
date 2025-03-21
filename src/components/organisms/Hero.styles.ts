import styled from "styled-components";

// Container principal da seção
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Degradê */
  color: white;
`;

// Título principal
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Subtítulo com instrução para o usuário
export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

// Caixa que envolve o input e o botão
export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
`;

// Estilização do campo de entrada
export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 250px;
`;

// Botão de busca
export const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: #ff6600;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ffcc99;
  }
`;
