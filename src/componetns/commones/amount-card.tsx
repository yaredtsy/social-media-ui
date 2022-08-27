import React from 'react';
import className from 'classnames';

interface AmountCardProps {
  text: string;
  md?: boolean;
}

const AmountCard: React.FC<AmountCardProps> = ({text}) => {
  return (
    <div
      className={className(
        'amount-card rounded-pill text-white fw-bolder fs-6 d-flex justify-content-center align-items-center',
        {md: 'amount-card-md'},
      )}
    >
      {text}
    </div>
  );
};

export default AmountCard;
