import styled from 'styled-components'

export default styled.main`
  max-width: ${props => (props.fixed ? `60rem` : `100%`)};
  margin: ${props => props.fixed && '0 auto'};
  padding: 3rem 0.5rem;
  color: ${props => (props.color ? props.color : '#687782')};
  font: 400 100%/1.6 inherit;
  background: ${props => (props.background ? props.background : 'none')};
`
