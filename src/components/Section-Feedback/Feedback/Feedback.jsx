import React from 'react';

class FeadBack extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onIncrementGood = () => {
        this.countTotalFeedback()
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
    }

    onIncrementNeutral = () => {
        this.countTotalFeedback()
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }

    onIncrementBad = () => {
        this.countTotalFeedback()
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        })
    }

    countTotalFeedback = () => {
        this.setState(() => {
            return {
                total: this.state.good + this.state.neutral + this.state.bad + 1,
            }
        })
        // return prevState.good + prevState.neutral + prevState.bad
    }
    countPositiveFeedbackPercentage() { }

    render() {
        return (
            <div className="Feedback">
                <h1>Please leave feedback</h1>

                <button onClick={this.onIncrementGood}>Good</button>
                <button onClick={this.onIncrementNeutral}>Natural</button>
                <button onClick={this.onIncrementBad}>Bad</button>

                <h2>Statistic</h2>

                <p>Good: {this.state.good}</p>
                <p>Natural: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total:{this.state.total}</p>
                <p>Positive feedback: 0</p>

            </div>
        )
    }
}

export default FeadBack;