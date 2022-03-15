import { styled } from '../stitches.config'

export const Title = styled('h1', {
  marginBottom: '6px',
})

export const Subtitle = styled('h2', {
  margin: '0 0 16px',
})

export default function Home() {
  return (
    <>
      <Title>Bruno Aderaldo</Title>
      <Subtitle>
        Frontend Developer at <strong>Bejamas</strong>
      </Subtitle>
      <p>
        Building <strong>websites & web apps</strong> with modern and decoupled
        architeture <strong>using Jamstack</strong>.
      </p>
    </>
  )
}
