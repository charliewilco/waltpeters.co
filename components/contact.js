import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Cell = styled.div`
  flex: 0 1 18rem;
  margin-bottom: 2rem;
`

const Title = styled.h4`
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

const AnchorButton = styled.a`
  padding: 0.5rem 2.375rem;
  display: inline-block;
  color: #d8a75b;
  background: #fefdfb;
  text-decoration: none;
  border-radius: 4px;
`

const Para = styled.p`
  margin-bottom: 1rem;
`

const EmailIcon = ({ size = [94, 48] }) => (
  <svg width={size[0]} height={size[1]} viewBox="0 0 94 48">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M83.8,0.2 L37.7,0.2 C32.3,0.2 28,4.6 28,9.9 L28,38 C28,43.4 32.4,47.7 37.7,47.7 L83.8,47.7 C89.2,47.7 93.5,43.3 93.5,38 L93.5,9.9 C93.5,4.6 89.2,0.2 83.8,0.2 Z M89.3,38.1 C89.3,41.1 86.8,43.6 83.8,43.6 L57.7,43.6 L37.7,43.6 C34.7,43.6 32.2,41.1 32.2,38.1 L32.2,9.9 C32.2,6.9 34.7,4.4 37.7,4.4 L83.8,4.4 C86.8,4.4 89.3,6.9 89.3,9.9 L89.3,38.1 Z M83.9,35.4 C84.8,36.2 84.8,37.5 84.1,38.4 C83.7,38.9 83.1,39.1 82.5,39.1 C82,39.1 81.5,38.9 81.1,38.6 L66.7,25.7 L62,29.3 C61.6,29.6 61.2,29.7 60.7,29.7 C60.2,29.7 59.8,29.6 59.4,29.3 L54.9,25.8 L40.4,38.6 C40,39 39.5,39.1 39,39.1 C38.4,39.1 37.8,38.9 37.4,38.4 C36.6,37.5 36.7,36.2 37.6,35.4 L51.5,23.2 L37.7,12.5 C36.8,11.8 36.6,10.4 37.3,9.5 C38,8.6 39.4,8.4 40.3,9.1 L56.1,21.4 C56.1,21.4 56.1,21.4 56.1,21.4 L60.7,25 L81.1,9.2 C82,8.5 83.4,8.6 84.1,9.6 C84.8,10.5 84.7,11.9 83.7,12.6 L70.1,23.1 L83.9,35.4 Z M25.2,24 C25.2,25.2 24.2,26.1 23.1,26.1 L9.5,26.1 C8.3,26.1 7.4,25.1 7.4,24 C7.4,22.8 8.4,21.9 9.5,21.9 L23,21.9 C24.2,21.9 25.2,22.8 25.2,24 Z M0.5,15 C0.5,13.8 1.5,12.9 2.6,12.9 L23,12.9 C24.2,12.9 25.1,13.9 25.1,15 C25.1,16.2 24.1,17.1 23,17.1 L2.6,17.1 C1.4,17.1 0.5,16.1 0.5,15 Z M25.2,33 C25.2,34.2 24.2,35.1 23.1,35.1 L14.2,35.1 C13,35.1 12.1,34.1 12.1,33 C12.1,31.8 13.1,30.9 14.2,30.9 L23,30.9 C24.2,30.9 25.2,31.9 25.2,33 Z"
        id="Shape"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

const PhoneIcon = ({ size = [82, 82] }) => (
  <svg width={size[0]} height={size[1]} viewBox="0 0 82 82">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="noun_1253706_cc" fill="currentColor" fillRule="nonzero">
        <path
          d="M66.2,57.1 L45,54.3 L41.2,59.7 C36.9,58.3 32.9,55.9 29.7,52.7 C29.7,52.7 29.7,52.7 29.7,52.7 C29.7,52.7 29.7,52.7 29.7,52.7 C29.7,52.7 29.7,52.7 29.7,52.7 C29.7,52.7 29.7,52.7 29.7,52.7 C26.2,49.2 23.7,44.9 22.3,40.2 L28.2,36.2 L26,15.9 L26,15 L25.2,14.4 C22.5,12.3 19.3,11.2 15.9,11.2 C10.2,11.2 4.8,14.5 2.2,19.6 L1.8,20 L1.8,20.6 C1.2,23 0.8,25.5 0.6,27.9 L0.6,28 C0.5,29.4 0.4,30.8 0.4,32.3 C0.4,59.7 22.7,82 50.1,82 C50.6,82 51.1,82 51.7,82 C54.7,81.9 57.7,81.5 60.6,80.9 L61.2,80.8 L61.4,80.6 C66.6,78 69.8,72.7 69.8,66.9 C69.8,63.6 68.8,60.5 66.8,57.9 L66.2,57.1 Z M59.6,76.9 L59.3,76.9 L59.1,77.1 C56.6,77.6 54.1,77.9 51.5,78 C51,78 50.6,78 50.1,78 C24.9,78 4.4,57.5 4.4,32.4 C4.4,31 4.5,29.7 4.6,28.4 L4.6,28.3 C4.8,26 5.2,23.8 5.7,21.6 C7.6,17.8 11.6,15.3 15.9,15.3 C18.1,15.3 20.3,15.9 22.1,17.2 L24,34.2 L17.8,38.4 L18.1,39.7 C19.5,45.6 22.5,51 26.8,55.3 C26.9,55.4 26.9,55.5 27,55.5 C31,59.4 35.9,62.3 41.2,63.8 C41.3,63.8 41.4,63.9 41.4,63.9 L42.7,64.3 L46.8,58.5 L64,60.9 C65.1,62.7 65.7,64.8 65.7,66.9 C65.7,71.1 63.4,74.9 59.6,76.9 Z"
          id="Shape"
        />
        <path
          d="M35,0 L35,4 C58.5,4 77.6,23.1 77.6,46.6 L81.6,46.6 C81.6,20.9 60.7,0 35,0 Z"
          id="Shape"
        />
        <path
          d="M65.6,46.6 L69.6,46.6 C69.6,27.5 54.1,12 35,12 L35,16 C51.9,16 65.6,29.8 65.6,46.6 Z"
          id="Shape"
        />
        <path
          d="M53.6,46.6 L57.6,46.6 C57.6,34.2 47.5,24 35,24 L35,28 C45.3,28 53.6,36.4 53.6,46.6 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
)

export default () => (
  <Container>
    <Cell>
      <PhoneIcon size={[24, 24]} />
      <Title>Call</Title>
      <Para>
        Available by phone or text during normal business hours. <br />717-543-7475
      </Para>
      <AnchorButton href="tel:+17175437475">Call Me</AnchorButton>
    </Cell>

    <Cell>
      <EmailIcon size={[47, 24]} />
      <Title>Email</Title>
      <Para>
        Email is the best way to get a conversation started about your
        individual needs.
      </Para>
      <AnchorButton href="mailto:info@waltpeters.co">Email Me</AnchorButton>
    </Cell>
  </Container>
)