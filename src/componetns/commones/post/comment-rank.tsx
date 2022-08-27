import React from 'react';

//
import placeholder from 'assets/images/tempo/profile-pic-l-4.jpg';
import classNames from 'classnames';

interface CommentRankProps {
  image?: string;
  text: string;
  rank: number;
  className?: string;
  inactive?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CommentRank: React.FC<CommentRankProps> = ({image, text, rank, className, inactive, onClick}) => {
  return (
    <div
      className={classNames(
        'user-avatar d-flex rank rounded-pill ps-2 pe-2 py-1 sm align-items-center mouse-pointer ',
        className && className,
      )}
      onClick={onClick}
    >
      <div className="avatar rounded-circle sm">
        <img src={image ? image : placeholder} alt="rank1" className="rounded-circle avatar  img-fluid sm" />
      </div>
      <div className="d-flex ms-1 ms-md-3 flex-column">
        <div className="d-flex justify-content-center align-items-center">
          <div className={`rank-${rank} d-flex justify-content-center align-items-center fs-6 text-white`}>
            {' '}
            {rank}{' '}
          </div>
          <span className={`fs-6   ms-2 ${inactive ? 'text-muted' : 'text-light'}`}>Top Donor</span>
        </div>
        <div className={`fs-5 fw-bold ${inactive ? 'color-theme' : 'text-white'}`}> {text}</div>
      </div>
    </div>
  );
};

export default CommentRank;
