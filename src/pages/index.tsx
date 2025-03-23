import WeatherInfo from "@/components/organisms/WeatherInfo";

export default function Home() {
  return (
    <div>
      <WeatherInfo city="São Paulo" temperature={28} condition="Ensolarado" />
    </div>
  );
}
