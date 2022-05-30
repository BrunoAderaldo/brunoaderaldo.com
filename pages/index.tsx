import { styled } from '../stitches.config'

import Layout from '../layouts'

export default function Home() {
  return (
    <Layout>
      <div>
        <Title>Bruno Aderaldo 🇧🇷</Title>
        <Subtitle>Frontend Developer at Bejamas</Subtitle>
        <p>
          Building <strong>websites & web apps</strong> with modern and
          decoupled architecture.
        </p>
      </div>
    </Layout>
  )
}

const Title = styled('h1', {
  marginBottom: '6px',
})

const Subtitle = styled('h2', {
  margin: '0 0 16px',
})
