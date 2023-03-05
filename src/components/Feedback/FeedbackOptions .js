import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { ButtonBox } from './FeedbackOptions.styled';

export default function FeedbackOptions({
  getGoodFeetBack,
  getNeutralFeetBack,
  getBadFeetBack,
}) {
  return (
    <ButtonBox>
      <Button type="button" onClick={getGoodFeetBack}>
        Good
      </Button>
      <Button type="button" onClick={getNeutralFeetBack}>
        Neutral
      </Button>
      <Button type="button" onClick={getBadFeetBack}>
        Bad
      </Button>
    </ButtonBox>
  );
}

FeedbackOptions.propTypes = {
  getGoodFeetBack: PropTypes.func.isRequired,
  getNeutralFeetBack: PropTypes.func.isRequired,
  getBadFeetBack: PropTypes.func.isRequired,
};
