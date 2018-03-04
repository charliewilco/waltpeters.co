import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import Offering from '../components/offering'
import Banner from '../components/banner'

import { offerings } from '../content.json'

const Flex = styled.div`
  display: flex;
  padding: 3rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1rem;
  margin-right: -1rem;
`

export default () => (
  <Wrapper>
    <Banner />
    <Flex>{offerings.map((offer, i) => <Offering key={i} {...offer} />)}</Flex>
  </Wrapper>
)
