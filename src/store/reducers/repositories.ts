import { Reducer } from 'redux';

import { RepositoryAction } from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { Repository } from '../../types';

const { GET_REPOSITORY_REQUEST, GET_REPOSITORY_SUCCESS, GET_REPOSITORY_FAILURE } = ActionTypes;

interface RepositoryState {
  isFetching: boolean;
  repositories: Repository[];
  error: string;
}

const initialState: RepositoryState = {
  isFetching: false,
  repositories: [],
  error: ''
};

const reducer: Reducer<RepositoryState, RepositoryAction> = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORY_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case GET_REPOSITORY_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_REPOSITORY_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
