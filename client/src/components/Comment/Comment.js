import React from 'react';

import './styles/styles.css';
import './styles/fonts.css';
import comment from './mocks';

const Comment = () => (
  <div className="CommentContainer">
    <img
      className="CommentPicture"
      src={comment.gardener.picture}
      alt="https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png"
    />
    <div className="CommentTitle">
      <span className="CommentTitleFontBold">
        {comment.gardener.name}
        {' '}
      </span>
      <span className="CommentTitleFont">
        comentou na planta
        {' '}
      </span>
      <span className="CommentTitleFont">
        {comment.plant.name}
      </span>
    </div>
    <div className="CommentDateTime CommentTextFont">
      {comment.dateTime}
    </div>
    <div className="CommentText CommentTextFont">
      {comment.text}
    </div>
  </div>
);

export default Comment;
