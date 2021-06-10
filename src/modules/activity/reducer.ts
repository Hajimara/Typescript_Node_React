import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib';
import { IRequest, IError } from '../../apis/activity';

export interface IActivity {
  ID: number
  Title: string
  DueDate: string
  Completed: boolean
}

const FETCH = createAsyncAction('activity/FETCH');
export const fetch = createActionEntity<IRequest, IActivity[], IError>(FETCH);

export const actions = { fetch };
const state = { activities: [] as IActivity[], message: '' };

const reducer = createCustomReducer(
  state,
  actions,
).handleAction(fetch.success, (state, action) => ({ ...state, activities: action.payload }))
  .handleAction(fetch.failure, (state, action) => ({ ...state, message: action.payload.message }));

export default reducer;
