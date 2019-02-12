// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  Link,
  S,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import AnimOne from '../src/components/AnimOne'
import AnimTwo from '../src/components/AnimTwo'
import AnimThree from '../src/components/AnimThree'
import AnimFour from '../src/components/AnimFour'
import AnimFive from '../src/components/AnimFive'
import AnimSix from '../src/components/AnimSix'

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  freddy: require("../assets/freddy.jpg"),
  twitter: require("../assets/twitter.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

const screenImageStyle = {
  margin: 30,
}

const screenImageStyleAndroid = {
  margin: 30,
  width: 720/2.8,
}

const screenImageStyleIos = {
  margin: 30,
  width: 886/3.6,
}

const screenImageStyleIosBig = {
  margin: '0 30px',
  width: 886/2.8,
}

const screenImageStyleIosContent = {
  margin: '0 30px',
  width: 886/3,
}

const screenImageStyleIosHeader= {
  margin: 0,
  width: 600,
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        controls={false}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Animated
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            React Native
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{display: 'flex', alignItems: 'center', margin: '0 auto 1.5em'}}>
            <img src={images.freddy} style={{width: 150, height: 150, display: 'block', borderRadius: 75, border: 'solid white 4px'}} />
            <div style={{textAlign: 'left', marginLeft: '1em'}}>
              <Heading caps size={5} textColor="primary" margin="0.25rem auto">Freddy Harris</Heading>
              <Text textColor="tertiary">Freelance React Native</Text>
            </div>
          </div>

          <div style={{textAlign: 'left'}}>
            <a
              href="https://twitter.com/HarrisFreddy"
              style={{display: 'inline-block', textDecoration: 'none', backgroundColor: 'white', padding: '16px 40px 20px', borderRadius: 40, color: 'black', fontWeight: 'bold'}}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAN1qAADdagGTXX1TAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvdQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACqEq6ygAAAPx0Uk5TAAECAwQFBgcICQoLDA0O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"
                style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 35, margin: '0px 15px 0px 0px'}}
              />
              @harrisfreddy
              </a>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={{width: 400, height: 400, marginTop: '1em', display: 'inline-block', transform: 'translateY(-100px)'}}>
              <svg style={{marginLeft: 'auto', border: 'solid white 10px'}} shape-rendering="crispEdges" height="100%" width="100%" viewBox="0 0 29 29"><path fill="#FFFFFF" d="M0,0 h29v29H0z"></path><path fill="#000000" d="M0 0h7v1H0zM10 0h1v1H10zM13 0h3v1H13zM17 0h4v1H17zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM13 1h4v1H13zM18 1h1v1H18zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM17 2h1v1H17zM19 2h2v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h1v1H9zM12 3h1v1H12zM14 3h3v1H14zM18 3h1v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h3v1H8zM12 4h2v1H12zM15 4h1v1H15zM18 4h1v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h1v1H12zM15 5h1v1H15zM18 5h2v1H18zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h2v1H10zM16 7h3v1H16zM0 8h2v1H0zM3 8h1v1H3zM6 8h2v1H6zM11 8h4v1H11zM19 8h1v1H19zM22 8h3v1H22zM26 8h2v1H26zM0 9h6v1H0zM8 9h2v1H8zM11 9h2v1H11zM14 9h1v1H14zM16 9h1v1H16zM20 9h1v1H20zM22 9h1v1H22zM25 9h1v1H25zM28,9 h1v1H28zM3 10h1v1H3zM5 10h2v1H5zM11 10h2v1H11zM14 10h1v1H14zM19 10h2v1H19zM23 10h5v1H23zM1 11h2v1H1zM4 11h1v1H4zM7 11h10v1H7zM18 11h1v1H18zM22 11h2v1H22zM26 11h2v1H26zM0 12h8v1H0zM10 12h2v1H10zM14 12h4v1H14zM19 12h4v1H19zM25 12h1v1H25zM27,12 h2v1H27zM1 13h2v1H1zM5 13h1v1H5zM7 13h2v1H7zM11 13h1v1H11zM13 13h1v1H13zM17 13h1v1H17zM19 13h1v1H19zM21 13h1v1H21zM0 14h2v1H0zM3 14h6v1H3zM11 14h1v1H11zM13 14h2v1H13zM16 14h1v1H16zM18 14h1v1H18zM22,14 h7v1H22zM3 15h3v1H3zM7 15h1v1H7zM9 15h3v1H9zM16 15h2v1H16zM19 15h1v1H19zM25 15h1v1H25zM27 15h1v1H27zM1 16h1v1H1zM3 16h5v1H3zM9 16h2v1H9zM12 16h2v1H12zM16 16h2v1H16zM21 16h1v1H21zM27 16h1v1H27zM1 17h1v1H1zM3 17h2v1H3zM7 17h1v1H7zM10 17h1v1H10zM12 17h3v1H12zM21 17h3v1H21zM25 17h1v1H25zM28,17 h1v1H28zM0 18h1v1H0zM2 18h5v1H2zM11 18h2v1H11zM14 18h1v1H14zM21 18h1v1H21zM23 18h1v1H23zM27,18 h2v1H27zM3 19h1v1H3zM8 19h1v1H8zM12 19h1v1H12zM14 19h8v1H14zM24 19h1v1H24zM27,19 h2v1H27zM0 20h1v1H0zM4 20h6v1H4zM15 20h1v1H15zM19 20h6v1H19zM26 20h1v1H26zM8 21h4v1H8zM14 21h1v1H14zM16 21h2v1H16zM19 21h2v1H19zM24 21h1v1H24zM26,21 h3v1H26zM0 22h7v1H0zM8 22h1v1H8zM10 22h1v1H10zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM10 23h1v1H10zM14 23h3v1H14zM20 23h1v1H20zM24 23h3v1H24zM28,23 h1v1H28zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM12 24h1v1H12zM15 24h4v1H15zM20 24h5v1H20zM27,24 h2v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h5v1H8zM20 25h1v1H20zM22 25h6v1H22zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM9 26h1v1H9zM12 26h1v1H12zM16 26h1v1H16zM24 26h3v1H24zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM12 27h9v1H12zM24 27h1v1H24zM27 27h1v1H27zM0 28h7v1H0zM8 28h2v1H8zM11 28h1v1H11zM13 28h3v1H13zM17 28h1v1H17zM20 28h1v1H20zM24 28h2v1H24zM27 28h1v1H27z"></path></svg>
            </div>
          </div>
        </Slide>

        <Slide>
          <div>
            <video src={require("file-loader!../assets/accorlocal.MP4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
            <video src={require("file-loader!../assets/mangacollec.mp4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
          </div>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/stylesheet.example")}
          ranges={[
            { loc: [0, 24] },
          ]}
          showLineNumbers={false}
        />

        <Slide>
          <Heading size={2} fit caps textColor="secondary">
            Declarative API
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote>The Animated API was designed with a very important constraint in mind, it is serializable.</Quote>
          </Text>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote>This means we can send everything about the animation to native before it has even started and allows native code to perform the animation on the UI thread without having to go through the bridge on every frame.</Quote>
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Non-Interactive Animation
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <AnimOne />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animone.example")}
          ranges={[
            { loc: [0, 50], title: "Animated.timing()" },
            { loc: [4, 6], note: "import Animated" },
            { loc: [9, 10], note: "create Animated.Value" },
            { loc: [23, 27], note: "use Animated.View" },
            { loc: [27, 31] },
            { loc: [11, 20] },
          ]}
          showLineNumbers={false}
        />

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Animatable components
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 13%">
            <ListItem><Code textColor="tertiary">Animated.View</Code></ListItem>
            <ListItem><Code textColor="tertiary">Animated.Text</Code></ListItem>
            <ListItem><Code textColor="tertiary">Animated.ScrollView</Code></ListItem>
            <ListItem><Code textColor="tertiary">Animated.Image</Code></ListItem>
            <ListItem><Code textColor="tertiary">…</Code></ListItem>
          </List>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Code>Animated.createAnimatedComponent()</Code>
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Configuring animations
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 13%">
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.timing()</Code><br/><S type="italic" textColor="secondary">animates a value over time using easing functions.</S></ListItem>
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.spring()</Code><br/><S type="italic" textColor="secondary">provides a simple spring physics model.</S></ListItem>
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.decay()</Code><br/><S type="italic" textColor="secondary">starts with an initial velocity and gradually slows to a stop.</S></ListItem>
          </List>
        </Slide>

        <Slide bgColor="tertiary">
          <AnimTwo />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animtwo.example")}
          ranges={[
            { loc: [0, 78], title: "Animated.parallel()" },
            { loc: [11, 13] },
            { loc: [39, 42] },
            { loc: [48, 51] },
            { loc: [15, 34] },
          ]}
          showLineNumbers={false}
        />

        <Slide bgColor="tertiary">
          <AnimThree />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animthree.example")}
          ranges={[
            { loc: [0, 77], title: "Animated.sequence()" },
            { loc: [11, 13] },
            { loc: [38, 41] },
            { loc: [47, 50] },
            { loc: [15, 33] },
          ]}
          showLineNumbers={false}
        />

        <Slide bgColor="tertiary">
          <AnimFour />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animfour.example")}
          ranges={[
            { loc: [0, 91], title: "parallel() & sequence()" },
            { loc: [11, 14] },
            { loc: [46, 52] },
            { loc: [58, 64] },
            { loc: [16, 41] },
          ]}
          showLineNumbers={false}
        />

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Composing animations
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 13%">
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.parallel()</Code><br/><S type="italic" textColor="secondary">starts a number of animations at the same time.</S></ListItem>
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.sequence()</Code><br/><S type="italic" textColor="secondary">starts the animations in order, waiting for each to complete before starting the next.</S></ListItem>
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.delay()</Code><br/><S type="italic" textColor="secondary">starts an animation after a given delay.</S></ListItem>
            <ListItem margin="0 auto 0.5rem"><Code textColor="tertiary">Animated.loop()</Code><br/><S type="italic" textColor="secondary">loops a given animation continuously.</S></ListItem>
            <ListItem>…</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="tertiary">
            Performance
          </Heading>
          <Heading size={1} textColor="secondary">
            <Code>useNativeDriver: true</Code>
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Only use <Code>transform</Code> and <Code>opacity</Code>
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/nativedriver.example")}
          ranges={[
            { loc: [0, 5] },
          ]}
          showLineNumbers={false}
        />

        <Slide bgColor="tertiary">
          <AnimFive />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animfive.example")}
          ranges={[
            { loc: [0, 110], title: "Interpolation" },
            { loc: [10, 11] },
            { loc: [13, 29] },
            { loc: [32, 37] },
            { loc: [38, 43] },
            { loc: [44, 49] },
            { loc: [50, 56] },
            { loc: [59, 67] },
            { loc: [73, 79] },
          ]}
          showLineNumbers={false}
        />

        <Slide className="slide-no-padding" bgColor="tertiary">
          <div style={{margin: '0 auto', display: 'flex'}}>
            <div style={{width: 600, flexGrow: 1, flexShrink: 0, flexBasis: 600 }}>
              <VictoryChart
                theme={VictoryTheme.material}
                padding={{ top: 10, left: 40, bottom: 10, right: 10 }}
              >
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081" },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: 0, y: -100 },
                    { x: 100, y: 200 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: 100, y: 200 },
                    { x: 120, y: 260 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: -20, y: -160 },
                    { x: 0, y: -100 },
                  ]}
                />
                <VictoryScatter
                  data={[
                    { x: 0, y: -100 },
                    { x: 100, y: 200 },
                  ]}
                  size={5}
                  style={{ data: { fill: "#ff4081" } }}
                  labels={(datum) => `${datum.x}, ${datum.y}`}
                />
              </VictoryChart>
            </div>
            <div>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>inputRange: [0, 100]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>outputRange: [-100, 200]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>extrapolate: 'extend'</Code>
            </div>
          </div>
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <div style={{margin: '0 auto', display: 'flex'}}>
            <div style={{width: 600, flexGrow: 1, flexShrink: 0, flexBasis: 600 }}>
              <VictoryChart
                theme={VictoryTheme.material}
                padding={{ top: 10, left: 40, bottom: 10, right: 10 }}
                domainPadding={{x: 0, y: 30}}
              >
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081" },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: 0, y: -100 },
                    { x: 100, y: 200 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: 100, y: 200 },
                    { x: 120, y: 200 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: -20, y: -100 },
                    { x: 0, y: -100 },
                  ]}
                />
                <VictoryScatter
                  data={[
                    { x: 0, y: -100 },
                    { x: 100, y: 200 },
                  ]}
                  size={5}
                  style={{ data: { fill: "#ff4081" } }}
                  labels={(datum) => `${datum.x}, ${datum.y}`}
                />
              </VictoryChart>
            </div>
            <div>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>inputRange: [0, 100]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>outputRange: [-100, 200]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>extrapolate: 'clamp'</Code>
            </div>
          </div>
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <div style={{margin: '0 auto', display: 'flex'}}>
            <div style={{width: 600, flexGrow: 1, flexShrink: 0, flexBasis: 600 }}>
              <VictoryChart
                theme={VictoryTheme.material}
                padding={{ top: 10, left: 40, bottom: 10, right: 10 }}
                domainPadding={{x: 0, y: 30}}
              >
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081" },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: -80, y: 40 },
                    { x: 0, y: 0 },
                    { x: 100, y: -20 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: 100, y: -20 },
                    { x: 130, y: -20 },
                  ]}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#ff4081", strokeDasharray: [4, 2] },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={[
                    { x: -110, y: 55 },
                    { x: -80, y: 40 },
                  ]}
                />
                <VictoryScatter
                  data={[
                    { x: -80, y: 40 },
                    { x: 0, y: 0 },
                    { x: 100, y: -20 },
                  ]}
                  size={5}
                  style={{ data: { fill: "#ff4081" } }}
                  labels={(datum) => `${datum.x}, ${datum.y}`}
                />
              </VictoryChart>
            </div>
            <div>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block', maxWidth: 400}}>inputRange: [-80, 0, 100]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block', maxWidth: 400}}>outputRange: [40, 0, -20]</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>extrapolateLeft: 'extend'</Code>
              <Code margin="0 auto 0.5rem" style={{display: 'inline-block'}}>extrapolateRight: 'clamp'</Code>
            </div>
          </div>
        </Slide>

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Interactive Animation
          </Heading>
        </Slide>

        <Slide className="slide-no-padding" bgColor="secondary">
          <video src={require("file-loader!../assets/headerinterpolate.MP4")} style={screenImageStyleIosHeader} muted autoPlay loop playsInline></video>
          <a style={{position:'absolute', top: 400, right: 0, transform: 'scale(0.7)'}} href="https://snack.expo.io/@freddy03h/animated-header-scroll"><Text textColor="tertiary">Link to<br/>Snack</Text></a>
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <div style={{height: 720, width: 480, margin: 'auto', border: 'solid black 10px', padding: 5, display: 'flex', flexDirection: 'column', position: 'relative'}}>
            <div style={{height: 280, border: 'solid #e91e63 10px', position: 'absolute', top: 30, left: 30, right: 30}}>
              <span style={{position: 'absolute', left: 10, bottom: 0, color: '#e91e63', fontWeight: 'bold'}}>Image</span>
            </div>
            <div style={{height: 120, border: 'solid #4caf50 10px', margin: 5, position: 'relative'}}>
              <span style={{position: 'absolute', left: 30, bottom: 0, color: '#4caf50', fontWeight: 'bold'}}>Header</span>
            </div>
            <div style={{border: 'solid #2196f3 10px', margin: 5, flexGrow: 1, position: 'relative'}}>
              <span style={{position: 'absolute', left: 10, bottom: 0, color: '#2196f3', fontWeight: 'bold'}}>ScrollView</span>
            </div>
            <div style={{borderLeft: 'solid #607d8b 10px', position: 'absolute', height: 120, left:490, top: 10, display: 'flex', alignItems: 'center'}}>
              <span style={{color: '#607d8b', marginLeft: 10, fontWeight: 'bold'}}>HEIGHT_HEADER</span>
            </div>
            <div style={{borderLeft: 'solid #607d8b 10px', position: 'absolute', height: 170, left:490, top: 140, display: 'flex', alignItems: 'center'}}>
              <span style={{color: '#607d8b', marginLeft: 10, fontWeight: 'bold'}}>HEIGHT_HERO</span>
            </div>
          </div>
        </Slide>

        <Slide className="slide-no-padding" bgColor="secondary">
          <AnimSix />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animsix.example")}
          ranges={[
            { loc: [0, 184], title: "scroll event" },
            { loc: [10, 13] },
            { loc: [16, 17] },
            { loc: [89, 105] },
            { loc: [19, 26] },
            { loc: [27, 34] },
            { loc: [35, 41] },
            { loc: [42, 49] },
            { loc: [50, 56] },
            { loc: [59, 66] },
            { loc: [71, 74] },
            { loc: [77, 84] },
          ]}
          showLineNumbers={false}
        />

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Other things
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            LayoutAnimation
          </Heading>
          <video src={require("file-loader!../assets/layoutanimation.MP4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            InteractionManager
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0"><Code textColor="tertiary">InteractionManager.runAfterInteractions()</Code></Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Animated.diffClamp()
          </Heading>
          <video src={require("file-loader!../assets/diffclamp.MP4")} style={screenImageStyleIosHeader} muted autoPlay loop playsInline></video>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            PanResponder
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote>It reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize simple multi-touch gestures.</Quote>
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            react-native-gesture-handler
          </Heading>
          <img style={{marginTop: '3.5rem'}} src="https://kmagiera.github.io/react-native-gesture-handler/img/sampleswipeable.gif" />
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            react-native-reanimated
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote>React Native's Animated library reimplemented.</Quote>
          </Text>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote>It provides a more comprehensive, low level abstraction for the Animated library API to be built on top of and hence allow for much greater flexibility especially when it comes to gesture based interactions.</Quote>
          </Text>
        </Slide>

        {/*<Slide>
          <Heading size={3} caps textColor="secondary">
            Other things
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 20%">
            <ListItem><Code textColor="tertiary">PanResponder</Code></ListItem>
            <ListItem><Code textColor="tertiary">LayoutAnimation</Code></ListItem>
            <ListItem><Code textColor="tertiary">InteractionManager</Code></ListItem>
            <ListItem><Code textColor="tertiary">Animated.diffClamp()</Code></ListItem>
            <ListItem><Code textColor="tertiary">react-native-gesture-handler</Code></ListItem>
            <ListItem><Code textColor="tertiary">react-native-reanimated</Code></ListItem>
          </List>
        </Slide>*/}

        <Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References 1/2
          </Heading>

          <Text textAlign="left">Documentation</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://facebook.github.io/react-native/docs/animations" target="_blank">React Native - Animations</Link></ListItem>
            <ListItem><Link href="https://facebook.github.io/react-native/docs/animated" target="_blank">React Native - Animated API</Link></ListItem>
            <ListItem><Link href="http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html" target="_blank">React Native - Using Native Driver</Link></ListItem>
          </List>

          <Text textAlign="left">Articles</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://opensource.com/article/18/6/getting-started-react-native-animations" target="_blank">Getting started with React Native animations</Link></ListItem>
            <ListItem><Link href="https://blog.pusher.com/animation-react-native-part-1/" target="_blank">Adding animations to your React Native app</Link></ListItem>
            <ListItem><Link href="https://codeburst.io/butter-smooth-animations-in-react-native-93a3b86adf1" target="_blank">Butter Smooth Animations in React Native</Link></ListItem>
            <ListItem><Link href="https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae" target="_blank">React Native Animations Using the Animated API</Link></ListItem>
          </List>

        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References 2/2
          </Heading>

          <Text textAlign="left">Talks</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://www.youtube.com/watch?v=xtqUJVqpKNo" target="_blank">Christopher Chedeau - Animated</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=qgSMjYWqBk4" target="_blank">Krzysztof Magiera - React Native ❤ 60FPS</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=kdq4z2708VM" target="_blank">Krzysztof Magiera - Declarative future of gestures and animations in React Native</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=Z0Jl1KCWiag" target="_blank">Krzysztof Magiera - It all starts with navigation</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=ZXqyaslyXUw" target="_blank">James Long - Block the Main Thread </Link></ListItem>
          </List>

          <Text textAlign="left">Tools</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://github.com/kmagiera/react-native-gesture-handler" target="_blank">React Native Gesture Handler</Link></ListItem>
            <ListItem><Link href="https://github.com/kmagiera/react-native-reanimated" target="_blank">React Native Reanimated</Link></ListItem>
          </List>

        </Slide>

        <Slide>
          <Heading size={1} caps textColor="tertiary">
            Merci
          </Heading>
          <Heading size={5} caps textColor="secondary" margin="3em 0 0">
            <Link href="https://twitter.com/HarrisFreddy" textColor="secondary">
              <img src={images.twitter} style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 60, margin: '0 15px 0 0'}} />
              @harrisfreddy
            </Link>
          </Heading>
          <Heading size={6} caps textColor="tertiary" margin="1em 0 0.5em">
            Freelance React Native & React.js
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
