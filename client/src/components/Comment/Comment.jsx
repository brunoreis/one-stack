import React from 'react';

import comment from './mocks';

import noUserIcon from '../../images/no-user-icon.png';

const Comment = () => (
  <div
    className="container"
  >
    <div className="media">
      <img
        style={{
          height: '40px',
        }}
        className="mr-3 mt-1"
        src={comment.gardener.picture || noUserIcon}
        alt="gardener profile"
      />
      <div className="media-body mb-2">
        <div>
          <span className="font-weight-bold">
            {comment.gardener.name}
            {' '}
          </span>
          <span>
            comentou na planta
            {' '}
          </span>
          <span className="text-primary">
            {comment.plant.name}
          </span>
        </div>
        <div className="text-secondary">
          {comment.dateTime}
        </div>
      </div>
    </div>
    <div>
      {comment.text}
    </div>
  </div>
);

export default Comment;
