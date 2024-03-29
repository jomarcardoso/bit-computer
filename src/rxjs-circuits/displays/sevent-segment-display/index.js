// https://github.com/berkayarslan17/A-Fully-Operational-Scientific-Calculator?tab=readme-ov-file
// https://softwareparticles.com/learn-how-a-4-digit-7-segment-led-display-works-and-how-to-control-it-using-an-arduino/
// var D1 = 2;
// var D2 = 3;
// var D3 = 4;
// var D4 = 5;

// var A = 6;
// var B = 7;
// var C = 8;
// var D = 9;
// var E = 10;
// var F = 11;
// var G = 12;
// var DP = 13; // decimal point

// // Define the input pins for the 7-segment display segments.
// const segmentPins[] = {A, B, C, D, E, F, G, DP};

// // Define the input pins for the 7-segment display digits.
// const digitPins[] = {D1, D2, D3, D4};

// // For common cathode
// digitON = 'LOW';
// digitOFF = 'HIGH';

// segmentON = 'HIGH';
// segmentOFF = 'LOW';

// function setup() {
//    // Pin initialization.
//    for (let i = 0; i < 8; i++) {
//       pinMode(segmentPins[i], OUTPUT);
//    }
//    for (let i = 0; i < 4; i++) {
//       pinMode(digitPins[i], OUTPUT);
//       digitalWrite(digitPins[i], digitOFF);
//    }
// }

// function loop() {
//   digitalWrite(D1, digitON); // Turn on the first digit
//   digitalWrite(B, segmentON);
//   digitalWrite(C, segmentON);
// }

import * as rxjs from 'rxjs';

/**
 *   A
 * F   B
 *   G
 * E   C
 *   D  DP
 *
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 * @param {rxjs.Observable} c
 * @param {rxjs.Observable} d
 * @param {rxjs.Observable} e
 * @param {rxjs.Observable} f
 * @param {rxjs.Observable} g
 * @param {rxjs.Observable} dp
 *
 * @returns {void}
 */
export function SevenSegmentDisplay(a, b, c, d, e, f, g, dp) {
  let showA = 0;
  let showB = 0;
  let showC = 0;
  let showD = 0;
  let showE = 0;
  let showF = 0;
  let showG = 0;
  let showDP = 0;

  function log() {
    console.log(`\
${showA ? '   888888888   ' : '               '}
${showA ? '   888888888   ' : '               '}
${showF ? '888' : '   '}         ${showB ? '888' : '   '}
${showF ? '888' : '   '}         ${showB ? '888' : '   '}
${showF ? '888' : '   '}         ${showB ? '888' : '   '}
${showF ? '888' : '   '}         ${showB ? '888' : '   '}
${showF ? '888' : '   '}         ${showB ? '888' : '   '}
${showG ? '   888888888   ' : '               '}
${showG ? '   888888888   ' : '               '}
${showE ? '888' : '   '}         ${showC ? '888' : '   '}
${showE ? '888' : '   '}         ${showC ? '888' : '   '}
${showE ? '888' : '   '}         ${showC ? '888' : '   '}
${showE ? '888' : '   '}         ${showC ? '888' : '   '}
${showE ? '888' : '   '}         ${showC ? '888' : '   '}
${showD ? '   888888888   ' : '               '} ${showDP ? '888' : '   '}
${showD ? '   888888888   ' : '               '} ${showDP ? '888' : '   '}
   `);
  }

  a.subscribe((a) => {
    showA = a;

    log();
  });

  b.subscribe((b) => {
    showB = b;

    log();
  });

  c.subscribe((c) => {
    showC = c;

    log();
  });

  d.subscribe((d) => {
    showD = d;

    log();
  });

  e.subscribe((e) => {
    showE = e;

    log();
  });

  f.subscribe((f) => {
    showF = f;

    log();
  });

  g.subscribe((g) => {
    showG = g;

    log();
  });

  dp.subscribe((dp) => {
    showDP = dp;

    log();
  });
}
// class SevenSegmentDisplay extends HTMLElement {
//   static observedAttributes = ['a', 'b', 'c', 'd', 'e', 'showF', 'g', 'dp'];
//   constructor() {
//     super();
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(`Attribute ${name} has changed.`);
//   }
// }

// // a, b, c, d, e, f, g, dp

// customElements.define('seven-segment-digit', SevenSegmentDisplay);
