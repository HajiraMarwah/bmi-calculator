import React from "react";
import styles from "./styles";

export default function BMIForm({
  weight,
  height,
  setWeight,
  setHeight,
  calculateBMI,
  resetForm,
}) {
  return (
    <>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={styles.input}
      />

      <div>
        <button onClick={calculateBMI} style={styles.button}>
          Calculate BMI
        </button>
        <button
          onClick={resetForm}
          style={{ ...styles.button, background: "#999" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
