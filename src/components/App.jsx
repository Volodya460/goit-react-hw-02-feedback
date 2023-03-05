import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions ';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getGoodFeetBack = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  getNeutralFeetBack = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  getBadFeetBack = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    let AllFaadback = good + neutral + bad;
    return AllFaadback;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count) || 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            getGoodFeetBack={this.getGoodFeetBack}
            getNeutralFeetBack={this.getNeutralFeetBack}
            getBadFeetBack={this.getBadFeetBack}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
