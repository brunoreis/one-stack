import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import ENTITY_QUERY from './ENTITY_QUERY';

const EntityDetailsPage = () => {
  const { entityId } = useParams();
  const { loading, error, data } = useQuery(ENTITY_QUERY, {
    variables: { id: entityId },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { entity } = data;
  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title'>{entity.name}</h1>
        <h2 className='subtitle'>
          {entity.description}
        </h2>
        <div>{`Descrição: ${entity.description}`}</div>
        <div>{`Localização: ${entity.latitude}, ${entity.longitude}`}</div>
      </div>
    </section>
  );
};

export default EntityDetailsPage;
