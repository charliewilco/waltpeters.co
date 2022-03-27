import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import { OfferingBlock } from '../components/offering';
import { HeroBanner } from '../components/banner';

import planterIcon from '../public/static/planter.svg';
import handgrowthIcon from '../public/static/handgrowth.svg';
import flowerIcon from '../public/static/flower.svg';

export const getStaticProps: GetStaticProps<{ year: string }> = async () => {
  return {
    props: {
      year: new Date().getFullYear().toString(),
    },
    revalidate: false,
  };
};

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  year,
}) => (
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
        <HeroBanner name="Walt Peters" title="Gardening Consultant">
          An award-winning landscaping expert with over 50 years of experience,
          looking to equip and teach the community how to grow, garden and
          invest in back in their own communities in Central PA.
        </HeroBanner>
      </section>
      <section>
        <h3>Offerings</h3>
        <div className="offerings">
          <OfferingBlock title="On-Site Visits" icon={planterIcon}>
            Need garden advice or have a difficult garden problem? I will come
            to your garden site, take a thorough look, and personally consult
            with you to grow the best garden possible.
          </OfferingBlock>
          <OfferingBlock title="1:1 Training" icon={handgrowthIcon}>
            For DIYers or small businesses, I offer one-on-one training for
            efficient gardening and landscaping practices. I offer individual
            training and host regular workshops to help grow your knowledge and
            skill.
          </OfferingBlock>
          <OfferingBlock title="Consultation" icon={flowerIcon}>
            Need help making the most out of your yard space? Don’t know which
            plants or trees will grow best in your yard? I have 50 years of
            experience designing beautiful landscapes appropriate to your space
            and environment.
          </OfferingBlock>
        </div>
      </section>
      <article>
        <h3>Skill-sharing for the Community</h3>
        <p>
          <b>Skill-sharing</b> simply put, is sharing expert skills with another
          party interested in acquiring them. With over 50 years of experience
          and award-winning work, I hope to be able to share my skills with each
          of you. Central Pennsylvania is home to tremendous valleys, mountain
          ranges and fields, and there is so much history and potential in
          cultivating a healthy garden in this region. I’ll be offering group
          seminars in the coming weeks and currently offer one-on-one training.
        </p>
        <p>
          <b>Get in Contact Today!</b>
        </p>
      </article>
      <aside>
        <h3>Contact</h3>
        <address>
          <div>
            <FiPhoneCall color="#d8a75b" size={24} />
            <h4>Call</h4>
            <p>
              Available by phone or text during normal business hours.
              717-543-7475
            </p>
            <a href="tel:+17175437475">Call Me</a>
          </div>

          <div>
            <FiMail color="#d8a75b" size={24} />
            <h4>Email</h4>
            <p>
              Email is the best way to get a conversation started about your
              individual needs.
            </p>
            <a href="mailto:waltpeters42@gmail.com">Email Me</a>
          </div>
        </address>
      </aside>
    </main>
    <footer>
      <span>&copy; Copyright {year} Walt Peters.</span>
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

      article,
      aside,
      section,
      footer {
        margin-bottom: 4rem;
      }

      main,
      footer {
        max-width: 56rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-left: auto;
        margin-right: auto;
      }

      article {
        max-width: 80ch;
        margin-right: auto;
      }

      article p {
        font-size: 112.5%;
        line-height: 1.7;
      }

      b {
        color: #d8a75b;
      }

      h4 {
        font-size: 1.25rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }

      a {
        padding: 0.5rem;
        display: inline-block;
        background-color: #d8a75b;
        color: #fefdfb;
        text-decoration: none;
        border-radius: 4px;
      }

      address p {
        margin-bottom: 1rem;
      }
      address {
        --columns: 1;
        display: grid;
        gap: 2rem;
        margin: 0 auto;
        grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
      }

      @media (min-width: 42rem) {
        main {
          padding-top: 1rem;
        }
        address {
          --columns: 2;
        }
        .offerings {
          --columns: 3;
        }
      }
    `}</style>
  </div>
);

export default IndexPage;
