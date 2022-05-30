import ThemeSwitcher from './ThemeSwitcher'

import { styled } from '../../stitches.config'

const Wrapper = styled('header', {
  paddingTop: '2rem',
  paddingBottom: '2rem',
})

export default function Header() {
  return (
    <Wrapper>
      <ThemeSwitcher />
    </Wrapper>
  )
}
