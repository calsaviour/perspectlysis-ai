// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { article } = req.body;  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 3600,
    prompt: `Can you tell me how will a person with liberal political, economic and
    social views feels when reading ${article}.
    The return format must be stringified JSON in the following format:
    {
      "perspectlysis": post content here
    }`,
  });
  
  console.log("response", response.data.choices[0].text);
  // const parsed = JSON.parse(response.data.choices[0].text);
  res.status(200).json({ perspectlysis: response.data.choices[0].text });
}
