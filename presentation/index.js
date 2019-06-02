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
              <svg style={{border: 'solid white 10px'}} width="100%" height="100%" viewBox="0 0 248 248">
                <rect fill="#000000" x="0" y="0" width="248" height="248" />
                <g id="elements">
                  <path fill="#FFFFFF" d="M 8,8 l 8,0 0,8 -8,0 z M 16,8 l 8,0 0,8 -8,0 z M 24,8 l 8,0 0,8 -8,0 z M 32,8 l 8,0 0,8 -8,0 z M 40,8 l 8,0 0,8 -8,0 z M 48,8 l 8,0 0,8 -8,0 z M 56,8 l 8,0 0,8 -8,0 z M 80,8 l 8,0 0,8 -8,0 z M 128,8 l 8,0 0,8 -8,0 z M 136,8 l 8,0 0,8 -8,0 z M 152,8 l 8,0 0,8 -8,0 z M 160,8 l 8,0 0,8 -8,0 z M 168,8 l 8,0 0,8 -8,0 z M 184,8 l 8,0 0,8 -8,0 z M 192,8 l 8,0 0,8 -8,0 z M 200,8 l 8,0 0,8 -8,0 z M 208,8 l 8,0 0,8 -8,0 z M 216,8 l 8,0 0,8 -8,0 z M 224,8 l 8,0 0,8 -8,0 z M 232,8 l 8,0 0,8 -8,0 z M 8,16 l 8,0 0,8 -8,0 z M 56,16 l 8,0 0,8 -8,0 z M 72,16 l 8,0 0,8 -8,0 z M 80,16 l 8,0 0,8 -8,0 z M 96,16 l 8,0 0,8 -8,0 z M 104,16 l 8,0 0,8 -8,0 z M 184,16 l 8,0 0,8 -8,0 z M 232,16 l 8,0 0,8 -8,0 z M 8,24 l 8,0 0,8 -8,0 z M 24,24 l 8,0 0,8 -8,0 z M 32,24 l 8,0 0,8 -8,0 z M 40,24 l 8,0 0,8 -8,0 z M 56,24 l 8,0 0,8 -8,0 z M 80,24 l 8,0 0,8 -8,0 z M 88,24 l 8,0 0,8 -8,0 z M 96,24 l 8,0 0,8 -8,0 z M 120,24 l 8,0 0,8 -8,0 z M 136,24 l 8,0 0,8 -8,0 z M 168,24 l 8,0 0,8 -8,0 z M 184,24 l 8,0 0,8 -8,0 z M 200,24 l 8,0 0,8 -8,0 z M 208,24 l 8,0 0,8 -8,0 z M 216,24 l 8,0 0,8 -8,0 z M 232,24 l 8,0 0,8 -8,0 z M 8,32 l 8,0 0,8 -8,0 z M 24,32 l 8,0 0,8 -8,0 z M 32,32 l 8,0 0,8 -8,0 z M 40,32 l 8,0 0,8 -8,0 z M 56,32 l 8,0 0,8 -8,0 z M 72,32 l 8,0 0,8 -8,0 z M 80,32 l 8,0 0,8 -8,0 z M 96,32 l 8,0 0,8 -8,0 z M 136,32 l 8,0 0,8 -8,0 z M 144,32 l 8,0 0,8 -8,0 z M 184,32 l 8,0 0,8 -8,0 z M 200,32 l 8,0 0,8 -8,0 z M 208,32 l 8,0 0,8 -8,0 z M 216,32 l 8,0 0,8 -8,0 z M 232,32 l 8,0 0,8 -8,0 z M 8,40 l 8,0 0,8 -8,0 z M 24,40 l 8,0 0,8 -8,0 z M 32,40 l 8,0 0,8 -8,0 z M 40,40 l 8,0 0,8 -8,0 z M 56,40 l 8,0 0,8 -8,0 z M 88,40 l 8,0 0,8 -8,0 z M 104,40 l 8,0 0,8 -8,0 z M 112,40 l 8,0 0,8 -8,0 z M 120,40 l 8,0 0,8 -8,0 z M 128,40 l 8,0 0,8 -8,0 z M 160,40 l 8,0 0,8 -8,0 z M 168,40 l 8,0 0,8 -8,0 z M 184,40 l 8,0 0,8 -8,0 z M 200,40 l 8,0 0,8 -8,0 z M 208,40 l 8,0 0,8 -8,0 z M 216,40 l 8,0 0,8 -8,0 z M 232,40 l 8,0 0,8 -8,0 z M 8,48 l 8,0 0,8 -8,0 z M 56,48 l 8,0 0,8 -8,0 z M 72,48 l 8,0 0,8 -8,0 z M 88,48 l 8,0 0,8 -8,0 z M 112,48 l 8,0 0,8 -8,0 z M 120,48 l 8,0 0,8 -8,0 z M 128,48 l 8,0 0,8 -8,0 z M 136,48 l 8,0 0,8 -8,0 z M 144,48 l 8,0 0,8 -8,0 z M 152,48 l 8,0 0,8 -8,0 z M 168,48 l 8,0 0,8 -8,0 z M 184,48 l 8,0 0,8 -8,0 z M 232,48 l 8,0 0,8 -8,0 z M 8,56 l 8,0 0,8 -8,0 z M 16,56 l 8,0 0,8 -8,0 z M 24,56 l 8,0 0,8 -8,0 z M 32,56 l 8,0 0,8 -8,0 z M 40,56 l 8,0 0,8 -8,0 z M 48,56 l 8,0 0,8 -8,0 z M 56,56 l 8,0 0,8 -8,0 z M 72,56 l 8,0 0,8 -8,0 z M 88,56 l 8,0 0,8 -8,0 z M 104,56 l 8,0 0,8 -8,0 z M 120,56 l 8,0 0,8 -8,0 z M 136,56 l 8,0 0,8 -8,0 z M 152,56 l 8,0 0,8 -8,0 z M 168,56 l 8,0 0,8 -8,0 z M 184,56 l 8,0 0,8 -8,0 z M 192,56 l 8,0 0,8 -8,0 z M 200,56 l 8,0 0,8 -8,0 z M 208,56 l 8,0 0,8 -8,0 z M 216,56 l 8,0 0,8 -8,0 z M 224,56 l 8,0 0,8 -8,0 z M 232,56 l 8,0 0,8 -8,0 z M 104,64 l 8,0 0,8 -8,0 z M 112,64 l 8,0 0,8 -8,0 z M 128,64 l 8,0 0,8 -8,0 z M 160,64 l 8,0 0,8 -8,0 z M 168,64 l 8,0 0,8 -8,0 z M 8,72 l 8,0 0,8 -8,0 z M 16,72 l 8,0 0,8 -8,0 z M 24,72 l 8,0 0,8 -8,0 z M 32,72 l 8,0 0,8 -8,0 z M 40,72 l 8,0 0,8 -8,0 z M 56,72 l 8,0 0,8 -8,0 z M 64,72 l 8,0 0,8 -8,0 z M 72,72 l 8,0 0,8 -8,0 z M 80,72 l 8,0 0,8 -8,0 z M 88,72 l 8,0 0,8 -8,0 z M 104,72 l 8,0 0,8 -8,0 z M 120,72 l 8,0 0,8 -8,0 z M 128,72 l 8,0 0,8 -8,0 z M 144,72 l 8,0 0,8 -8,0 z M 160,72 l 8,0 0,8 -8,0 z M 176,72 l 8,0 0,8 -8,0 z M 192,72 l 8,0 0,8 -8,0 z M 208,72 l 8,0 0,8 -8,0 z M 224,72 l 8,0 0,8 -8,0 z M 40,80 l 8,0 0,8 -8,0 z M 48,80 l 8,0 0,8 -8,0 z M 64,80 l 8,0 0,8 -8,0 z M 72,80 l 8,0 0,8 -8,0 z M 80,80 l 8,0 0,8 -8,0 z M 128,80 l 8,0 0,8 -8,0 z M 136,80 l 8,0 0,8 -8,0 z M 152,80 l 8,0 0,8 -8,0 z M 160,80 l 8,0 0,8 -8,0 z M 168,80 l 8,0 0,8 -8,0 z M 176,80 l 8,0 0,8 -8,0 z M 184,80 l 8,0 0,8 -8,0 z M 192,80 l 8,0 0,8 -8,0 z M 200,80 l 8,0 0,8 -8,0 z M 232,80 l 8,0 0,8 -8,0 z M 40,88 l 8,0 0,8 -8,0 z M 56,88 l 8,0 0,8 -8,0 z M 64,88 l 8,0 0,8 -8,0 z M 72,88 l 8,0 0,8 -8,0 z M 80,88 l 8,0 0,8 -8,0 z M 96,88 l 8,0 0,8 -8,0 z M 104,88 l 8,0 0,8 -8,0 z M 152,88 l 8,0 0,8 -8,0 z M 168,88 l 8,0 0,8 -8,0 z M 184,88 l 8,0 0,8 -8,0 z M 16,96 l 8,0 0,8 -8,0 z M 48,96 l 8,0 0,8 -8,0 z M 72,96 l 8,0 0,8 -8,0 z M 80,96 l 8,0 0,8 -8,0 z M 88,96 l 8,0 0,8 -8,0 z M 96,96 l 8,0 0,8 -8,0 z M 120,96 l 8,0 0,8 -8,0 z M 136,96 l 8,0 0,8 -8,0 z M 160,96 l 8,0 0,8 -8,0 z M 176,96 l 8,0 0,8 -8,0 z M 192,96 l 8,0 0,8 -8,0 z M 200,96 l 8,0 0,8 -8,0 z M 208,96 l 8,0 0,8 -8,0 z M 224,96 l 8,0 0,8 -8,0 z M 8,104 l 8,0 0,8 -8,0 z M 16,104 l 8,0 0,8 -8,0 z M 24,104 l 8,0 0,8 -8,0 z M 48,104 l 8,0 0,8 -8,0 z M 56,104 l 8,0 0,8 -8,0 z M 64,104 l 8,0 0,8 -8,0 z M 80,104 l 8,0 0,8 -8,0 z M 96,104 l 8,0 0,8 -8,0 z M 144,104 l 8,0 0,8 -8,0 z M 192,104 l 8,0 0,8 -8,0 z M 208,104 l 8,0 0,8 -8,0 z M 216,104 l 8,0 0,8 -8,0 z M 8,112 l 8,0 0,8 -8,0 z M 24,112 l 8,0 0,8 -8,0 z M 32,112 l 8,0 0,8 -8,0 z M 48,112 l 8,0 0,8 -8,0 z M 80,112 l 8,0 0,8 -8,0 z M 88,112 l 8,0 0,8 -8,0 z M 104,112 l 8,0 0,8 -8,0 z M 112,112 l 8,0 0,8 -8,0 z M 120,112 l 8,0 0,8 -8,0 z M 128,112 l 8,0 0,8 -8,0 z M 144,112 l 8,0 0,8 -8,0 z M 152,112 l 8,0 0,8 -8,0 z M 160,112 l 8,0 0,8 -8,0 z M 168,112 l 8,0 0,8 -8,0 z M 184,112 l 8,0 0,8 -8,0 z M 200,112 l 8,0 0,8 -8,0 z M 232,112 l 8,0 0,8 -8,0 z M 24,120 l 8,0 0,8 -8,0 z M 56,120 l 8,0 0,8 -8,0 z M 80,120 l 8,0 0,8 -8,0 z M 88,120 l 8,0 0,8 -8,0 z M 112,120 l 8,0 0,8 -8,0 z M 120,120 l 8,0 0,8 -8,0 z M 128,120 l 8,0 0,8 -8,0 z M 136,120 l 8,0 0,8 -8,0 z M 144,120 l 8,0 0,8 -8,0 z M 176,120 l 8,0 0,8 -8,0 z M 192,120 l 8,0 0,8 -8,0 z M 200,120 l 8,0 0,8 -8,0 z M 208,120 l 8,0 0,8 -8,0 z M 216,120 l 8,0 0,8 -8,0 z M 16,128 l 8,0 0,8 -8,0 z M 24,128 l 8,0 0,8 -8,0 z M 48,128 l 8,0 0,8 -8,0 z M 72,128 l 8,0 0,8 -8,0 z M 104,128 l 8,0 0,8 -8,0 z M 112,128 l 8,0 0,8 -8,0 z M 136,128 l 8,0 0,8 -8,0 z M 152,128 l 8,0 0,8 -8,0 z M 160,128 l 8,0 0,8 -8,0 z M 168,128 l 8,0 0,8 -8,0 z M 176,128 l 8,0 0,8 -8,0 z M 184,128 l 8,0 0,8 -8,0 z M 224,128 l 8,0 0,8 -8,0 z M 16,136 l 8,0 0,8 -8,0 z M 24,136 l 8,0 0,8 -8,0 z M 48,136 l 8,0 0,8 -8,0 z M 56,136 l 8,0 0,8 -8,0 z M 64,136 l 8,0 0,8 -8,0 z M 72,136 l 8,0 0,8 -8,0 z M 104,136 l 8,0 0,8 -8,0 z M 120,136 l 8,0 0,8 -8,0 z M 144,136 l 8,0 0,8 -8,0 z M 160,136 l 8,0 0,8 -8,0 z M 176,136 l 8,0 0,8 -8,0 z M 192,136 l 8,0 0,8 -8,0 z M 208,136 l 8,0 0,8 -8,0 z M 216,136 l 8,0 0,8 -8,0 z M 8,144 l 8,0 0,8 -8,0 z M 32,144 l 8,0 0,8 -8,0 z M 40,144 l 8,0 0,8 -8,0 z M 48,144 l 8,0 0,8 -8,0 z M 64,144 l 8,0 0,8 -8,0 z M 136,144 l 8,0 0,8 -8,0 z M 152,144 l 8,0 0,8 -8,0 z M 160,144 l 8,0 0,8 -8,0 z M 184,144 l 8,0 0,8 -8,0 z M 192,144 l 8,0 0,8 -8,0 z M 200,144 l 8,0 0,8 -8,0 z M 216,144 l 8,0 0,8 -8,0 z M 232,144 l 8,0 0,8 -8,0 z M 8,152 l 8,0 0,8 -8,0 z M 24,152 l 8,0 0,8 -8,0 z M 48,152 l 8,0 0,8 -8,0 z M 56,152 l 8,0 0,8 -8,0 z M 72,152 l 8,0 0,8 -8,0 z M 96,152 l 8,0 0,8 -8,0 z M 104,152 l 8,0 0,8 -8,0 z M 128,152 l 8,0 0,8 -8,0 z M 136,152 l 8,0 0,8 -8,0 z M 200,152 l 8,0 0,8 -8,0 z M 216,152 l 8,0 0,8 -8,0 z M 8,160 l 8,0 0,8 -8,0 z M 24,160 l 8,0 0,8 -8,0 z M 32,160 l 8,0 0,8 -8,0 z M 48,160 l 8,0 0,8 -8,0 z M 96,160 l 8,0 0,8 -8,0 z M 120,160 l 8,0 0,8 -8,0 z M 128,160 l 8,0 0,8 -8,0 z M 152,160 l 8,0 0,8 -8,0 z M 160,160 l 8,0 0,8 -8,0 z M 176,160 l 8,0 0,8 -8,0 z M 192,160 l 8,0 0,8 -8,0 z M 224,160 l 8,0 0,8 -8,0 z M 8,168 l 8,0 0,8 -8,0 z M 56,168 l 8,0 0,8 -8,0 z M 64,168 l 8,0 0,8 -8,0 z M 72,168 l 8,0 0,8 -8,0 z M 80,168 l 8,0 0,8 -8,0 z M 96,168 l 8,0 0,8 -8,0 z M 144,168 l 8,0 0,8 -8,0 z M 160,168 l 8,0 0,8 -8,0 z M 168,168 l 8,0 0,8 -8,0 z M 176,168 l 8,0 0,8 -8,0 z M 184,168 l 8,0 0,8 -8,0 z M 192,168 l 8,0 0,8 -8,0 z M 200,168 l 8,0 0,8 -8,0 z M 216,168 l 8,0 0,8 -8,0 z M 224,168 l 8,0 0,8 -8,0 z M 232,168 l 8,0 0,8 -8,0 z M 72,176 l 8,0 0,8 -8,0 z M 104,176 l 8,0 0,8 -8,0 z M 112,176 l 8,0 0,8 -8,0 z M 120,176 l 8,0 0,8 -8,0 z M 136,176 l 8,0 0,8 -8,0 z M 152,176 l 8,0 0,8 -8,0 z M 160,176 l 8,0 0,8 -8,0 z M 168,176 l 8,0 0,8 -8,0 z M 200,176 l 8,0 0,8 -8,0 z M 208,176 l 8,0 0,8 -8,0 z M 216,176 l 8,0 0,8 -8,0 z M 224,176 l 8,0 0,8 -8,0 z M 232,176 l 8,0 0,8 -8,0 z M 8,184 l 8,0 0,8 -8,0 z M 16,184 l 8,0 0,8 -8,0 z M 24,184 l 8,0 0,8 -8,0 z M 32,184 l 8,0 0,8 -8,0 z M 40,184 l 8,0 0,8 -8,0 z M 48,184 l 8,0 0,8 -8,0 z M 56,184 l 8,0 0,8 -8,0 z M 72,184 l 8,0 0,8 -8,0 z M 88,184 l 8,0 0,8 -8,0 z M 112,184 l 8,0 0,8 -8,0 z M 120,184 l 8,0 0,8 -8,0 z M 128,184 l 8,0 0,8 -8,0 z M 144,184 l 8,0 0,8 -8,0 z M 152,184 l 8,0 0,8 -8,0 z M 160,184 l 8,0 0,8 -8,0 z M 168,184 l 8,0 0,8 -8,0 z M 184,184 l 8,0 0,8 -8,0 z M 200,184 l 8,0 0,8 -8,0 z M 208,184 l 8,0 0,8 -8,0 z M 216,184 l 8,0 0,8 -8,0 z M 8,192 l 8,0 0,8 -8,0 z M 56,192 l 8,0 0,8 -8,0 z M 80,192 l 8,0 0,8 -8,0 z M 88,192 l 8,0 0,8 -8,0 z M 104,192 l 8,0 0,8 -8,0 z M 112,192 l 8,0 0,8 -8,0 z M 136,192 l 8,0 0,8 -8,0 z M 152,192 l 8,0 0,8 -8,0 z M 160,192 l 8,0 0,8 -8,0 z M 168,192 l 8,0 0,8 -8,0 z M 200,192 l 8,0 0,8 -8,0 z M 8,200 l 8,0 0,8 -8,0 z M 24,200 l 8,0 0,8 -8,0 z M 32,200 l 8,0 0,8 -8,0 z M 40,200 l 8,0 0,8 -8,0 z M 56,200 l 8,0 0,8 -8,0 z M 72,200 l 8,0 0,8 -8,0 z M 88,200 l 8,0 0,8 -8,0 z M 104,200 l 8,0 0,8 -8,0 z M 120,200 l 8,0 0,8 -8,0 z M 144,200 l 8,0 0,8 -8,0 z M 168,200 l 8,0 0,8 -8,0 z M 176,200 l 8,0 0,8 -8,0 z M 184,200 l 8,0 0,8 -8,0 z M 192,200 l 8,0 0,8 -8,0 z M 200,200 l 8,0 0,8 -8,0 z M 216,200 l 8,0 0,8 -8,0 z M 224,200 l 8,0 0,8 -8,0 z M 8,208 l 8,0 0,8 -8,0 z M 24,208 l 8,0 0,8 -8,0 z M 32,208 l 8,0 0,8 -8,0 z M 40,208 l 8,0 0,8 -8,0 z M 56,208 l 8,0 0,8 -8,0 z M 72,208 l 8,0 0,8 -8,0 z M 80,208 l 8,0 0,8 -8,0 z M 88,208 l 8,0 0,8 -8,0 z M 144,208 l 8,0 0,8 -8,0 z M 152,208 l 8,0 0,8 -8,0 z M 168,208 l 8,0 0,8 -8,0 z M 208,208 l 8,0 0,8 -8,0 z M 216,208 l 8,0 0,8 -8,0 z M 224,208 l 8,0 0,8 -8,0 z M 232,208 l 8,0 0,8 -8,0 z M 8,216 l 8,0 0,8 -8,0 z M 24,216 l 8,0 0,8 -8,0 z M 32,216 l 8,0 0,8 -8,0 z M 40,216 l 8,0 0,8 -8,0 z M 56,216 l 8,0 0,8 -8,0 z M 72,216 l 8,0 0,8 -8,0 z M 96,216 l 8,0 0,8 -8,0 z M 104,216 l 8,0 0,8 -8,0 z M 128,216 l 8,0 0,8 -8,0 z M 144,216 l 8,0 0,8 -8,0 z M 160,216 l 8,0 0,8 -8,0 z M 176,216 l 8,0 0,8 -8,0 z M 184,216 l 8,0 0,8 -8,0 z M 192,216 l 8,0 0,8 -8,0 z M 200,216 l 8,0 0,8 -8,0 z M 208,216 l 8,0 0,8 -8,0 z M 216,216 l 8,0 0,8 -8,0 z M 224,216 l 8,0 0,8 -8,0 z M 8,224 l 8,0 0,8 -8,0 z M 56,224 l 8,0 0,8 -8,0 z M 72,224 l 8,0 0,8 -8,0 z M 96,224 l 8,0 0,8 -8,0 z M 120,224 l 8,0 0,8 -8,0 z M 128,224 l 8,0 0,8 -8,0 z M 160,224 l 8,0 0,8 -8,0 z M 168,224 l 8,0 0,8 -8,0 z M 184,224 l 8,0 0,8 -8,0 z M 200,224 l 8,0 0,8 -8,0 z M 208,224 l 8,0 0,8 -8,0 z M 224,224 l 8,0 0,8 -8,0 z M 8,232 l 8,0 0,8 -8,0 z M 16,232 l 8,0 0,8 -8,0 z M 24,232 l 8,0 0,8 -8,0 z M 32,232 l 8,0 0,8 -8,0 z M 40,232 l 8,0 0,8 -8,0 z M 48,232 l 8,0 0,8 -8,0 z M 56,232 l 8,0 0,8 -8,0 z M 72,232 l 8,0 0,8 -8,0 z M 80,232 l 8,0 0,8 -8,0 z M 88,232 l 8,0 0,8 -8,0 z M 96,232 l 8,0 0,8 -8,0 z M 136,232 l 8,0 0,8 -8,0 z M 144,232 l 8,0 0,8 -8,0 z M 160,232 l 8,0 0,8 -8,0 z M 176,232 l 8,0 0,8 -8,0 z M 184,232 l 8,0 0,8 -8,0 z M 192,232 l 8,0 0,8 -8,0 z M 216,232 l 8,0 0,8 -8,0 z " />
                </g>
              </svg>
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
            title="Scale Background"
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
            <Code>translateY = -(scale * height) / 2</Code>
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
