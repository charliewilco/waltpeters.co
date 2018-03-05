import styled from 'styled-components'
import Wrapper from './wrapper'

const Flex = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  margin-bottom: 1.5rem;
`

const Content = styled.section`
  font-size: 106.25%;
  line-height: 1.7;
  flex: 0 1 33rem;
`

const CTA = styled.b`
  color: #d8a75b;
`

export default () => (
  <Wrapper fixed>
    <Flex>
      <Title>Skill-sharing for the Community</Title>
      <Content>
        <p>
          <b>Skill-sharing</b> simply put, is sharing expert skills with another
          party interested in acquiring them. With over 50 years of experience
          and award-winning work, I hope to be able to share my skills with each
          of you. Central Pennsylvania is home to tremendous valleys, mountain
          ranges and fields, and there is so much history and potential in
          cultivating a healthy garden in this region. I’ll be offering group
          seminars in the coming weeks and currently over one-on-one training.
        </p>
        <p>
          <CTA>Get in Contact today!</CTA>
        </p>
      </Content>
    </Flex>
  </Wrapper>
)
