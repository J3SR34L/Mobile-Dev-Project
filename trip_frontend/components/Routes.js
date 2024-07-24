// import React from 'react';
// import { Router, Scene } from 'react-native-router-flux';
// import StartPage from './StartPage';
// import SignUp from './SignUp';
// import SignIn from './SignIn';
// import Extra from './Extra';

// const Routes = () => (
//   <Router>
//     <Scene key="root" hideNavBar>
//       <Scene key="start" component={StartPage} title="" initial />
//       <Scene key="signup" component={SignUp} title="Sign Up" />
//       <Scene key="signin" component={SignIn} title="Sign In" />
//       <Scene key="extra" component={Extra} title="Extra" />
//     </Scene>
//   </Router>
// );

// export default Routes;


import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import StartPage from './StartPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Extra from './Extra';
import Login from './Login'; // Import the Login component

const Routes = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="start" component={StartPage} title="" initial />
      <Scene key="signup" component={SignUp} title="Sign Up" />
      <Scene key="signin" component={SignIn} title="Sign In" />
      <Scene key="extra" component={Extra} title="Extra" />
      <Scene key="login" component={Login} title="Login" /> {/* Add Login route */}
    </Scene>
  </Router>
);

export default Routes;

