import {
  StatisticsText,
  StatisticsTextGood,
  StatisticsTextNeutral,
  StatisticsTextBad,
  StatisticsTextTotal,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <StatisticsTextGood>
        <span>Good: </span>
        {good}
      </StatisticsTextGood>
      <StatisticsTextNeutral>
        <span>Neutral: </span>
        {neutral}
      </StatisticsTextNeutral>
      <StatisticsTextBad>
        <span>Bad: </span>
        {bad}
      </StatisticsTextBad>
      <StatisticsTextTotal>
        <span>Total: </span>
        {total}
      </StatisticsTextTotal>
      <StatisticsText>
        <span>Positive Feedback Percentage: </span>
        {positivePercentage} %
      </StatisticsText>
    </div>
  );
}
