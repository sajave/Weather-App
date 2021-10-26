import React, {useState} from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form
      className='d-flex'
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className={styles.input}
        type='text'
        placeholder='City...'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='btn btn-primary' type='submit'>
        Search
      </button>
    </form>
  );
}
