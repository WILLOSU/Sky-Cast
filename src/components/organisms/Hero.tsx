import { Container, Title, Subtitle, SearchBox, Input, Button } from "./Hero.styles"; 
import { useState } from "react";

const Hero = () => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") return;
    alert(`Buscando por: ${city}`);
  };

  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      <Subtitle>Digite o nome da cidade para ver o clima atual</Subtitle>

      <SearchBox>
        <Input 
          type="text" 
          placeholder="Digite a cidade..." 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </SearchBox>
    </Container>
  );
};

export default Hero;
