import {FC, useEffect, useState} from 'react';

import classNames from 'classnames';
import {Button} from 'react-bootstrap';

import placeholder from 'assets/images/tempo/profile-pic-l.jpg';

interface AvatarProps {
  className?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  isonline?: boolean;
  showFollower?: boolean;
  showFollowing?: boolean;
  md?: boolean;
}

const Avatar: FC<AvatarProps> = ({className, image, title, subtitle, isonline, md, showFollower, showFollowing}) => {
  const [classState, setClassState] = useState<string>('');

  useEffect(() => {
    if (className) {
      setClassState(className);
    }
  }, [className]);

  return (
    <div className={classNames('  bg-white d-flex user-avatar ' + classState, {md: md})}>
      <div className={classNames('avatar', {isonline: isonline}, {md: md})}>
        <img
          src={image ? image : placeholder}
          alt={'profile'}
          className={classNames('rounded-circle avatar  img-fluid', {md: md})}
        />
      </div>
      <div className="d-flex flex-column ms-xxl-3 ms-md-2 justify-content-center">
        {title && (
          <span className="d-flex">
            <span className="fw-bold fs-5 ">{title}</span>
            {showFollowing && (
              <>
                {1 != 1 ? (
                  <Button size="sm" className="ms-3 text-decoration-none fw-bold fs-6 my-auto" variant="link">
                    Follow
                  </Button>
                ) : (
                  <Button size="sm" className="ms-3 fw-bold fs-6 my-auto" variant="outline-primary">
                    Following
                  </Button>
                )}
              </>
            )}
          </span>
        )}
        {subtitle && <span className="text-muted fs-6">{subtitle}</span>}
        {showFollower && (
          <span className="d-flex">
            <span className="text-muted fs-6">
              <span className="fw-bold">98</span> Followers - <span className="fw-bold">98</span> Donated
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Avatar;
