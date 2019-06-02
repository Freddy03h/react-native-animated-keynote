import React from 'react';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis } from 'victory';
import { Code } from "spectacle";

function calculateInterpolation(inputRange, outputRange, value) {
  return ((value - inputRange[0]) * (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0])) + outputRange[0]
}

function getDataLine({ inputRange, outputRange }) {
  return inputRange.map((inputValue, index) => ({ x: inputValue, y: outputRange[index] }))
}

function getDataLineExtrapolateRight({ inputRange, outputRange, extrapolateRight, marginStroke, maxMargin }) {
  const indexMax = inputRange.length - 1;

  const limitX = maxMargin ? Math.max(inputRange[indexMax] + marginStroke, maxMargin) : inputRange[indexMax] + marginStroke;
  const limitY = extrapolateRight === "clamp" ? outputRange[indexMax] : calculateInterpolation([inputRange[indexMax-1], inputRange[indexMax]], [outputRange[indexMax-1], outputRange[indexMax]], limitX);
  return [
    { x: inputRange[indexMax], y: outputRange[indexMax] },
    { x: limitX, y: limitY },
  ];
}

function getDataLineExtrapolateLeft({ inputRange, outputRange, extrapolateLeft, marginStroke, minMargin }) {
  const limitX = minMargin ? Math.min(inputRange[0] - marginStroke, minMargin) : inputRange[0] - marginStroke;
  const limitY = extrapolateLeft === "clamp" ? outputRange[0] : calculateInterpolation(inputRange, outputRange, limitX);
  return [
    { x: limitX, y: limitY },
    { x: inputRange[0], y: outputRange[0] },
  ];
}

export default class InterpolateChart extends React.PureComponent {
  render() {
    const { padding, domainPadding, inputRange, outputRange, extrapolateLeft, extrapolateRight, marginStroke = 20, movingPoint } = this.props;

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        padding={padding || { top: 10, left: 40, bottom: 10, right: 10 }}
        domainPadding={domainPadding}
      >
        <VictoryAxis dependentAxis/>
        <VictoryAxis/>

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
          data={getDataLineExtrapolateRight({ inputRange, outputRange, extrapolateRight, marginStroke, maxMargin: movingPoint ? movingPoint.x : undefined })}
        />
        <VictoryLine
          style={{
            data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
            parent: { border: "1px solid #ccc"}
          }}
          data={getDataLineExtrapolateLeft({ inputRange, outputRange, extrapolateLeft, marginStroke, minMargin: movingPoint ? movingPoint.x : undefined })}
        />
        <VictoryScatter
          data={getDataLine({ inputRange, outputRange })}
          size={5}
          style={{ data: { fill: "#ff4081" } }}
          labels={(datum) => `${Math.ceil(datum.x * 10) / 10}, ${Math.ceil(datum.y * 10) / 10}`}
        />
        {movingPoint && <VictoryScatter
          data={[movingPoint]}
          size={10}
          style={{ data: { fill: "black" }, labels: { fontSize: 26 } }}
          labels={(datum) => `${datum.x} → ${datum.y}`}
        />}
      </VictoryChart>
    );
  }
}

