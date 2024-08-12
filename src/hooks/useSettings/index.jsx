import {useSelector} from 'react-redux';

export default function useSettings() {
  return useSelector(state => state.settings.code);
}
