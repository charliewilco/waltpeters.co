import Image from 'next/image';

interface OfferingProps {
  title: string;
  content: string;
  icon: string;
}

export const OfferingBlock: React.VFC<OfferingProps> = ({
  title,
  content,
  icon,
}) => (
  <div className="OfferingContainer">
    <div className="OfferingIconContainer">
      {icon && (
        <Image
          className="OfferingIcon"
          width={40}
          height={40}
          objectFit="contain"
          layout="responsive"
          src={icon}
        />
      )}
    </div>
    <h3 className="OfferingTitle">{title}</h3>
    <p className="OfferingContent">{content}</p>
    <style jsx>{`
      .OfferingContainer {
        margin-bottom: 1rem;
        background: #fefdfb;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23),
          0 3px 6px 0 rgba(0, 0, 0, 0.16);
        padding: 1rem;
      }

      .OfferingIcon {
        display: block;
      }

      .OfferingTitle {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.875rem;
      }

      .OfferingContent {
        font-size: 0.875rem;
        line-height: 1.7;
        text-align: left;
      }

      .OfferingIconContainer {
        background-color: #d8a75b;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        padding: 0.75rem 0.25rem;
        margin-bottom: 1.5rem;
      }
    `}</style>
  </div>
);
