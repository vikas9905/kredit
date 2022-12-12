import {Login} from  '../screens/login/login';
import {SignUp} from '../screens/signup/signup';
// import Verification from '../screens/Verification';
import {Welcome} from '../screens/welcome/welcome';
export const publicRoutes = [
  {
    name: 'Welcome',
    component: Welcome,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Welcome',
    },
  },

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
  {
    name: 'SignUp',
    component: SignUp,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'SignUp',
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
