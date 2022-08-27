import React, {useState} from 'react';

import {BsThreeDotsVertical} from 'react-icons/bs';

import {Button, Card, Image} from 'react-bootstrap';
import {BsHeart, BsHeartFill} from 'react-icons/bs';

import {FiMessageSquare} from 'react-icons/fi';
import {RiShareForwardLine} from 'react-icons/ri';

//components
import CustomeCard from 'componetns/commones/custome-card';
import Avatar from './avatar';
import postImage from 'assets/images/pic1.png';
import AmountCard from './amount-card';
import CommentRank from './post/comment-rank';
import classNames from 'classnames';
import CommentCard from './post/comment-card';

const PostDisplay = () => {
  const [activeCommentTab, setActiveCommentTab] = useState<number>(1);

  return (
    <CustomeCard className="my-lg-5 my-3">
      <Card.Header className="bg-white ps-0 border-0 mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <Avatar title="Yared karen" subtitle="@karen - 2h ago" md />
          <Button variant="light" className="rounded-circle">
            <BsThreeDotsVertical className="fs-2 text-muted" />
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="mb-4 fs-5">
          lorem ipsum dolor sit amet, consectetur allowSyntheticDefaultImports Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="post-container my-3">
          <Image src={postImage} alt="" className="" fluid />
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-0 px-0">
        <>
          <div className="d-flex">
            {/* <div className="d-flex justify-content-center align-items-center mx-2 text-muted">
            <BsHeart className="fs-3" />
            <span className="fs-5 ms-1"> 16 Likes</span>
          </div> */}

            <div className="d-flex justify-content-center align-items-center me-2 me-lg-4 color-theme">
              <BsHeartFill className="fs-3" />
              <span className="fs-4 ms-1"> 16 Likes</span>
            </div>
            <div className="d-flex justify-content-center align-items-center  mx-2 mx-lg-4 text-muted">
              <FiMessageSquare className="fs-3" />
              <span className="fs-4 ms-1">13 Supps</span>
            </div>
            <div className="d-flex justify-content-center align-items-center mx-lg-4 mx-2 text-muted">
              <RiShareForwardLine className="fs-3" />
              <span className="fs-4 ms-1">Share</span>
            </div>
            <div className="ms-auto">
              <AmountCard text="30K SUPPS" md />
            </div>
          </div>
          <div className="d-flex mt-5 scrollable">
            <CommentRank
              rank={1}
              text={'300 SUPP'}
              className={classNames('me-1 me-lg-4 ', {
                'rank-active': activeCommentTab == 1,
                'bg-color-grey': activeCommentTab != 1,
              })}
              inactive={activeCommentTab != 1}
              onClick={() => {
                setActiveCommentTab(1);
              }}
            />
            <CommentRank
              rank={2}
              text={'300 SUPP'}
              className={classNames('mx-1 mx-lg-2 mx-lg-4 ', {
                'rank-active': activeCommentTab == 2,
                'bg-color-grey': activeCommentTab != 2,
              })}
              inactive={activeCommentTab != 2}
              onClick={() => {
                setActiveCommentTab(2);
              }}
            />
            <CommentRank
              rank={3}
              text={'300 SUPP'}
              className={classNames('mx-1 mx-lg-4', {
                'rank-active': activeCommentTab == 3,
                'bg-color-grey': activeCommentTab != 3,
              })}
              inactive={activeCommentTab != 3}
              onClick={() => {
                setActiveCommentTab(3);
              }}
            />
          </div>
          <div>
            <CommentCard />
          </div>
        </>
      </Card.Footer>
    </CustomeCard>
  );
};

export default PostDisplay;
