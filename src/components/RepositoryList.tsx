import React from 'react';

import RepositoryListItem from './RepositoryListItem';
import { Repository } from '../types';

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repository) => <RepositoryListItem key={`item-${repository.name}`} repository={repository} />)}
    </ul>
  );
};

export { RepositoryList };
