import React, { useEffect, useState } from 'react';

import { ListManager } from '@/data/list';
const listManager = new ListManager(); // fake interface function

// item component
const Item = (props) => {
  const { content } = props;

  return <p className="item">{content}</p>;
};

// list component
const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    setLoading(true);

    try {
      const data = await listManager.getList();
      // throw new Error('error'); // trigger error

      setList(data);
    } catch {
      setError(true);
    }

    setLoading(false);
  }, []);

  return loading
    ? 'loading'
    : error
    ? 'error occur'
    : list?.map((item, index) => <Item key={index} content={item} />);
};

export const Normal = () => {
  return <List />;
};
