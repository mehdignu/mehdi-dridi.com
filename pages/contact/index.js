
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
const siteTitle = 'Contact'

export default function Contact() {
  return (
    <Layout contact>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
   
    
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      

      <h2 className={utilStyles.contact}>Contact</h2>
      <p>Please contact me through email at <a href="dridignu@gmail.com">dridignu@gmail.com</a>  </p>

     
    </section>
  </Layout>
  )

};

