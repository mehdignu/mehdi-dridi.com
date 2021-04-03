import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, i'm Mehdi. i'm a Software engineer based in Berlin, Germany</p>

        <p>I write code. All kinds, but mostly JavaScript, Python and PHP. I love pie and I have opinions. Especially about JavaScript and pie.</p>

        <p>I strive for clean, readable, performance optimized code.</p>

        <p>You can find my resume <a href="/resume" target="_blank">here</a>. ■</p>
      </section>
     
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <ul className={utilStyles.mainList}>

        <li><Link href="/posts">Writing</Link></li>
        <li><a href="https://github.com/mehdignu" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/mehdignu/" target="_blank">Linkedin</a></li>
        <li><Link href="/contact">Contact</Link></li>
      
      </ul>

      </section>
    </Layout>
  )
}
