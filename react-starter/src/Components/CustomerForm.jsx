import { useState } from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";

const Help = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isComplete = Object.values(formData).every((v) => v.trim() !== "");
    if (!isComplete) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Form submitted successfully!");
    setFormData(initialFormData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #CAF0F8, #90E0EF)",
        fontFamily: "Arial, sans-serif",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#023E8A" }}>Help Support Form</h1>

      <Card title="Fill Your Details">
        {error && <p style={{ color: "#D00000", background: "#FFE5E5", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {Object.keys(initialFormData).map((key) => (
            <div key={key} style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor={key} style={{ marginBottom: "3px" }}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                type={key === "email" ? "email" : key === "phone" ? "tel" : key === "dateOfBirth" ? "date" : "text"}
                style={{ padding: "10px", borderRadius: "10px", border: "1px solid #90E0EF", outline: "none" }}
              />
            </div>
          ))}
          <Button
            label="Submit"
            style={{ background: "#0077B6", color: "white", borderRadius: "12px", padding: "12px", marginTop: "10px" }}
            onClick={handleSubmit}
          />
        </form>
      </Card>
    </div>
  );
};

export default Help;
