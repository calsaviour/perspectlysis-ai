import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def lambda_handler(event, context):
    text = event['text']
    analyzer = SentimentIntensityAnalyzer()
    scores = analyzer.polarity_scores(text)
    return {
        'statusCode': 200,
        'body': json.dumps(scores['compound'])
    }