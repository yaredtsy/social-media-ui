import React, {FC} from 'react';
import {Card} from 'react-bootstrap';

interface CustomeCardProps {
  children: any;
}
const CustomeCard: FC<CustomeCardProps> = ({children}) => {
  return <Card className="shadow-sm bg-white py-4 ps-4 border-0 custom-card">{children}</Card>;
};

export default CustomeCard;
