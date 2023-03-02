import Link from "next/link";

interface SentimentProps {
    score: string;
}

const Sentiment = ({ score }: SentimentProps) => {
    console.log(parseFloat(score));
    if(parseFloat(score) < -0.2) {
        return (
            <p className="text-left font-medium text-red-500">
                Sentiment Score: {score} (Negative)
            </p>
        )
    } else if (parseFloat(score) > 0.2) {
        return (
            <p className="text-left font-medium text-cyan-500">
                Sentiment Score: {score} (Positive)
            </p>
        )
    } else {
        return(
            <p className="text-left font-medium">
                Sentiment Score: {score} (Neutral)
            </p>
        )

    }
}

export default Sentiment;
