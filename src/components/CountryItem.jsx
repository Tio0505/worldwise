import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

CountryItem.propTypes = {
  country: PropTypes.any,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
