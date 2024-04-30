const Feedback = ({ points, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {points.good}</li>
      <li>Neutral: {points.neutral}</li>
      <li>Bad: {points.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
