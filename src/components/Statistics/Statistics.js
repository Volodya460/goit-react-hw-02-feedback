import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{countTotalFeedback}</li>
      <li>Positive Feedback:{countPositiveFeedbackPercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
