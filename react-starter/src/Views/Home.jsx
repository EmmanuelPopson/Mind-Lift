import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Alert from "../Components/Alert";

const motivationalTips = [
  "Take a deep breath and let go of tension.",
  "Remember to hydrate — your body and mind will thank you.",
  "One step at a time. Small progress is still progress.",
  "Reach out to someone you trust if you're struggling.",
  "Pause and notice something positive around you.",
];

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [moodResponse, setMoodResponse] = useState("");
  const [showBreathing, setShowBreathing] = useState(false);
  const [breathScale, setBreathScale] = useState(1);
  const [currentTip, setCurrentTip] = useState(0);
  const navigate = useNavigate();

  // Breathing circle animation
  useEffect(() => {
    let interval;
    if (showBreathing) {
      let growing = true;
      interval = setInterval(() => {
        setBreathScale((prev) => {
          if (prev >= 1.5) growing = false;
          if (prev <= 1) growing = true;
          return growing ? prev + 0.01 : prev - 0.01;
        });
      }, 20);
    }
    return () => clearInterval(interval);
  }, [showBreathing]);

  // Rotate motivational tips
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % motivationalTips.length);
    }, 6000);
    return () => clearInterval(tipInterval);
  }, []);

  const handleMoodClick = (mood) => {
    switch (mood) {
      case "happy":
        setMoodResponse("😊 Great! Keep that positivity flowing today!");
        break;
      case "neutral":
        setMoodResponse("😐 It's okay to have a calm day. Take some time for yourself.");
        break;
      case "sad":
        setMoodResponse("😔 Take a deep breath. Remember, it's okay to seek support.");
        break;
      case "angry":
        setMoodResponse("😡 Pause and breathe. Take a short walk to reset your mood.");
        break;
      default:
        setMoodResponse("");
    }
  };

  const startBreathing = () => {
    setShowBreathing(true);
    setTimeout(() => setShowBreathing(false), 12000); // 12 seconds
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
      <h1 style={{ color: "#023E8A", textAlign: "center", animation: "fadeIn 1s ease" }}>
        Welcome to Your Wellbeing Hub
      </h1>

      {/* Motivational Tip */}
      <Card title="Daily Tip" style={{ animation: "fadeIn 1.2s ease" }}>
        <p style={{ fontStyle: "italic", textAlign: "center", color: "#1D3557" }}>
          "{motivationalTips[currentTip]}"
        </p>
      </Card>

      {/* Mood Check */}
      <Card title="Mood Check" style={{ animation: "fadeIn 1.4s ease" }}>
        <div style={{ display: "flex", justifyContent: "space-around", fontSize: "2rem", marginBottom: "10px" }}>
          {["😁", "😐", "😭", "😡"].map((emoji, i) => (
            <span
              key={i}
              onClick={() => handleMoodClick(["happy", "neutral", "sad", "angry"][i])}
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.3)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              {emoji}
            </span>
          ))}
        </div>
        {moodResponse && (
          <p
            style={{
              textAlign: "center",
              background: "#F1FAEE",
              padding: "10px",
              borderRadius: "10px",
              color: "#1D3557",
              animation: "fadeIn 0.5s ease",
            }}
          >
            {moodResponse}
          </p>
        )}
      </Card>

      {/* Breathing Exercise */}
      <Card title="Breathing Exercise" style={{ animation: "fadeIn 1.6s ease", textAlign: "center" }}>
        <Button
          label="Start Breathing Exercise"
          onClick={startBreathing}
          style={{ marginBottom: "20px" }}
        />
        {showBreathing && (
          <div
            style={{
              margin: "0 auto",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#2A9D8F",
              transform: `scale(${breathScale})`,
              transition: "transform 0.1s linear",
            }}
          ></div>
        )}
      </Card>

      {/* Advice & Links */}
      <Card title="Mental Health Advice" style={{ animation: "fadeIn 1.8s ease" }}>
        <p>Click the button to see helpful resources:</p>
        <Button label="Show Advice" onClick={() => setShowAlert(true)} />
        {showAlert && (
          <Alert
            type="success"
            message={`
1. https://www.mind.org.uk/information-support/guides-to-support-and-services/seeking-help-for-a-mental-health-problem/
2. https://giveusashout.org/
3. https://www.nhs.uk/mental-health/
            `}
          />
        )}
      </Card>

      {/* Navigation */}
      <Card title="Explore" style={{ animation: "fadeIn 2s ease" }}>
        <p>Check out tips or get help:</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button label="Tips" onClick={() => navigate("/tips")} />
          <Button label="Help" onClick={() => navigate("/help")} />
        </div>
      </Card>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </div>
  );
};

export default Home;
