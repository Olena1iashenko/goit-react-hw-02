import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

const App = () => {
  const initialState = { good: 0, neutral: 0, bad: 0 };
  const [points, setPoints] = useState(() => {
    const savedPoints = window.localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const updateFeedback = (type) => {
    if (type === "reset") {
      setPoints({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setPoints((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = points.good + points.neutral + points.bad;

  const positiveFeedback = Math.round((points.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          points={points}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
