import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const getInitialFeedbacks = () => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedbacks, setFeedbacks] = useState(getInitialFeedbacks);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
