import React from 'react';

import { Input, RepositoryList } from '../components';
import { useActions, useSelector } from '../hooks';

const Search: React.FC = () => {
  const { isFetching, repositories, error } = useSelector((state) => state.repositories);
  const { getRepositories } = useActions();

  const handleSearch = (query: string) => {
    getRepositories(query);
  };

  return (
    <>
      <h1>
        NPM SEARCH
      </h1>
      <Input title="Search" disabled={isFetching} onSearch={handleSearch} />
      {repositories.length > 0 && (
        <RepositoryList repositories={repositories} />
      )}
      {error && (
        <h4>We received an error: {error}</h4>
      )}
    </>
  );
};

export default Search;
