interface CardProps {
  bageClass: string;
  iconClass: string;
  title: string;
  totalCount: number;
}

const Card: React.FC<CardProps> = ({
  bageClass,
  iconClass,
  title,
  totalCount,
}) => {
  return (
    <div className="card">
      <div className={`icon ${bageClass}`}>
        <i className={`${iconClass}`}></i>
      </div>
      <div className="card_info">
        <p>{title}</p>
        <h4 className="figure">{totalCount}</h4>
      </div>
    </div>
  );
};

export default Card;
