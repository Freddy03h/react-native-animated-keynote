import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native-web';

export default class AnimFive extends React.PureComponent {
  
  myAnimatedValue = new Animated.Value(0);
  
  playAnim = () => {
    Animated.sequence([
      Animated.timing(
        this.myAnimatedValue,
        {
          toValue: 100,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.myAnimatedValue,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
    ]).start(() => {
      this.playAnim();
    });
  };

  componentDidMount() {
    this.playAnim();
  }
    
  render() {
    const translateInterpolate =
      this.myAnimatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [-(0.5*300)/2, 0],
      });

    const scaleInterpolate =
      this.myAnimatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0.5, 1],
      });

    const scalePointInterpolate =
      this.myAnimatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [2, 1],
      });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, styles.box2, {
            transform: [{scale: scaleInterpolate}]
          }]}
        >
          <Animated.View
            style={[styles.point, {
              transform: [{scale: scalePointInterpolate}]
            }]}
          />
        </Animated.View>

        <Animated.View
          style={[styles.box, {
            transform: [
              { translateY: translateInterpolate },
              {scale: scaleInterpolate}
            ]
          }]}
        >
        <Animated.View
            style={[styles.point, styles.point2, {
              transform: [{scale: scalePointInterpolate}]
            }]}
          />
        </Animated.View>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#ff4081',
    width: 300,
    height: 300
  },
  box2: {
    backgroundColor: 'black',
  },
  point: {
    backgroundColor: '#ff4081',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: "50%",
    left: "50%",
    marginLeft: -15,
    marginTop: -15,
  },
  point2: {
    backgroundColor: 'black',
    position: 'absolute',
    top: "0%",
    marginLeft: -15,
    marginTop: -15,
  },
});