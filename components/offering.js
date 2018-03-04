import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 700px) {
    max-width: 18rem;
    margin: 0 1rem 1rem;
  }
`

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
`

const Title = styled.h3`
  font-size: 1.25rem;
`

const IconContainer = styled.div`
  background-color: #d8a75b;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 0.75rem 0.25rem;
  margin-bottom: 1.5rem;
`

const Icon = styled.img`
  max-width: 2.5rem;
  max-height: 2.5rem;
  display: block;
  margin: 0 auto;
`

export default ({ title, content, icon }) => (
  <Container>
    <IconContainer>{icon && <Icon src={icon} />}</IconContainer>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
)
