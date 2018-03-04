import styled from 'styled-components'
import Logo from './logo'

const Banner = styled.div`
  background: #fefdfb;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: 700px) {
    display: flex;
    align-content: center;
  }
`

const Post = styled.header`
  padding: 1rem;
  flex: 4;
  & > p {
    max-width: 33rem;
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
    font-size: 2.5rem;
    text-align: left;
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

export default () => (
  <Banner>
    <Aside>
      <Image src="static/garden.jpg" />
    </Aside>
    <Post>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>Walt Peters</Title>
      <Sub>Gardening Consultant</Sub>
      <p>
        An award-winning landscaping expert with over 50 years of experience,
        looking to equip and teach the community how to grow, garden and invest
        in back in their own communities.
      </p>
    </Post>
  </Banner>
)
