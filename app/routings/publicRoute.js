/*eslint-disable*/
import {Login} from  '../screens/login/login';
// import Verification from '../screens/Verification';
export const publicRoutes = [


  {
    name: 'Login',
    component: Login,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Login',
    },
  },

//   {
//     name: 'Verification',
//     component: Verification,
//     options: {
//       tabBarButton: (props) => null,
//       tabBarVisible: false,
//       tabBarBadge: 3,
//       tabBarLabel: 'Verification',
//     },
//   },
];
