import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItemShopPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      shop page with single item by id - {id}.
    </div>
  )
}

export default SingleItemShopPage;
