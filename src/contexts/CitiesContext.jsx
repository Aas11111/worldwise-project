import { createContext, useState, useEffect, useContext } from "react";
// const BASE_URL = "http://localhost:9000";
// const BASE_URL = "https://aas11111.github.io/worldwise-app-project/cities.json";

const CitiesContext = createContext();
// import citiesdata from "../../data/citiesdata";

function CitiesProvider({ children }) {
  // CitiesProvider.propTypes = {
  //   children,
  // };
  // console.log(BASE_URL);

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        // const res = await fetch(`${BASE_URL}/cities`);
        const res = await fetch(
          "https://aas11111.github.io/worldwise-app-project/cities.json"
        );

        const data = await res.json();

        setCities(data.cities);

        // console.log(data);
      } catch {
        alert("there was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(
        // `https://aas11111.github.io/worldwise-app-project/cities.json/${id}`
        `https://aas11111.github.io/worldwise-app-project/cities.json?id=${id}`
      );
      // const city = cities.find((city) => city.id === id);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("there was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citiescontext was used outside the citiesprovider");
  return context;
}
export { CitiesProvider, useCities };
