import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItemLearnPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      learn page with single item by id - {id}.
    </div>
  )
}

export default SingleItemLearnPage;
