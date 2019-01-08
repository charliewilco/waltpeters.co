import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import Offering from '../components/offering'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Skillsharing from '../components/skillsharing'
import data from '../content.json'

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
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
`

const Copyright = styled.footer`
  padding: 0.5rem;
`

export default () => (
  <>
    <Head>
      <title>Walt Peters | Gardening Consultant</title>
    </Head>
    <Wrapper fixed>
      <Banner {...data} />
      <section>
        <Title>Offerings</Title>
        <Flex>
          {data.offerings.map((offer, i) => (
            <Offering key={i} {...offer} />
          ))}
        </Flex>
      </section>
    </Wrapper>
    <main>
      <Skillsharing />
      <Wrapper background="#d8a75b">
        <Wrapper color="#FEFDFB" fixed>
          <Title>Contact</Title>
          <Contact />
        </Wrapper>
      </Wrapper>
    </main>
    <Copyright>
      <Wrapper tight fixed>
        <span>&copy; Copyright {new Date().getFullYear()} Walt Peters.</span>
      </Wrapper>
    </Copyright>
  </>
)
