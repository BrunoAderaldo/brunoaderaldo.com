import { styled } from '../stitches.config'

import Layout from '../layouts'

export default function Home() {
  return (
    <Layout>
      <Intro>
        <Title>Bruno Aderaldo</Title>
        <Subtitle>Frontend Developer at Bejamas</Subtitle>
        <p>
          Building <strong>websites & web apps</strong> with modern and
          decoupled architecture.
        </p>
      </Intro>
    </Layout>
  )
}

const Intro = styled('div', {
  margin: '7rem 0 3rem',
})

const Title = styled('h1', {
  marginBottom: '2px',
  span: {
    fontSize: '1.3rem',
    verticalAlign: 'middle',
  },
})

const Subtitle = styled('h2', {
  margin: '0 0 16px',
})
