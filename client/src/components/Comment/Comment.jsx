import React from 'react';

import './styles/styles.css';
import './styles/fonts.css';
import comment from './mocks';

const Comment = () => (
  <div className="comment">
    <img
      className="comment__picture"
      src={comment.gardener.picture}
      alt="https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png"
    />
    <div className="comment__title">
      <span className="comment__title__font--bold">
        {comment.gardener.name}
        {' '}
      </span>
      <span className="comment__title__font">
        comentou na planta
        {' '}
      </span>
      <span className="comment__title__font">
        {comment.plant.name}
      </span>
    </div>
    <div className="comment__date-time comment__text__font">
      {comment.dateTime}
    </div>
    <div className="comment__text comment__text__font">
      {comment.text}
    </div>
  </div>
);

export default Comment;
