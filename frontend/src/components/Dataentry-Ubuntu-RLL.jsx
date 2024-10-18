import React, { useState } from "react";

const Dataentry = () => {
  // Define the state to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    bankAccount: "",
    department: "",
    payrollPeriod: "",
    payrollDate: "",
    client: "",
    grossAmount: "",
    netAmount: "",
    deductions: "",
    deductionAmount: "",
    totalAmount: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // For feedback message
  const [errorMessage, setErrorMessage] = useState(""); // For error feedback

  // Handle input changes to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation: Ensure required fields are filled
    if (!formData.name || !formData.idNumber) {
      setErrorMessage("Name and ID Number are required!");
      return;
    }

    // Send data to backend using fetch API
    fetch("/api/payroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setSuccessMessage("Payroll data submitted successfully!");
        setFormData({
          // Reset form data
          name: "",
          idNumber: "",
          bankAccount: "",
          department: "",
          payrollPeriod: "",
          payrollDate: "",
          client: "",
          grossAmount: "",
          netAmount: "",
          deductions: "",
          deductionAmount: "",
          totalAmount: "",
        });
        setErrorMessage(""); // Clear any previous error messages
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("There was an error submitting the payroll data.");
      });
  };

  return (
    <div className="card">
      <div className="card-title-bar">Data Entry</div>
      <div className="basic-data">
        <form className="payroll-form" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>ID Number:</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Bank Account:</label>
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Payroll Period:</label>
            <input
              type="text"
              name="payrollPeriod"
              value={formData.payrollPeriod}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Payroll Date:</label>
            <input
              type="text"
              name="payrollDate"
              value={formData.payrollDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Client:</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Gross Amount:</label>
            <input
              type="number"
              name="grossAmount"
              value={formData.grossAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Net Amount:</label>
            <input
              type="number"
              name="netAmount"
              value={formData.netAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Deductions:</label>
            <input
              type="text"
              name="deductions"
              value={formData.deductions}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Deduction Amount:</label>
            <input
              type="number"
              name="deductionAmount"
              value={formData.deductionAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Total Amount:</label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="bg-red-600 text-white rounded py-1 px-2 hover:bg-red-500 my-5" >Submit Payroll</button>
        </form>

        {/* Success/Error Messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Dataentry;
