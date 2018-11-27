import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Animated } from 'react-native-web';
 
const HEIGHT_HEADER = 80;
const HEIGHT_HERO = 120;
const HEIGHT_TOTAL = HEIGHT_HEADER + HEIGHT_HERO;
 
export default class AnimFive extends React.PureComponent {
  
  scrollYValue = new Animated.Value(0);
    
  render() {
    const scaleBackgroundInterpolate =
      this.scrollYValue.interpolate({
        inputRange: [-HEIGHT_TOTAL, 0],
        outputRange: [2, 1],
        extrapolateRight: 'clamp',
        extrapolateLeft: 'extend',
      });
 
    const translateYBackgroundInterpolate =
      this.scrollYValue.interpolate({
        inputRange: [-HEIGHT_TOTAL, 0, HEIGHT_TOTAL],
        outputRange: [HEIGHT_TOTAL / 2, 0, -HEIGHT_TOTAL / 3],
        extrapolateRight: 'clamp',
        extrapolateLeft: 'extend',
      });
 
    const scaleTitleInterpolate =
      this.scrollYValue.interpolate({
        inputRange: [0, HEIGHT_HERO],
        outputRange: [2, 1],
        extrapolate: 'clamp',
      });
 
    const translateYTitleInterpolate =
      this.scrollYValue.interpolate({
        inputRange: [-HEIGHT_HERO, 0, HEIGHT_HERO],
        outputRange: [HEIGHT_HERO, HEIGHT_HERO / 2, 0],
        extrapolateRight: 'clamp',
        extrapolateLeft: 'extend',
      });
 
    const opacityOverlayInterpolate =
      this.scrollYValue.interpolate({
        inputRange: [0, HEIGHT_TOTAL],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });
 
    return (
      <View style={styles.screen}>
        <Animated.View style={[styles.background, {
          transform: [{
            translateY: translateYBackgroundInterpolate,
          },{
            scale: scaleBackgroundInterpolate,
          }]
        }]}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: 'http://lorempixel.com/output/nature-q-c-960-400-3.jpg' }}
          />
          <Animated.View style={[styles.overlay, {
            opacity: opacityOverlayInterpolate,
          }]} />
        </Animated.View>
 
        <View style={styles.header}>
          <Animated.Text style={[styles.headerText, {
            transform: [{
              translateY: translateYTitleInterpolate,
            },{
              scale: scaleTitleInterpolate,
            }]
          }]}>
            Header Title
          </Animated.Text>
        </View>
 
        <View style={styles.container}>
          <Animated.ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollYValue } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >
            <View style={styles.textContent}>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut massa odio. Aenean iaculis gravida dui. Quisque accumsan dignissim fringilla. Nullam ullamcorper erat maximus lacus mollis, id porttitor lacus congue. Sed in neque urna. Duis consectetur sollicitudin risus, et consequat urna feugiat at. Curabitur non ex erat. Donec rhoncus condimentum tempus. Sed ultricies felis vel enim sodales efficitur. Mauris venenatis congue odio, sed tempor magna convallis eu. Cras quis aliquet lectus, ac elementum ligula. Pellentesque vitae volutpat ipsum. Morbi non purus ligula. Vivamus pharetra enim a lorem porta, sed finibus sem tincidunt.</Text>
              <Text style={styles.text}>Aenean vitae porttitor nulla, tempus tempus sem. Etiam vel sem ultricies felis eleifend cursus. Aliquam feugiat nisi velit, quis cursus metus vestibulum ut. Cras tincidunt nisi leo, vel pellentesque ligula facilisis non. Duis finibus risus mi, id semper lorem fermentum vel. Aliquam vel nunc scelerisque, auctor lorem vitae, molestie nibh. Sed sit amet cursus justo, nec finibus eros. Aliquam interdum non dui id lobortis.</Text>
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  screen: {
    height: 720,
    width: 480,
    overflow: 'hidden',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEIGHT_TOTAL,
    backgroundColor: '#ff4081',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  header: {
    height: HEIGHT_HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    textShadowColor: '#555',
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: HEIGHT_HERO,
  },
  textContent: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  text: {
    paddingVertical: 10,
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'left',
    color: '#888',
  }
});