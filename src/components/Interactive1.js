import React from 'react';
import { Animated } from 'react-native-web';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';
import { Heading, Code } from "spectacle";

import InterpolateChart from './InterpolateChart'
import AnimSix from "./AnimSix";

export default class Interactive1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trackTranslateValue: props.initial[0],
      trackScaleValue: props.initial[1],
    };
  }
  
  translateValue = new Animated.Value(0);

  componentDidMount() {
    const { inputRange, outputRange, extrapolateLeft, extrapolateRight, round } = this.props;

    this.translateValue.addListener((e) => {
      this.setState({trackTranslateValue: Math.round(e.value)})
    });

    const scaleTitleInterpolate =
      this.translateValue.interpolate({
        inputRange,
        outputRange,
        extrapolateLeft,
        extrapolateRight
      }).addListener((e) => {
      this.setState({trackScaleValue: Math.round(e.value * round) / round})
    });
  }
    
  render() {
    const { padding, inputRange, outputRange, extrapolateLeft, extrapolateRight, marginStroke = 40, code = [], title } = this.props;
    return (
      <div style={{margin: '0 auto', display: 'flex', alignItems: "center"}}>
        <div style={{width: 600, flexGrow: 1, flexShrink: 0, flexBasis: 600 }}>
          <InterpolateChart
            inputRange={inputRange}
            outputRange={outputRange}
            extrapolateLeft={extrapolateLeft}
            extrapolateRight={extrapolateRight}
            marginStroke={marginStroke}
            padding={padding}
            movingPoint={{ x: this.state.trackTranslateValue, y: this.state.trackScaleValue }}
          />
        </div>
        <div>
          <div style={{border: "solid black 1px"}}>
            <AnimSix scrollYValue={this.translateValue}>
              <div>
                <Heading size={6} textColor="secondary">
                  {title}
                </Heading>
                {code.map((text) => <Code margin="0 auto 0.5rem" style={{display: 'inline-block', fontSize: 24}}>{text}</Code>)}
              </div>
            </AnimSix>
          </div>
        </div>
      </div>
    );
  }
}
