import { BtnWrapper, ButtonStat } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return <BtnWrapper>
        <ButtonStat onClick={onIncrementGood}>Good</ButtonStat>
        <ButtonStat onClick={onIncrementNeutral}>Natural</ButtonStat>
        <ButtonStat onClick={onIncrementBad}>Bad</ButtonStat>
    </BtnWrapper>
}

export default FeedbackOptions;