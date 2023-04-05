interface CardProps {
  bageClass: string;
  iconName: React.ReactNode;
  title: string;
  totalCount: number;
}

const Card: React.FC<CardProps> = ({
  bageClass,
  iconName,
  title,
  totalCount,
}) => {
  return (
    <div className="card">
      <div className={`icon ${bageClass}`}>{iconName}</div>
      <div className="card_info">
        <p>{title}</p>
        <h4 className="figure">{totalCount}</h4>
      </div>
    </div>
  );
};

export default Card;
