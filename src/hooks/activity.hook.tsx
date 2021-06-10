import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../storeHelper';

import Activity from '../modules/activity';

function activityHook() {
  const dispatch = useDispatch();
  const activities = useSelector((store: RootState) => store.activity.activities);

  const fetchActivities = () => {
    dispatch(Activity.actions.fetch.request(''));
  };

  return {
    activities,
    fetchActivities,
  };
}

export default activityHook;
