interface OfferingProps {
  title: string;
  content: string;
  icon: string;
}

const Offering: React.SFC<OfferingProps> = ({ title, content, icon }) => (
  <div className="OfferingContainer">
    <div className="OfferingIconContainer">
      {icon && <img className="OfferingIcon" src={icon} />}
    </div>
    <h3 className="OfferingTitle">{title}</h3>
    <p className="OfferingContent">{content}</p>
  </div>
);

export default Offering;
