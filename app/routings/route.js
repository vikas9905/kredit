import {Home} from '../screens/home/Home';
export const routeList = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Home',
    },
  }
];
