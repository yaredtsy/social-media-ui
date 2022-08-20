import React, {FC} from 'react';
import {Card} from 'react-bootstrap';
import {BsPrefixProps} from 'react-bootstrap/esm/helpers';

interface CustomeCardProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
  children: any;
  className?: string;
}
const CustomeCard: FC<CustomeCardProps> = ({children, className, ...props}) => {
  return (
    <Card className={`bg-white py-4 px-4 border-0 custom-card ${className && className}`} {...props}>
      {children}
    </Card>
  );
};

export default CustomeCard;
