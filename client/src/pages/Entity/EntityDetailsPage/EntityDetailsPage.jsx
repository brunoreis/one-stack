import React from 'react';
import { useParams } from 'react-router-dom';

const EntityDetailsPage = () => {
  const { entityId } = useParams();
  return (
    <div>{`farmer id: ${entityId}`}</div>
  );
};

export default EntityDetailsPage;
