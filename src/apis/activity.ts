import axios from 'axios';

import { IActivity } from '../modules/activity/reducer';

export interface IRequest { }
export interface IError {
  message: string
}

const fetchActivities = (): Promise<IActivity[]> => axios.get('http://fakerestapi.azurewebsites.net/api/Activities')
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data as Promise<IActivity[]>;
  });

export default {
  fetchActivities,
};
