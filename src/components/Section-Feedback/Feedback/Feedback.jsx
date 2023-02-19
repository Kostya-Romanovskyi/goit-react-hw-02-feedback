import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';


class Feadback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onIncrementGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
        return this.countTotalFeedback()
    }

    onIncrementNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        })
        this.countTotalFeedback()
    }

    onIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        })
        this.countTotalFeedback()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            }
        })
        this.countPositiveFeedbackPercentage()
    }

    countPositiveFeedbackPercentage() {
        this.setState((prevState) => {
            let totalFeedback = Math.round(prevState.good * 100 / prevState.total);
            return {
                feedback: totalFeedback
            }
        })
    }

    render() {
        const { good, neutral, bad, total, feedback } = this.state

        return (
            <div className="Feedback">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        onIncrementGood={this.onIncrementGood}
                        onIncrementNeutral={this.onIncrementNeutral}
                        onIncrementBad={this.onIncrementBad}
                        onLeaveFeedback="Please leave feedback" />
                </Section >

                <Section title="Statistics">
                    {!good && !neutral && !bad
                        ? <Notification message="There is no feedback" />
                        : <Statistics good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={feedback} />}
                </Section>

            </div>
        )
    }
}

export default Feadback;