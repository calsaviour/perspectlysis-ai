import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import mainImage from '@/assets/images/main_image.jpg'
import { Form, Button, Spinner } from 'react-bootstrap'
import { FormEvent, useState } from 'react'


export default function Home() {
  const [quote, setQuote] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteLoadingError, setQuoteLoadingError] = useState(false)

  async function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get("prompt")?.toString().trim();

    if(prompt) {
      try {
        setQuote("");
        setQuoteLoadingError(false);
        setQuoteLoading(true);

        const response = await fetch("/api/perspectlysis?prompt=" + encodeURIComponent(prompt));
        const body = await response.json();
        setQuote(body.quote);

      } catch (error) {
        console.error(error);
        setQuoteLoadingError(true);
      } finally {
        setQuoteLoading(false);
      }
    }
    
  }
  return (
    <>
      <Head>
        <title>Perspectlysis AI</title>
        <meta name="description" content="By perspectlysis-ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Perspectlysis AI</h1>
        <h2>Powered by GPT-3</h2>
        <div>
          Copy and paste the article and the AI will generate a Perspectlysis
        </div>
        <div className={styles.mainImageContainer}>
          <Image src={mainImage}
           fill
           alt='A picture of Perspectlysis'
           priority
           className={styles.mainImage}
          />
        </div>
        <Form onSubmit={handleSubmit} className={styles.inputForm}>
          <Form.Group className='mb-3' controlId='prompt-input'>
            <Form.Label>
              <Form.Control
                name='prompt'
                placeholder='eg, lef wing'
                maxLength={100}
              />
            </Form.Label>
          </Form.Group>
          <Button type='submit' className='mb-3' disabled={quoteLoading}>
            Make a perspectlysis
          </Button>
        </Form>
        { quoteLoading && <Spinner animation="border" /> }
        { quoteLoadingError && "Something went wrong. Please try again."}
        { quote && <h5>{quote}</h5>}
      </main>
      
    </>
  )
}
