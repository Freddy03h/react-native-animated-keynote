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
import AnimSix from '../src/components/AnimSix' // Important
import AnimSeven from '../src/components/AnimSeven'
import Interactive1 from '../src/components/Interactive1'

import InterpolateChart from '../src/components/InterpolateChart'

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  freddy: require("../assets/freddy.png"),
  twitter: require("../assets/twitter.png"),
  qr: require("../assets/qr-expo.png"),
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
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: "flex-end", marginTop: '1em', transform: 'translateY(-100px)'}}>
            <div>
              <div style={{backgroundColor: "white", padding: "12px 24px 6px", borderRadius: 40, marginRight: 24}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" viewBox="-2 -1 26 24"><path fill="rgba(0, 0, 32, 1)" fillRule="evenodd" d="M5.84439563e-15,18.52072 C0.042601976,19.0415198 0.225318565,19.5638181 0.704130384,20.2650123 C1.27202197,21.0966169 2.24914731,21.5536071 2.9619004,20.8204258 C3.44287509,20.3256353 8.643748,11.2343287 11.1501969,7.78933904 C11.4511295,7.3640867 12.0728268,7.3640867 12.3739317,7.78933904 C14.8803807,11.2343287 20.0812536,20.3256353 20.5622283,20.8204258 C21.2748089,21.5536071 22.2521067,21.0966169 22.8199983,20.2650123 C23.3790947,19.4462456 23.5343035,18.8713971 23.5343035,18.2580353 C23.5343035,17.8402716 15.4344759,2.76636898 14.6187677,1.5116517 C13.8343003,0.304828919 13.5946623,0.042335452 12.268059,0 L11.2560275,1.79395598e-12 C9.92932506,0.042335452 9.68981105,0.304828919 8.90518853,1.5116517 C8.10659328,2.74030565 0.3230204,17.219996 0,18.213285 L5.84439563e-15,18.52072 Z"></path></svg>
                <svg fill="rgba(0, 0, 32, 1)" width="100" style={{margin: "4px 0 0 8px"}} viewBox="0 0 50 22"><path d="M0.583491239,16.0324821 L0.583491239,0.578259454 L10.0431199,0.578259454 L10.0431199,3.33803123 L3.46623518,3.33803123 L3.46623518,6.80406065 L9.44522132,6.80406065 L9.44522132,9.45346295 L3.46623518,9.45346295 L3.46623518,13.2728887 L10.0431199,13.2728887 L10.0431199,16.0324821 L0.583491239,16.0324821 Z M12.2294939,16.0324821 L16.1585173,9.98337907 L12.4643765,4.3315348 L15.3471204,4.3315348 L17.8880602,8.26132998 L17.9308288,8.26132998 L20.4719411,4.3315348 L23.3545126,4.3315348 L19.6603717,9.98337907 L23.5893951,16.0324821 L20.6212864,16.0324821 L17.9308288,11.8379072 L17.8880602,11.8379072 L15.1976027,16.0324821 L12.2294939,16.0324821 Z M25.7247227,21 L25.7247227,4.3315348 L28.372584,4.3315348 L28.372584,5.4573391 L28.4153527,5.4573391 L28.5221018,5.29187404 C28.5648704,5.22554537 28.6750687,5.11160984 28.8530414,4.94971084 C29.0310141,4.78763353 29.2267496,4.64053367 29.4402478,4.50805464 C29.6537461,4.37557561 29.9420895,4.25789572 30.3051055,4.15483666 C30.6681215,4.0517776 31.055971,4.00024807 31.4688262,4.00024807 C32.8070706,4.00024807 33.977862,4.55583981 34.9815453,5.66720158 C35.9850561,6.77838504 36.4868977,8.28326124 36.4868977,10.1820085 C36.4868977,12.0953765 36.0028189,13.6039971 35.0348336,14.7078701 C34.0668483,15.8117432 32.8924354,16.3637689 31.5115949,16.3637689 C31.0987396,16.3637689 30.7179608,16.3122393 30.369086,16.2091803 C30.0203837,16.1061212 29.7392834,15.984697 29.5257851,15.8449075 C29.3121144,15.7051181 29.127071,15.5653286 28.9704827,15.4253609 C28.8138943,15.2855714 28.7000745,15.1641472 28.6288509,15.0610881 L28.5434861,14.9066778 L28.5007175,14.9066778 L28.5007175,21 L25.7247227,21 Z M28.5007175,8.96776594 L28.5007175,11.3741414 C28.5007175,12.0513357 28.7214588,12.6215483 29.1627691,13.0851357 C29.6040793,13.5489015 30.1947348,13.7806952 30.9350806,13.7806952 C31.7464775,13.7806952 32.4119781,13.4715181 32.9315825,12.853342 C33.451187,12.235166 33.7109029,11.3447215 33.7109029,10.1820085 C33.7109029,9.01929547 33.4548085,8.12885095 32.9422747,7.51067492 C32.4297409,6.89249888 31.7606187,6.5833217 30.9350806,6.5833217 C30.1947348,6.5833217 29.6040793,6.81511543 29.1627691,7.27888119 C28.7214588,7.74246864 28.5007175,8.30537079 28.5007175,8.96776594 Z M43.7042773,16.3637689 C42.1668483,16.3637689 40.9,15.8192319 39.9033873,14.7299797 C38.9069471,13.6409058 38.408727,12.1247965 38.408727,10.1820085 C38.408727,8.2686404 38.9212608,6.76001985 39.946156,5.6561468 C40.9710511,4.55227375 42.2239307,4.00024807 43.7042773,4.00024807 C45.1847964,4.00024807 46.4375035,4.55227375 47.4625711,5.6561468 C48.4874662,6.76001985 49,8.2686404 49,10.1820085 C49,12.1247965 48.5017799,13.6409058 47.5053397,14.7299797 C46.508727,15.8192319 45.2418787,16.3637689 43.7042773,16.3637689 Z M43.7042773,13.7806952 C44.5015329,13.7806952 45.1278865,13.467952 45.5835104,12.8422872 C46.0389619,12.2168008 46.2667738,11.3301006 46.2667738,10.1820085 C46.2667738,9.03391631 46.0355128,8.14721615 45.5728182,7.52172969 C45.1101237,6.89606493 44.4873917,6.5833217 43.7042773,6.5833217 C42.9213353,6.5833217 42.2986033,6.89249888 41.8359088,7.51067492 C41.3732142,8.12885095 41.1419532,9.01929547 41.1419532,10.1820085 C41.1419532,11.3447215 41.3697652,12.235166 41.8252166,12.853342 C42.2808406,13.4715181 42.9071941,13.7806952 43.7042773,13.7806952 Z"></path></svg>
              </div>
            </div>

            <div style={{width: 400, height: 400, display: 'inline-block'}}>
              <img src={images.qr} style={{border: 'solid white 10px', imageRendering: "pixelated"}} width="100%" height="100%" />
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
            { loc: [0, 22] },
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

        <Slide>
          <Heading size={3} caps textColor="tertiary">
            Hooks
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="3.5rem auto 0">
            <Quote><Code>useRef</Code> returns a mutable ref object whose <Code>.current</Code> property is initialized to the passed argument (<Code>initialValue</Code> ). The returned object will persist for the full lifetime of the component.</Quote>
          </Text>
          <Text textColor="tertiary" margin="3.5rem auto 0" style={{textAlign: "left", lineHeight: 1.1}}>
            <Code>const translateValue = useRef(new Animated.Value(0)).current;</Code>
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/hooks.example")}
          ranges={[
            { loc: [0, 14] },
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
              <InterpolateChart
                inputRange={[0, 100]}
                outputRange={[-100, 200]}
                extrapolateLeft="extend"
                extrapolateRight="extend"
              />
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
              <InterpolateChart
                inputRange={[0, 100]}
                outputRange={[-100, 200]}
                extrapolateLeft="clamp"
                extrapolateRight="clamp"
                domainPadding={{x: 0, y: 30}}
              />
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
              <InterpolateChart
                inputRange={[-80, 0, 100]}
                outputRange={[40, 0, -20]}
                extrapolateLeft="extend"
                extrapolateRight="clamp"
                marginStroke={30}
                domainPadding={{x: 0, y: 30}}
              />
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

        <Slide className="slide-no-padding" bgColor="tertiary">
          <Interactive1
            title="Scale Title"
            inputRange={[0, 120]}
            outputRange={[2, 1]}
            extrapolateLeft="clamp"
            extrapolateRight="clamp"
            marginStroke={40}
            padding={{ top: 34, left: 50, bottom: 24, right: 10 }}
            initial={[0,2]}
            round={100}
            code={[
              "inputRange: [0, 120]",
              "outputRange: [2, 1]",
              "extrapolate: 'clamp'",
            ]}
          />
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <Interactive1
            title="Translate Title"
            inputRange={[-120, 0, 120]}
            outputRange={[120, 120/2, 0]}
            extrapolateLeft="extend"
            extrapolateRight="clamp"
            marginStroke={40}
            padding={{ top: 34, left: 50, bottom: 24, right: 10 }}
            initial={[0,60]}
            round={1}
            code={[
              "inputRange: [-120, 0, 120]",
              "outputRange: [120, 120 / 2, 0]",
              "extrapolateLeft: 'extend'",
              "extrapolateRight: 'clamp'",
            ]}
          />
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <Interactive1
            title="Scale Background"
            inputRange={[-200, 0]}
            outputRange={[2, 1]}
            extrapolateLeft="extend"
            extrapolateRight="clamp"
            marginStroke={40}
            padding={{ top: 34, left: 50, bottom: 24, right: 10 }}
            initial={[0,1]}
            round={100}
            code={[
              "inputRange: [-200, 0]",
              "outputRange: [2, 1]",
              "extrapolateLeft: 'extend'",
              "extrapolateRight: 'clamp'",
            ]}
          />
        </Slide>

        <Slide className="slide-no-padding" bgColor="tertiary">
          <Interactive1
            title="Translate Background"
            inputRange={[-200, 0, 200]}
            outputRange={[200 / 2, 0, -200 / 3]}
            extrapolateLeft="extend"
            extrapolateRight="clamp"
            marginStroke={40}
            padding={{ top: 34, left: 50, bottom: 24, right: 10 }}
            initial={[0, 0]}
            round={1}
            code={[
              "inputRange: [-200, 0, 200]",
              "outputRange: [200 / 2, 0, -200 / 3]",
              "extrapolateLeft: 'extend'",
              "extrapolateRight: 'clamp'",
            ]}
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            no transformOrigin
          </Heading>
          <AnimSeven />
          <Heading size={1} textColor="secondary">
            <Code style={{fontSize: "2.4rem"}}>translateY = ((scale - 1) * height) / 2</Code>
          </Heading>
        </Slide>

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
            <ListItem><Link href="https://github.com/necolas/react-native-web" target="_blank">React Native Web</Link></ListItem>
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
