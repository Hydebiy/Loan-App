import React, { useState } from "react";
import "./Calloan.css"; // Assuming you have a CSS file for styling

function Calloan() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(years) * 12;

    if (principal && interest && payments) {
      const x = Math.pow(1 + interest, payments);
      const monthly = (principal * x * interest) / (x - 1);

      const total = monthly * payments;
      const totalInt = total - principal;

      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment(total.toFixed(2));
      setTotalInterest(totalInt.toFixed(2));
    }
  };

  const resetForm = () => {
    setAmount("");
    setRate("");
    setYears(0);
    setMonthlyPayment(0);
    setTotalPayment(0);
    setTotalInterest(0);
  };

  return (
    <>
      
      <div className="calculator">
        <div className="input-group">
          <label htmlFor="amount">Loan Amount (#)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label htmlFor="rate">Interest Rate (%)</label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />
        </div>
        <div className="input-group">
          <label htmlFor="years">Loan Term (Years)</label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
          <input
            type="range"
            id="year-slider"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        <button onClick={calculateLoan}>Calculate</button>
      </div>

      <div className="results">
        <div className="result-box">Monthly Payment: #{monthlyPayment}</div>
        <div className="result-box">Total Payment: #{totalPayment}</div>
        <div className="result-box">Total Interest: #{totalInterest}</div>
      </div>
      <div className="reset">
        <button onClick={resetForm}>Reset</button>
      </div>

      <div className="footer">
        <p>Loan Calculator &copy; 2025</p>
      </div>
    </>
  );
}

export default Calloan;
