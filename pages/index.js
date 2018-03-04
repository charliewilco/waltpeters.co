import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import Offering from '../components/offering'
import Banner from '../components/banner'

import { offerings } from '../content.json'

const Flex = styled.div`
  padding: 3rem 0;
  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`

export default () => (
  <Wrapper>
    <Banner />
    <section>
      <Title>Offerings</Title>
      <Flex>
        {offerings.map((offer, i) => <Offering key={i} {...offer} />)}
      </Flex>
    </section>
  </Wrapper>
)
