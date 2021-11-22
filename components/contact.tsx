import { FiMail, FiPhoneCall } from 'react-icons/fi';

export const Contact: React.VFC = () => (
  <div className="contact">
    <div>
      <FiPhoneCall color="#d8a75b" size={24} />
      <h4 className="ContactTitle">Call</h4>
      <p>
        Available by phone or text during normal business hours. <br />
        717-543-7475
      </p>
      <a href="tel:+17175437475">Call Me</a>
    </div>

    <div>
      <FiMail color="#d8a75b" size={24} />
      <h4 className="ContactTitle">Email</h4>
      <p>
        Email is the best way to get a conversation started about your
        individual needs.
      </p>
      <a href="mailto:info@waltpeters.co">Email Me</a>
    </div>
    <style jsx>
      {`
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

        p {
          margin-bottom: 1rem;
        }
        .contact {
          --columns: 1;
          display: grid;
          gap: 2rem;
          padding: 3rem 0;
          margin: 0 auto;
          grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
        }

        @media (min-width: 42rem) {
          .contact {
            --columns: 2;
          }
        }
      `}
    </style>
  </div>
);
