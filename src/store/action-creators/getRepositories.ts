import { Dispatch } from 'redux';
import axios from 'axios';

import {
  GetRepositoryFailureAction,
  GetRepositoryRequestAction,
  GetRepositorySuccessAction,
  RepositoryAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { Repository } from '../../types';

const { GET_REPOSITORY_REQUEST, GET_REPOSITORY_SUCCESS, GET_REPOSITORY_FAILURE } = ActionTypes;

const getRepositoryRequest = (): GetRepositoryRequestAction => {
  return {
    type: GET_REPOSITORY_REQUEST,
    payload: {
      isFetching: true,
      repositories: [],
      error: ''
    }
  }
};

const getRepositorySuccess = (repositories: Repository[]): GetRepositorySuccessAction => {
  return {
    type: GET_REPOSITORY_SUCCESS,
    payload: {
      isFetching: false,
      repositories
    }
  }
};

const getRepositoryFailure = (error: string): GetRepositoryFailureAction => {
  return {
    type: GET_REPOSITORY_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const getRepositories = (query: string) => {
  return async (dispatch: Dispatch<RepositoryAction>) => {
    dispatch(getRepositoryRequest());

    try {
      const url = 'https://registry.npmjs.org/-/v1/search';
      const { data, status } = await axios.get(url, {
        params: {
          text: query
        }
      });
      if (data?.objects) {
        const repositories = data.objects.map((object: any): Repository => ({
          name: object.package.name,
          link: object.package.links.npm
        }));
        dispatch(getRepositorySuccess(repositories));
      } else {
        dispatch(getRepositoryFailure('something with wrong with api call'));
      }
    } catch (error: any) {
      dispatch(getRepositoryFailure(error.message));
    }
  };
};
