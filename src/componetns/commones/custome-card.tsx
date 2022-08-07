import React, {FC} from 'react';
import {Card} from 'react-bootstrap';

interface CustomeCardProps {
  children: any;
}
const CustomeCard: FC<CustomeCardProps> = ({children}) => {
  return <Card className="rounded shadow-sm bg-white">{children}</Card>;
};

export default CustomeCard;
