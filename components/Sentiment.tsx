import Link from "next/link";

interface SentimentProps {
    score: string;
}

const Sentiment = ({ score }: SentimentProps) => {
    console.log(parseFloat(score));
    if(parseFloat(score) < -0.2) {
        return (
            <p>
                Sentiment Score: {score} (Negative)
            </p>
        )
    } else if (parseFloat(score) > 0.2) {
        return (
            <p>
                Sentiment Score: {score} (Positive)
            </p>
        )
    } else {
        return(
            <p>
                Sentiment Score: {score} (Neutral)
            </p>
        )

    }
}

export default Sentiment;
