import { ActionTypes } from '../action-types';
import { Repository } from '../../types';

export interface GetRepositoryRequestAction {
  type: ActionTypes.GET_REPOSITORY_REQUEST;
  payload: {
    isFetching: boolean;
    repositories: Repository[];
    error: string;
  }
}

export interface GetRepositorySuccessAction {
  type: ActionTypes.GET_REPOSITORY_SUCCESS;
  payload: {
    isFetching: boolean;
    repositories: Repository[];
  }
}

export interface GetRepositoryFailureAction {
  type: ActionTypes.GET_REPOSITORY_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export type RepositoryAction = GetRepositoryRequestAction | GetRepositorySuccessAction | GetRepositoryFailureAction;
