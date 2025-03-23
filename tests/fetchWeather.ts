import fetch from "node-fetch";
import "dotenv/config";

const fetchWeather = async (city: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_SKYCAST_API_KEY;
    
    if (!API_KEY) {
        console.error("❌ ERRO: NEXT_PUBLIC_SKYCAST_API_KEY não está definida!");
        return null;
    }

    // URL correta para OpenWeather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`☁️ Previsão do tempo para ${city}:`, data);
        return data;
    } catch (error) {
        console.error("❌ ERRO ao buscar previsão do tempo:", error);
        return null;
    }
};

// Teste rápido
fetchWeather("São Paulo");
