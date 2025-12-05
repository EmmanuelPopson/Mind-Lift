import { useState } from "react";
import Card from "../Components/Card";

const Tips = () => {
  const [message, setMessage] = useState(null);

  const stressTips = () => (
    <p>
      • Ground yourself: 5 things you see, 4 touch, 3 hear.<br />
      • Handle one task at a time.<br />
      • Take short walks.<br />
      • Write down stressors.<br />
      • Reduce notifications.
    </p>
  );

  const energyTips = () => (
    <p>
      • Drink water.<br />
      • Small actions build momentum.<br />
      • Eat fruit/protein.<br />
      • Switch tasks if blocked.<br />
      • Protect sleep.
    </p>
  );

  const comfortTips = () => (
    <p>
      • Respect your social battery.<br />
      • Ask simple questions & listen.<br />
      • Stay close to trusted people.<br />
      • Take quiet breaks.<br />
      • Be yourself.
    </p>
  );

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
      <h1 style={{ color: "#023E8A", textAlign: "center" }}>Wellbeing Tips</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        <Card title="Stress Levels">
          <button
            onClick={() => setMessage(stressTips())}
            style={{ padding: "10px 20px", borderRadius: "10px", background: "#E63946", color: "white", border: "none", cursor: "pointer" }}
          >
            Show Tips
          </button>
        </Card>

        <Card title="Energy Levels">
          <button
            onClick={() => setMessage(energyTips())}
            style={{ padding: "10px 20px", borderRadius: "10px", background: "#2A9D8F", color: "white", border: "none", cursor: "pointer" }}
          >
            Show Tips
          </button>
        </Card>

        <Card title="Social Comfort">
          <button
            onClick={() => setMessage(comfortTips())}
            style={{ padding: "10px 20px", borderRadius: "10px", background: "#1D3557", color: "white", border: "none", cursor: "pointer" }}
          >
            Show Tips
          </button>
        </Card>
      </div>

      {message && (
        <div
          style={{
            background: "#F1FAEE",
            padding: "20px",
            borderRadius: "12px",
            color: "#1D3557",
            minHeight: "120px",
            marginTop: "20px",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Tips;
