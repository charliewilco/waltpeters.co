import * as React from 'react';
import Head from 'next/head';
import Offering from '../components/offering';
import Banner from '../components/banner';
import Contact from '../components/contact';
import Skillsharing from '../components/skillsharing';
import data from '../content.json';

export default (): JSX.Element => (
  <>
    <Head>
      <title>Walt Peters | Gardening Consultant</title>
    </Head>
    <section className="Wrapper Wrapper--fixed">
      <Banner {...data} />
    </section>
    <section className="Wrapper">
      <h3 className="SectionTitle">Offerings</h3>
      <div className="OfferingFlex">
        {data.offerings.map((offer, i) => (
          <Offering key={i} {...offer} />
        ))}
      </div>
    </section>
    <main>
      <Skillsharing />
      <section className="Wrapper" style={{ background: '#d8a75b' }}>
        <div className="Wrapper Wrapper--fixed" style={{ color: '#FEFDFB' }}>
          <h3 className="SectionTitle">Contact</h3>
          <Contact />
        </div>
      </section>
    </main>
    <footer className="PageFooter">
      <div className="Wrapper Wrapper--tight Wrapper--fixed">
        <span>&copy; Copyright {new Date().getFullYear()} Walt Peters.</span>
      </div>
    </footer>
  </>
);
