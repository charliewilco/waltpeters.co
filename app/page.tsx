import { Metadata } from 'next';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import './styles.css';

import { Logo } from './logo';
import * as Featurette from './features';

export const metadata: Metadata = {
  title: 'Walt Peters | Gardening Consultant',
  metadataBase: new URL('https://waltpeters.com'),
  description:
    'An award-winning landscaping expert with over 50 years of experience, looking to equip and teach the community how to grow, garden and invest in back in their own communities in Central PA.',
};

export default function IndexPage() {
  let year = new Date().getFullYear().toString();
  return (
    <>
      <header>
        <div className="banner-color-offset">
          <div className="banner">
            <figure>
              <Featurette.Greenhouse />
            </figure>
            <div className="header-contents">
              <div className="banner-logo-container">
                <Logo />
              </div>
              <h1>Walt Peters</h1>
              <h2>Gardening Consultant</h2>
              <p>
                An award-winning landscaping expert with over 50 years of
                experience, looking to equip and teach the community how to
                grow, garden and invest in back in their own communities in
                Central PA.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <article>
          <h3>Skill-sharing for the Community</h3>
          <p>
            <b>Skill-sharing</b> simply put, is sharing expert skills with
            another party interested in acquiring them. With over 50 years of
            experience and award-winning work, I hope to be able to share my
            skills with each of you. Central Pennsylvania is home to tremendous
            valleys, mountain ranges and fields, and there is so much history
            and potential in cultivating a healthy garden in this region. I’ll
            be offering group seminars in the coming weeks and currently offer
            one-on-one training.
          </p>
          <p>
            <b className="no-link">Get in Contact Today!</b>
          </p>
        </article>
        <section>
          <h3>Offerings</h3>
          <div className="offerings">
            <div className="offering">
              <div className="off-icon-container">
                <Featurette.PlanterIcon />
              </div>
              <h4>On-Site Visits</h4>
              <p className="off-content">
                Need garden advice or have a difficult garden problem? I will
                come to your garden site, take a thorough look, and personally
                consult with you to grow the best garden possible.
              </p>
            </div>
            <div className="offering">
              <div className="off-icon-container">
                <Featurette.HandGrowthIcon />
              </div>
              <h4>1:1 Training</h4>
              <p className="off-content">
                For DIYers or small businesses, I offer one-on-one training for
                efficient gardening and landscaping practices. I offer
                individual training and host regular workshops to help grow your
                knowledge and skill.
              </p>
            </div>
            <div className="offering">
              <div className="off-icon-container">
                <Featurette.FlowerIcon />
              </div>
              <h4>Consultation</h4>
              <p className="off-content">
                Need help making the most out of your yard space? Don’t know
                which plants or trees will grow best in your yard? I have 50
                years of experience designing beautiful landscapes appropriate
                to your space and environment.
              </p>
            </div>
          </div>
        </section>

        <aside>
          <h3>Contact</h3>
          <address>
            <div>
              <FiPhoneCall color="#d8a75b" size={24} />
              <h5>Call</h5>
              <p>
                Available by phone or text during normal business hours.
                717-543-7475
              </p>
              <a href="tel:+17175437475">Call Me</a>
            </div>

            <div>
              <FiMail color="#d8a75b" size={24} />
              <h5>Email</h5>
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
    </>
  );
}
