import {GetStaticProps} from 'next'
import Head from 'next/head';
import {stripe} from '../services/stripe';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

// três formas de popular uma página com informações:
// Client-side
// Server-side
// Static Site Generation



interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }:HomeProps) {
  
  return (
    <>
    <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>
   
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //se colocar um console.log não ira exibir, pois isso está na camada
  // do next e não do cliente
 
  const price = await stripe.prices.retrieve('price_1IlMFuFS2lbxGbQLDnQ5oH8p')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}

