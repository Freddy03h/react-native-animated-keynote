import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native-web';

export default class AnimTwo extends React.PureComponent {
  
  translateValue = new Animated.Value(0);
  opacityValue = new Animated.Value(0);
  
  playAnim = () => {
    Animated.parallel([
      Animated.timing(
        this.translateValue,
        {
          toValue: 600,
          duration: 1000,
          easing: Easing.ease,
        },
      ),
      Animated.timing(
        this.opacityValue,
        {
          toValue: 1,
          duration: 800,
          delay: 200,
          easing: Easing.ease,
        },
      ),
    ]).start();
  };
    
  render() {
    return (
      <View>
        <Animated.View
          style={[styles.box, {transform: [{translateX: this.translateValue}]}]}
        >
          <TouchableOpacity style={styles.button} onPress={this.playAnim} />
        </Animated.View>

        <Animated.View
          style={[styles.box, styles.box2, {opacity: this.opacityValue}]}
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