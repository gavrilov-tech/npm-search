import React from 'react';

import { Repository } from '../types';

interface RepositoryListItemProps {
  repository: Repository;
}

const RepositoryListItem: React.FC<RepositoryListItemProps> = ({ repository: { name, link} }) => {
  return (
    <li>
      <a target="_blank" href={link}>{name}</a>
    </li>
  );
};

export default RepositoryListItem;
