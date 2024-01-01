import Spinner from "./Spinner";

import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
// };

function CityList() {
  const { cities, isLoading } = useCities();
  // CityList.propTypes = {
  //   cities,
  //   isLoading,
  // };
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
