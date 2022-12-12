import React from "react";
import { View } from "react-native";
import MainStack from "./mainStack";
import OnboardingNavigation from "./OnBoardingRoute";

const AuthNavigator = () => {
    const isLoggedIn = true;
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <MainStack /> : <OnboardingNavigation />}
      
    </View>
  );
};

export default AuthNavigator;
