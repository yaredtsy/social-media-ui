import React, {FC, useEffect, useState} from 'react';
import placeholder from 'assets/images/supp.jpg';

interface AvatarProps {
  className?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  isonline?: boolean;
}
const Avatar: FC<AvatarProps> = ({className, image, title, subtitle, isonline}) => {
  const [classState, setClassState] = useState<string>('');

  useEffect(() => {
    if (className) {
      setClassState(className);
    }
  }, []);
  return (
    <div className={'  bg-white d-flex '}>
      <div className={isonline ? 'isonline avatar' : 'avatar'}>
        <img
          src={image ? image : placeholder}
          alt={'profile'}
          className={'rounded-circle avatar  img-fluid' + classState}
        />
      </div>
      <div className="d-flex flex-column ms-5 justify-content-center">
        {title && <span className="fw-bold fs-4">{title}</span>}
        {subtitle && <span className="text-muted fs-5">{subtitle}</span>}
      </div>
    </div>
  );
};

export default Avatar;
