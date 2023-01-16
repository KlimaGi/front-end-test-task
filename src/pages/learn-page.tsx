import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/main-context';
import SingleItem from '../components/single-item/single-item';

const LearnPage: React.FC = () => {
  const { id } = useParams();
  const { items } = useContext(MainContext);
  const item = items.find(item => item.id === id);

  return (
    <div>
      <p>learn page with single item by id - {id}.</p>
      {
        item
        && <SingleItem item={item} />
      }

    </div>
  )
}

export default LearnPage;
