import React, { useState } from "react";
import BMIForm from "./BMIForm";
import BMIResult from "./BMIResult";
import styles from "./styles";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(bmiValue);
    setCategory(getCategory(bmiValue));
  };

  const getCategory = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue >= 18.5 && bmiValue < 24.9) return "Normal";
    if (bmiValue >= 25 && bmiValue < 29.9) return "Overweight";
    return "Obese";
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div style={styles.container}>
      <h2>BMI Calculator</h2>
      <BMIForm
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        calculateBMI={calculateBMI}
        resetForm={resetForm}
      />
      {bmi && <BMIResult bmi={bmi} category={category} />}
    </div>
  );
}
