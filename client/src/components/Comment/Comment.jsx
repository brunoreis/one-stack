import React from 'react';

import './styles.css';
import comment from './mocks';

import noUserIcon from '../../images/no-user-icon.png';

const Comment = () => (
  <div
    className="comment common__fonts__normal"
  >
    <div style={{
      display: 'flex',
      margin: '5px',
    }}
    >
      <img
        className="comment__picture"
        src={comment.gardener.picture || noUserIcon}
        alt="gardener profile"
      />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
      }}
      >
        <div className="comment__title">
          <span className="comment__title__bold-text">
            {comment.gardener.name}
            {' '}
          </span>
          <span>
            comentou na planta
            {' '}
          </span>
          <span className="comment__plant-name">
            {comment.plant.name}
          </span>
        </div>
        <div className="comment__date-time">
          {comment.dateTime}
        </div>
      </div>
    </div>
    <div className="comment__text">
      {comment.text}
    </div>
  </div>
);

export default Comment;
