import React from 'react';

import { ListManager } from '@/data/list';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const listManager = new ListManager();

const Item = (props) => {
  const { content } = props;

  return <p className="item">{content}</p>;
};

const queryClient = new QueryClient({});

const List = () => {
  const { data, status } = useQuery('lists', listManager.getList);

  return (
    <>
      {status === 'loading'
        ? 'loading'
        : status === 'error'
        ? 'error occur'
        : data?.map((item, index) => <Item key={index} content={item} />)}
    </>
  );
};

export const WithQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
};
