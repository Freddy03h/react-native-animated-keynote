import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native-web';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';
import { Code } from "spectacle";
import AnimSix from "./AnimSix";

function calculateInterpolation(inputRange, outputRange, value) {
  return ((value - inputRange[0]) * (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0])) + outputRange[0]
}

function getDataLine({ inputRange, outputRange }) {
  return inputRange.map((inputValue, index) => ({ x: inputValue, y: outputRange[index] }))
}

function getDataLineExtrapolateRight({ inputRange, outputRange, extrapolateRight, marginStroke }) {
  const indexMax = inputRange.length - 1;

  const limitX = inputRange[indexMax] + marginStroke;
  const limitY = extrapolateRight === "clamp" ? outputRange[indexMax] : calculateInterpolation([inputRange[indexMax-1], inputRange[indexMax]], [outputRange[indexMax-1], outputRange[indexMax]], limitX);
  return [
    { x: inputRange[indexMax], y: outputRange[indexMax] },
    { x: limitX, y: limitY },
  ];
}

function getDataLineExtrapolateLeft({ inputRange, outputRange, extrapolateLeft, marginStroke }) {
  const limitX = inputRange[0] - marginStroke;
  const limitY = extrapolateLeft === "clamp" ? outputRange[0] : calculateInterpolation(inputRange, outputRange, limitX);
  return [
    { x: limitX, y: limitY },
    { x: inputRange[0], y: outputRange[0] },
  ];
}

export default class InterpolateChart extends React.PureComponent {
  render() {
    const { domainPadding, inputRange, outputRange, extrapolateLeft, extrapolateRight, marginStroke = 20 } = this.props;

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ top: 10, left: 40, bottom: 10, right: 10 }}
        domainPadding={domainPadding}
      >
        <VictoryLine
          style={{
            data: { stroke: "#ff4081" },
            parent: { border: "1px solid #ccc"}
          }}
          data={getDataLine({ inputRange, outputRange })}
        />
        <VictoryLine
          style={{
            data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
            parent: { border: "1px solid #ccc"}
          }}
          data={getDataLineExtrapolateRight({ inputRange, outputRange, extrapolateRight, marginStroke })}
        />
        <VictoryLine
          style={{
            data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
            parent: { border: "1px solid #ccc"}
          }}
          data={getDataLineExtrapolateLeft({ inputRange, outputRange, extrapolateLeft, marginStroke })}
        />
        <VictoryScatter
          data={getDataLine({ inputRange, outputRange })}
          size={5}
          style={{ data: { fill: "#ff4081" } }}
          labels={(datum) => `${datum.x}, ${datum.y}`}
        />
        {/*<VictoryScatter
          data={[
            { x: this.state.trackTranslateValue, y: this.state.trackScaleValue },
          ]}
          size={10}
          style={{ data: { fill: "black" }, labels: { fontSize: 26 } }}
          labels={(datum) => `${datum.x}, ${datum.y}`}
        />*/}
      </VictoryChart>
    );
  }
}
    
const styles = StyleSheet.create({

});
