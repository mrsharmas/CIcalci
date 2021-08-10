import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="form">
      <input
        type="number"
        onChange={(e) => {
          setPrinciple(e.target.value);
        }}
        value={principle}
        placeholder="Principal"
      />
      <input
        type="number"
        value={time}
        placeholder="Time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <input
        type="number"
        value={rate}
        placeholder="Rate(per annum)"
        onChange={(e) => {
          setRate(e.target.value);
        }}
      />
      <input
        style={{ color: "green", fontWeight: "bold" }}
        type="number"
        value={(principle * Math.pow(1 + rate / 100, time) - principle).toFixed(
          2
        )}
        readOnly
        placeholder="Compound Interest"
      />
    </div>
  );
}

export default Form;
