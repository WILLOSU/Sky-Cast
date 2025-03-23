import fetch from "node-fetch";
import "dotenv/config";


const fetchCoordinates = async (city: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;
  if (!API_KEY) {
      console.error("❌ ERRO: HERE_API_KEY não está definida!");
      return;
  }

  const url = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(city)}&apiKey=${API_KEY}`;

  try {
      const response = await fetch(url);
      const data = (await response.json()) as { items: { position: { lat: number; lng: number } }[] };

      if (data.items.length > 0) {
          console.log(`📍 Coordenadas de ${city}:`, data.items[0].position);
      } else {
          console.warn("⚠️ Nenhuma coordenada encontrada para essa cidade.");
      }
  } catch (error) {
      console.error("❌ Erro ao buscar coordenadas:", error);
  }
};

// Teste com uma cidade fixa
fetchCoordinates("São Paulo");
