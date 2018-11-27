import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native-web';

export default class AnimOne extends React.PureComponent {
  
  translateValue = new Animated.Value(0);
  
  playAnim = () => {
    Animated.timing(
      this.translateValue,
      {
        toValue: 600,
        duration: 1000,
      },
    ).start();
  };
    
  render() {
    return (
      <Animated.View style={[
        styles.box,
        { transform: [{ translateX: this.translateValue }] }
      ]}>
        <TouchableOpacity style={styles.button} onPress={this.playAnim} />
      </Animated.View>
    );
  }
}
    
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ff4081',
    width: 300,
    height: 300
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});