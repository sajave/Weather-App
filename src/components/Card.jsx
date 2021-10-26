import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({min, max, name, img, onClose, id}) {
  return (
    <div className={styles.card}>
      <button className={styles.buttonX} onClick={onClose}>
        X
      </button>
      <NavLink style={{textDecoration: "none"}} to={`/city/${id}`}>
        <div className={styles.cityName}>{name}</div>
      </NavLink>
      <div className={styles.containerTemp}>
        <div>
          <p className={styles.tempMin}>Min</p>
          <p>{min}°C</p>
        </div>
        <div>
          <p className={styles.tempMax}>Max</p>
          <p>{max}°C</p>
        </div>
      </div>
      <img
        src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
        alt='not found'
      />
    </div>
  );
}
