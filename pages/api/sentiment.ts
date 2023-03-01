// const handler = async (req: Request): Promise<Response> => {
//     try {
//         const url = process.env.SENTIMENT_ANALYISIS_ENDPOINT;
//         const { text }= req.body
//         console.log(text)

//         const response = await fetch(
//         url ,
//             {
//               body: JSON.stringify({ text }),
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               method: 'POST'
//             }
//         );
//         return new Response(response.json())

//     } catch (err) {
//         console.log(err);
//         return new Response("Error occurred", {status: 500});
//     }
// };


// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const url = process.env.SENTIMENT_ANALYISIS_ENDPOINT;
//         const { text }= req.body
//         console.log(text)

//         const response = await fetch(
//         url ,
//             {
//               body: JSON.stringify({ "text": "jack the ripper" }),
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               method: 'POST'
//             }
//         );
//         const data = await response.json();
//         console.log(data);
//       res.status(200).json(result);
//     } catch (err) {
//       res.status(403).json({ err: "Error!" });
//     }
//   };

// export default handler;

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const url = process.env.SENTIMENT_ANALYISIS_ENDPOINT;
    const { text }= req.body
    console.log(text)

    const response = await fetch(
    url ,
        {
            body: JSON.stringify({ text }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    );
    const data = await response.json();
    const body = data.body
    res.status(200).json({ body });
  }

