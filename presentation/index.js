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
            "One-shot" Animation
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
            { loc: [9, 10], note: "create Animated.Vale" },
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

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Interactive Animation
          </Heading>
        </Slide>

        <Slide className="slide-no-padding" bgColor="secondary">
          <video src={require("file-loader!../assets/headerinterpolate.MP4")} style={screenImageStyleIosHeader} muted autoPlay loop playsInline></video>
          <a style={{position:'absolute', top: 400, right: 0, transform: 'scale(0.7)'}} href="https://snack.expo.io/@freddy03h/animated-header-scroll"><Text textColor="tertiary">Link to<br/>Snack</Text></a>
        </Slide>

        <Slide className="slide-no-padding" bgColor="secondary">
          <AnimSix />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/animsix.example")}
          ranges={[
            { loc: [0, 183], title: "scroll event" },
            { loc: [10, 13] },
            { loc: [89, 104] },
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

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Other things
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 20%">
            <ListItem><Code textColor="tertiary">PanResponder</Code></ListItem>
            <ListItem><Code textColor="tertiary">LayoutAnimation</Code></ListItem>
            <ListItem><Code textColor="tertiary">Animated.diffClamp()</Code></ListItem>
            <ListItem><Code textColor="tertiary">react-native-gesture-handler</Code></ListItem>
            <ListItem><Code textColor="tertiary">react-native-reanimated</Code></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References
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
