import { View, Text, Animated, Easing } from 'react-native';
import React, { useEffect, useState } from 'react';

export default Animate= ({ children, left, leftP, duration }) => {
  const [leftPosition, setLeftPosition] = useState(new Animated.Value (0));

//   useEffect(() => {
//     left ? mooveLR() : mooveRL();
//   }, []);
componentDidMount = () => {
    this.state.leftPosition === 0 ? this.mooveLR () : this.mooveRL () // repeats always when the red box return to its initial position : leftPosition === 0
  }

  const mooveLR = () => {
    Animated.timing(leftPosition, {
      toValue: 300,
      duration, // the duration of the animation
      easing: Easing.linear, // the style of animation
      useNativeDriver:false
    }).start(); // starts this annimation once this method is called
  };

  const mooveRL = () => {
    Animated.timing(leftPosition, {
      toValue: 0,
      duration, // the duration of the animation
      easing: Easing.linear, // the style of animation
      useNativeDriver:false

    }).start(); // starts this annimation once this method is called
  };

  return (
    <Animated.View style={[{ left: leftPosition }]}>{children}</Animated.View>
  );
};