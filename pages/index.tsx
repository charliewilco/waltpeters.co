import { NextPage } from 'next';
import Head from 'next/head';
import { OfferingBlock } from '../components/offering';
import { HeroBanner } from '../components/banner';
import { Contact } from '../components/contact';
import { SkillSharing } from '../components/skillsharing';
import data from '../content.json';

const IndexPage: NextPage = () => (
  <div>
    <Head>
      <title>Walt Peters | Gardening Consultant</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="An award-winning landscaping expert with over 50 years of experience, looking to equip and teach the community how to grow, garden and invest in back in their own communities in Central PA."
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="google-site-verification"
        content="h6NhLEISPBdUzO9kTpiy-Y6MIKDCJCclBOSIzIo50vY"
      />
      <meta name="theme-color" content="#d8a75b" />
    </Head>
    <main>
      <section>
        <HeroBanner {...data} />
      </section>
      <section>
        <h3>Offerings</h3>
        <div className="offerings">
          {data.offerings.map((offer, i) => (
            <OfferingBlock key={i} {...offer} />
          ))}
        </div>
      </section>
      <section>
        <SkillSharing />
      </section>
      <section>
        <h3>Contact</h3>
        <Contact />
      </section>
    </main>
    <footer className="PageFooter">
      <div>
        <span>&copy; Copyright {new Date().getFullYear()} Walt Peters.</span>
      </div>
    </footer>
    <style jsx>{`
      h3 {
        color: #d8a75b;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 3rem;
      }

      .offerings {
        --columns: 1;
        display: grid;
        gap: 2rem;
        margin: 0 auto;
        grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
      }
      main {
        padding-top: 0.5rem;
      }
      section,
      footer {
        margin-bottom: 3rem;
      }

      main,
      footer {
        max-width: 56rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-left: auto;
        margin-right: auto;
      }
      @media (min-width: 42rem) {
        main {
          padding-top: 1rem;
        }
        .offerings {
          --columns: 3;
        }
      }
    `}</style>
  </div>
);

export default IndexPage;
