import Image, { StaticImageData } from 'next/image';

interface IOfferingProps {
  title: string;
  icon: StaticImageData;
}

export const OfferingBlock: React.FC<IOfferingProps> = ({
  title,
  icon,
  children,
}) => (
  <div className="off-container">
    <div className="off-icon-container">
      {icon && (
        <Image alt="" width={40} height={40} objectFit="contain" src={icon} />
      )}
    </div>
    <h4>{title}</h4>
    <p>{children}</p>
    <style jsx>{`
      .off-container {
        margin-bottom: 1rem;
        background: #fefdfb;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23),
          0 3px 6px 0 rgba(0, 0, 0, 0.16);
        padding: 1rem;
      }

      .off-icon {
        display: block;
      }

      h4 {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.875rem;
      }

      p {
        font-size: 0.875rem;
        line-height: 1.7;
        text-align: left;
        margin: 0;
      }

      .off-icon-container {
        background-color: #d8a75b;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        padding: 0.75rem 0.25rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);
