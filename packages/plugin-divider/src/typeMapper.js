import DynamicDividerComponent from './components/dynamic-divider-component';
import { DIVIDER_TYPE } from './constants';

export const typeMapper = () => ({
  [DIVIDER_TYPE]: { component: DynamicDividerComponent },
});
