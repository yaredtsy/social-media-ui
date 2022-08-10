import React, {FC, useEffect, useState} from 'react';
import placeholder from 'assets/images/supp.jpg';
import classNames from 'classnames';
interface AvatarProps {
  className?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  isonline?: boolean;
  md?: boolean;
}
const Avatar: FC<AvatarProps> = ({className, image, title, subtitle, isonline, md}) => {
  const [classState, setClassState] = useState<string>('');

  useEffect(() => {
    if (className) {
      setClassState(className);
    }
  }, []);
  return (
    <div className={classNames('  bg-white d-flex user-avatar' + classState, {md: md})}>
      <div className={classNames('avatar', {isonline: isonline}, {md: md})}>
        <img
          src={image ? image : placeholder}
          alt={'profile'}
          className={classNames('rounded-circle avatar  img-fluid', {md: md})}
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
