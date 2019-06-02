import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native-web';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';
import { Code } from "spectacle";

import InterpolateChart from './InterpolateChart'
import AnimSix from "./AnimSix";

export default class Interactive1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trackTranslateValue: 0,
      trackScaleValue: 2,
    };
  }
  
  translateValue = new Animated.Value(0);
  
  playAnim = () => {
    Animated.sequence([
      Animated.timing(
        this.translateValue,
        {
          toValue: 120,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.translateValue,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
    ]).start();
  };

  componentDidMount() {
    this.translateValue.addListener((e) => {
      this.setState({trackTranslateValue: Math.round(e.value)})
    });

    const scaleTitleInterpolate =
      this.translateValue.interpolate({
        inputRange:  [0, 120],
        outputRange: [2, 1],
        extrapolate: 'clamp',
      }).addListener((e) => {
      this.setState({trackScaleValue: Math.round(e.value * 100) / 100})
    });


    //this.playAnim();
  }
    
  render() {
    return (
      <div style={{margin: '0 auto', display: 'flex', alignItems: "center"}}>
        <div style={{width: 600, flexGrow: 1, flexShrink: 0, flexBasis: 600 }}>
          <VictoryChart
            theme={VictoryTheme.material}
            padding={{ top: 30, left: 40, bottom: 24, right: 10 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#ff4081" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 0, y: 2 },
                { x: 120, y: 1 },
              ]}
            />
            <VictoryLine
              style={{
                data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 120, y: 1 },
                { x: 140, y: 1 },
              ]}
            />
            <VictoryLine
              style={{
                data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: -20, y: 2 },
                { x: 0, y: 2 },
              ]}
            />
            <VictoryScatter
              data={[
                { x: 0, y: 2 },
                { x: 120, y: 1 },
              ]}
              size={5}
              style={{ data: { fill: "#ff4081" } }}
              labels={(datum) => `${datum.x}, ${datum.y}`}
            />
            <VictoryScatter
              data={[
                { x: this.state.trackTranslateValue, y: this.state.trackScaleValue },
              ]}
              size={10}
              style={{ data: { fill: "black" }, labels: { fontSize: 24 } }}
              labels={(datum) => `${datum.x} → ${datum.y}`}
            />
          </VictoryChart>
        </div>
        <div>
          {/*<div>
            <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>inputRange: [0, 120]</Code>
            <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>outputRange: [2, 1]</Code>
            <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>extrapolate: 'clamp'</Code>
          </div>*/}
          <div style={{border: "solid black 1px"}}>
            <AnimSix scrollYValue={this.translateValue} />
          </div>
        </div>
      </div>
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