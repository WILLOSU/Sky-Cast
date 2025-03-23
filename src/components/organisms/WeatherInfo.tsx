import { Container, CityName, Temperature, Condition } from "./WeatherInfo.styles";

interface WeatherInfoProps {
  city: string;
  temperature: number;
  condition: string;
}

const WeatherInfo = ({ city, temperature, condition }: WeatherInfoProps) => {
  return (
    <Container>
      <CityName>{city}</CityName>
      <Temperature>{temperature}°C</Temperature>
      <Condition>{condition}</Condition>
    </Container>
  );
};

export default WeatherInfo;
