import Head from 'next/head'
import { useRouter } from 'next/router'

import { styled } from '../stitches.config'

import Header from '../components/Header'

export default function Layout(props) {
  const router = useRouter()

  const { children, ...customMeta } = props

  const meta = {
    title: 'Bruno Aderaldo – Frontend Developer',
    description: 'Frontend Developer, JavaScript enthusiast.',
    image: 'https://brunoaderaldo.com/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://brunoaderaldo.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://brunoaderaldo.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bruno Aderaldo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AderaldoBruno" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Wrapper>
        <Header />
        <main>{children}</main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled('div', {
  margin: '0 auto',
  maxWidth: '42rem',
  padding: '0 1.25rem',
})
