import styled from 'styled-components'
import Logo from './logo'

const Banner = styled.div`
  background: #fefdfb;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 3rem;
  z-index: 1;

  @media (min-width: 700px) {
    display: flex;
  }
`

const Post = styled.header`
  padding: 1rem;
  flex: 4;
  & > p {
    max-width: 33rem;
    line-height: 1.7;
  }

  @media (min-width: 700px) {
    padding: 5rem 1rem;
  }
`

const Title = styled.h1`
  color: #d8a75b;
  font-size: 1.875rem;
  margin: 0 0 0.5rem;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 2.125rem;
    text-align: left;
    font-weight: 700;
  }
`

const Sub = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 700px) {
    text-align: left;
    font-size: 1.5rem;
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: cover;
  vertical-align: middle;
  font-style: italic;
`

const Aside = styled.figure`
  position: relative;
  width: 100%;
  height: 20rem;

  @media (min-width: 700px) {
    flex: 2;
    height: auto;
  }
`
const LogoContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 700px) {
    text-align: left;
  }
`

const ColorOffset = styled.div`
  position: relative;

  &::after {
    content: '';
    width: 20vw;
    height: 20vh;
    background: rgba(216, 167, 91, 0.5);
    padding: 1rem;
    position: absolute;
    margin: 0;
    right: -0.5rem;
    top: -0.5rem;
    z-index: -1;

    @media (min-width: 700px) {
      right: -1rem;
      top: -1rem;
    }
  }
`

export default ({ title, about, name }) => (
  <ColorOffset>
    <Banner>
      <Aside>
        <Image src="static/garden.jpg" />
      </Aside>
      <Post>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title>{name}</Title>
        <Sub>{title}</Sub>
        <p>{about}</p>
      </Post>
    </Banner>
  </ColorOffset>
)
