import React from "react";
import styles from "./styles";

export default function BMIResult({ bmi, category }) {
  return (
    <div style={styles.result}>
      <p>Your BMI: {bmi}</p>
      <p>Category: {category}</p>
    </div>
  );
}
