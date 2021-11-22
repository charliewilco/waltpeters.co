import Head from 'next/head';
import { OfferingBlock } from '../components/offering';
import { HeroBanner } from '../components/banner';
import { Contact } from '../components/contact';
import { SkillSharing } from '../components/skillsharing';
import data from '../content.json';

export default (): JSX.Element => (
  <div>
    <Head>
      <title>Walt Peters | Gardening Consultant</title>
    </Head>
    <section className="Wrapper Wrapper--fixed">
      <HeroBanner {...data} />
    </section>
    <section className="Wrapper Wrapper--fixed">
      <h3>Offerings</h3>
      <div className="offerings">
        {data.offerings.map((offer, i) => (
          <OfferingBlock key={i} {...offer} />
        ))}
      </div>
    </section>
    <main>
      <SkillSharing />
      <section className="Wrapper Wrapper--fixed">
        <h3>Contact</h3>
        <Contact />
      </section>
    </main>
    <footer className="PageFooter">
      <div className="Wrapper Wrapper--tight Wrapper--fixed">
        <span>&copy; Copyright {new Date().getFullYear()} Walt Peters.</span>
      </div>
    </footer>
    <style jsx>{`
      h3 {
        color: #d8a75b;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      footer {
        padding: 0.5rem;
      }

      .offerings {
        --columns: 1;
        display: grid;
        gap: 2rem;
        padding: 3rem 0;
        margin: 0 auto;
        grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
      }

      @media (min-width: 42rem) {
        .offerings {
          --columns: 3;
        }
      }
    `}</style>
    <style jsx global>{`
      .Wrapper {
        max-width: 100%;
        color: #687782;
        padding: 3rem;
      }

      .Wrapper--fixed {
        max-width: 60rem;
        margin: 0 auto;
      }

      .Wrapper--title {
        padding: 1rem;
      }
    `}</style>
  </div>
);
