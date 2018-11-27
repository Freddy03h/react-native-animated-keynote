import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native-web';

export default class AnimFour extends React.PureComponent {
  
  translateBox1Value = new Animated.Value(0);
  translateBox2Value = new Animated.Value(600);
  opacityValue = new Animated.Value(1);
  
  playAnim = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.translateBox1Value,
          {
            toValue: 600,
            duration: 1000,
            easing: Easing.ease,
          },
        ),
        Animated.timing(
          this.translateBox2Value,
          {
            toValue: 0,
            duration: 1000,
            easing: Easing.ease,
          },
        ),
      ]),
      Animated.timing(
        this.opacityValue,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
        },
      ),
    ]).start();
  };
    
  render() {
    return (
      <View>
        <Animated.View
          style={[styles.box, {opacity: this.opacityValue, transform: [{translateX: this.translateBox1Value}]}]}
        >
          <TouchableOpacity style={styles.button} onPress={this.playAnim} />
        </Animated.View>

        <Animated.View
          style={[styles.box, styles.box2, {opacity: this.opacityValue, transform: [{translateX: this.translateBox2Value}]}]}
        >
          <TouchableOpacity style={styles.button} onPress={this.playAnim} />
        </Animated.View>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ff4081',
    width: 300,
    height: 300
  },
  box2: {
    backgroundColor: 'black',
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});