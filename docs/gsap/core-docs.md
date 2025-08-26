# GSAP Documentation

## Basics

### "to" Tween - Animate to Provided Values

```js
gsap.to(".selector", { // selector text, Array, or object
  x: 100, // any properties (not limited to CSS)
  backgroundColor: "red", // camelCase
  duration: 1, // seconds
  delay: 0.5,
  ease: "power2.inOut",
  stagger: 0.1, // stagger start times
  paused: true, // default is false
  overwrite: "auto", // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false,
  onComplete: () => {
    console.log("finished")
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});
"from" Tween - Animate from Provided Values
gsap.from('.selector', { fromVars });
"fromTo" Tween (Define Both Start and End Values)
gsap.fromTo('.selector', { fromVars }, { toVars });
// special properties (duration, ease, etc.) go in toVars
Set Values Immediately (No Animation)
gsap.set('.selector', { toVars });
ScrollTrigger
scrollTrigger: {
  trigger: ".selector", // selector or element
  start: "top center",  // [trigger] [scroller] positions
  end: "20px 80%", // [trigger] [scroller] positions
  // or relative amount: "+=500"
  scrub: true, // or time (in seconds) to catch up
  pin: true, // or selector or element to pin
  markers: true, // only during development!
  toggleActions: "play pause resume reset",
  // other actions: complete reverse none
  toggleClass: "active",
  fastScrollEnd: true, // or velocity number
  containerAnimation: tween, // linear animation
  id: "my-id",
  anticipatePin: 1, // may help avoid jump
  snap: {
    snapTo: 1 / 10, // progress increment
    // or "labels" or function or Array
    duration: 0.5,
    directional: true,
    ease: "power3",
    onComplete: callback,
    // other callbacks: onStart, onInterrupt
  },
  pinReparent: true, // moves to documentElement during pin
  pinSpacing: false,
  pinType: "transform", // or "fixed"
  pinnedContainer: ".selector",
  preventOverlaps: true, // or arbitrary string
  once: true,
  endTrigger: ".selector", // selector or element
  horizontal: true, // switches mode
  invalidateOnRefresh: true, // clears start values on refresh
  refreshPriority: 1, // influence refresh order
  onEnter: callback
  // other callbacks:
  // onLeave, onEnterBack, onLeaveBack, onUpdate,
  // onToggle, onRefresh, onRefreshInit, onScrubComplete
}
Timelines
Create a Timeline
let tl = gsap.timeline({
  delay: 0.5,
  paused: true, // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  defaults: {
    // children inherit these defaults
    duration: 1,
    ease: 'none'
  },
  smoothChildTiming: true,
  autoRemoveChildren: true,
  onComplete: () => {
    console.log("finished")
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});
Sequence Multiple Tweens
tl.to('.selector', { duration: 1, x: 50, y: 0 })
  .to('#id', { autoAlpha: 0 })
  .to(elem, { duration: 1, backgroundColor: 'red' })
  .to([elem, elem2], { duration: 3, x: 100 });
Position Parameter (Controls Placement)
tl.to(target, { toVars }, positionParameter);

// Examples:
0.7; // exactly 0.7 seconds into the timeline (absolute)
('-=0.7'); // overlap with previous by 0.7 sec
('myLabel'); // insert at "myLabel" position
('myLabel+=0.2'); // 0.2 seconds after "myLabel"
('<'); // align with start of most recently-added child
('<0.2'); // 0.2 seconds after ^^
('-=50%'); // overlap half of inserting animation's duration
('<25%'); // 25% into the previous animation (from its start)
Plugins
Register GSAP Plugins (Once) Before Using Them
gsap.registerPlugin(Draggable, TextPlugin);
Available Plugins
Draggable
DrawSVGPlugin
EaselPlugin
Flip
GSDevTools
InertiaPlugin
MorphSVGPlugin
MotionPathPlugin
MotionPathHelper
Observer
Physics2DPlugin
PhysicsPropsPlugin
PixiPlugin
ScrambleTextPlugin
ScrollToPlugin
ScrollTrigger
ScrollSmoother
SplitText
TextPlugin
Installation
// Import and register GSAP
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);
Utility Methods
Accessible through gsap.utils.foo()

checkPrefix() - get relevant browser prefix for property
clamp() - clamp value to range
distribute() - distribute value among and array
getUnit() - get unit of string
interpolate() - interpolate between values
mapRange() - map one range to another
normalize() - map a range to the 0-1 range
pipe() - sequence function calls
random() - generates a random value
selector() - get a scoped selector function
shuffle() - shuffles an array in-place
snap() - snap a value to either increment or array
splitColor() - splits color into RGB array
toArray() - convert array-like thing to array
unitize() - adds specified unit to function results
wrap() - place number in range, wrapping to start
wrapYoyo() - place number in range, wrapping in reverse
Control Methods
Retain animation reference to control later:

let anim = gsap.to(...); // or gsap.timeline(...);
Most methods can be used as getters or setters:

anim.play() // plays forward
  .pause()
  .resume() // respects direction
  .reverse()
  .restart()
  .timeScale(2) // 2 = double speed, 0.5 = half speed
  .seek(1.5) // jump to a time (in seconds) or label
  .progress(0.5) // jump to halfway
  .totalProgress(0.8) // includes repeats
  // when used as setter, returns animation (chaining)
Other useful methods (tween and timeline):

.kill() - immediately destroy
.isActive() - true if currently animating
.then() - Promise
.invalidate() - clear recorded start/end values
.eventCallback() - get/set an event callback
Timeline-specific methods:

.add(thing, position) - add label, tween, timeline, or callback
.call(func, params, position) - calls function at given point
.getChildren() - get an Array of the timeline's children
.clear() - empties the timeline
.tweenTo(timeOrLabel, {vars}) - animate playhead to a position linearly
.tweenFromTo(from, to, {vars}) - with both start and end positions
Nesting Timelines
function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}

function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}

let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5") // overlap slightly
Eases
See greensock.com/ease-visualizer

ease: 'none'; // no ease (same as "linear")
Basic Core Eases
'power1', 'power2', 'power3', 'power4', 'circ', 'expo', 'sine'
Each has .in, .out, and .inOut extensions (e.g., "power1.inOut")
Expressive Core Eases
'elastic', 'back', 'bounce', 'steps(n)'
In EasePack Plugin (Not Core)
'rough', 'slow', 'expoScale(1, 2)'
Expressive Plugin Eases
CustomEase, CustomWiggle, CustomBounce
Misc
Get the Current Value of a Property
gsap.getProperty("#id", "x");       // 20
gsap.getProperty("#id", "x", "px"); // "20px"
Set GSAP's Global Tween Defaults
gsap.defaults({ease: "power2.in", duration: 1});
Configure GSAP's Non-Tween-Related Settings
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});
Register an Effect for Reuse
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0
    });
  },
  defaults: {duration: 2},
  extendTimeline: true
});
Now we can use it like this:

gsap.effects.fade(".box");
// Or directly on timelines
tl.fade(".box", {duration: 3})
Add Listener with gsap.ticker
gsap.ticker.add(myFunction);
function myFunction(time, deltaTime, frame) {
  // Executes on every tick after
  // the core engine updates
}
// To remove the listener later...
gsap.ticker.remove(myFunction);
Faster Way to Repeatedly Set Property than .set()
let setX = gsap.quickSetter("#id", "x", "px");
document.addEventListener("mousemove", e => setX(e.clientX) );
quickTo - For Animation!
let xTo = gsap.quickTo("#id", "x", { duration: 0.4, ease: "power3" })
document.addEventListener("mousemove", e => xTo(e.pageX) );
React
useGSAP() Hook 💚
GSAP itself is completely framework-agnostic and can be used in any JS framework without any special wrappers or dependencies. However, this hook solves a few React-specific friction points for you so that you can just focus on the fun stuff. 🤘🏻

useGSAP() is a drop-in replacement for useEffect() or useLayoutEffect() that automatically handles cleanup using gsap.context(). Cleanup is important in React and Context makes it simple.

Import the useGSAP() hook from @gsap/react and you're good to go! All GSAP animations, ScrollTriggers, Draggables, and SplitText instances created when the useGSAP() hook executes will be reverted automatically when the component unmounts and the hook is torn down.

npm install @gsap/react
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const container = useRef();

useGSAP(() => {
  // gsap code here...
  gsap.to('.box', { x: 360 }); // <-- automatically reverted
},{ scope: container }); // <-- scope is for selector text (optional)
No file chosenNo file chosen
Re-write it all in markdown that in the chat window can be copoied and pasted as markdown for doc purposes.

GSAP Quick Reference
Basics
"to" Tween - Animate to Provided Values
gsap.to(".selector", { // selector text, Array, or object
  x: 100, // any properties (not limited to CSS)
  backgroundColor: "red", // camelCase
  duration: 1, // seconds
  delay: 0.5,
  ease: "power2.inOut",
  stagger: 0.1, // stagger start times
  paused: true, // default is false
  overwrite: "auto", // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false,
  onComplete: () => {
    console.log("finished")
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});
"from" Tween - Animate from Provided Values
gsap.from('.selector', { fromVars });
"fromTo" Tween (Define Both Start and End Values)
gsap.fromTo('.selector', { fromVars }, { toVars });
// special properties (duration, ease, etc.) go in toVars
Set Values Immediately (No Animation)
gsap.set('.selector', { toVars });
ScrollTrigger
scrollTrigger: {
  trigger: ".selector", // selector or element
  start: "top center",  // [trigger] [scroller] positions
  end: "20px 80%", // [trigger] [scroller] positions
  // or relative amount: "+=500"
  scrub: true, // or time (in seconds) to catch up
  pin: true, // or selector or element to pin
  markers: true, // only during development!
  toggleActions: "play pause resume reset",
  // other actions: complete reverse none
  toggleClass: "active",
  fastScrollEnd: true, // or velocity number
  containerAnimation: tween, // linear animation
  id: "my-id",
  anticipatePin: 1, // may help avoid jump
  snap: {
    snapTo: 1 / 10, // progress increment
    // or "labels" or function or Array
    duration: 0.5,
    directional: true,
    ease: "power3",
    onComplete: callback,
    // other callbacks: onStart, onInterrupt
  },
  pinReparent: true, // moves to documentElement during pin
  pinSpacing: false,
  pinType: "transform", // or "fixed"
  pinnedContainer: ".selector",
  preventOverlaps: true, // or arbitrary string
  once: true,
  endTrigger: ".selector", // selector or element
  horizontal: true, // switches mode
  invalidateOnRefresh: true, // clears start values on refresh
  refreshPriority: 1, // influence refresh order
  onEnter: callback
  // other callbacks:
  // onLeave, onEnterBack, onLeaveBack, onUpdate,
  // onToggle, onRefresh, onRefreshInit, onScrubComplete
}
Timelines
Create a Timeline
let tl = gsap.timeline({
  delay: 0.5,
  paused: true, // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  defaults: {
    // children inherit these defaults
    duration: 1,
    ease: 'none'
  },
  smoothChildTiming: true,
  autoRemoveChildren: true,
  onComplete: () => {
    console.log("finished")
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});
Sequence Multiple Tweens
tl.to('.selector', { duration: 1, x: 50, y: 0 })
  .to('#id', { autoAlpha: 0 })
  .to(elem, { duration: 1, backgroundColor: 'red' })
  .to([elem, elem2], { duration: 3, x: 100 });
Position Parameter (Controls Placement)
tl.to(target, { toVars }, positionParameter);

// Examples:
0.7; // exactly 0.7 seconds into the timeline (absolute)
('-=0.7'); // overlap with previous by 0.7 sec
('myLabel'); // insert at "myLabel" position
('myLabel+=0.2'); // 0.2 seconds after "myLabel"
('<'); // align with start of most recently-added child
('<0.2'); // 0.2 seconds after ^^
('-=50%'); // overlap half of inserting animation's duration
('<25%'); // 25% into the previous animation (from its start)
Plugins
Register GSAP Plugins (Once) Before Using Them
gsap.registerPlugin(Draggable, TextPlugin);
Available Plugins
Draggable
DrawSVGPlugin
EaselPlugin
Flip
GSDevTools
InertiaPlugin
MorphSVGPlugin
MotionPathPlugin
MotionPathHelper
Observer
Physics2DPlugin
PhysicsPropsPlugin
PixiPlugin
ScrambleTextPlugin
ScrollToPlugin
ScrollTrigger
ScrollSmoother
SplitText
TextPlugin
Installation
// Import and register GSAP
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);
Utility Methods
Accessible through gsap.utils.foo()

checkPrefix() - get relevant browser prefix for property
clamp() - clamp value to range
distribute() - distribute value among and array
getUnit() - get unit of string
interpolate() - interpolate between values
mapRange() - map one range to another
normalize() - map a range to the 0-1 range
pipe() - sequence function calls
random() - generates a random value
selector() - get a scoped selector function
shuffle() - shuffles an array in-place
snap() - snap a value to either increment or array
splitColor() - splits color into RGB array
toArray() - convert array-like thing to array
unitize() - adds specified unit to function results
wrap() - place number in range, wrapping to start
wrapYoyo() - place number in range, wrapping in reverse
Control Methods
Retain animation reference to control later:

let anim = gsap.to(...); // or gsap.timeline(...);
Most methods can be used as getters or setters:

anim.play() // plays forward
  .pause()
  .resume() // respects direction
  .reverse()
  .restart()
  .timeScale(2) // 2 = double speed, 0.5 = half speed
  .seek(1.5) // jump to a time (in seconds) or label
  .progress(0.5) // jump to halfway
  .totalProgress(0.8) // includes repeats
  // when used as setter, returns animation (chaining)
Other useful methods (tween and timeline):

.kill() - immediately destroy
.isActive() - true if currently animating
.then() - Promise
.invalidate() - clear recorded start/end values
.eventCallback() - get/set an event callback
Timeline-specific methods:

.add(thing, position) - add label, tween, timeline, or callback
.call(func, params, position) - calls function at given point
.getChildren() - get an Array of the timeline's children
.clear() - empties the timeline
.tweenTo(timeOrLabel, {vars}) - animate playhead to a position linearly
.tweenFromTo(from, to, {vars}) - with both start and end positions
Nesting Timelines
function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}

function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}

let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5") // overlap slightly
Eases
See greensock.com/ease-visualizer

ease: 'none'; // no ease (same as "linear")
Basic Core Eases
'power1', 'power2', 'power3', 'power4', 'circ', 'expo', 'sine'
Each has .in, .out, and .inOut extensions (e.g., "power1.inOut")
Expressive Core Eases
'elastic', 'back', 'bounce', 'steps(n)'
In EasePack Plugin (Not Core)
'rough', 'slow', 'expoScale(1, 2)'
Expressive Plugin Eases
CustomEase, CustomWiggle, CustomBounce
Misc
Get the Current Value of a Property
gsap.getProperty("#id", "x");       // 20
gsap.getProperty("#id", "x", "px"); // "20px"
Set GSAP's Global Tween Defaults
gsap.defaults({ease: "power2.in", duration: 1});
Configure GSAP's Non-Tween-Related Settings
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});
Register an Effect for Reuse
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0
    });
  },
  defaults: {duration: 2},
  extendTimeline: true
});
Now we can use it like this:

gsap.effects.fade(".box");
// Or directly on timelines
tl.fade(".box", {duration: 3})
Add Listener with gsap.ticker
gsap.ticker.add(myFunction);
function myFunction(time, deltaTime, frame) {
  // Executes on every tick after
  // the core engine updates
}
// To remove the listener later...
gsap.ticker.remove(myFunction);
Faster Way to Repeatedly Set Property than .set()
let setX = gsap.quickSetter("#id", "x", "px");
document.addEventListener("mousemove", e => setX(e.clientX) );
quickTo - For Animation!
let xTo = gsap.quickTo("#id", "x", { duration: 0.4, ease: "power3" })
document.addEventListener("mousemove", e => xTo(e.pageX) );
React
useGSAP() Hook 💚
GSAP itself is completely framework-agnostic and can be used in any JS framework without any special wrappers or dependencies. However, this hook solves a few React-specific friction points for you so that you can just focus on the fun stuff. 🤘🏻

useGSAP() is a drop-in replacement for useEffect() or useLayoutEffect() that automatically handles cleanup using gsap.context(). Cleanup is important in React and Context makes it simple.

Import the useGSAP() hook from @gsap/react and you're good to go! All GSAP animations, ScrollTriggers, Draggables, and SplitText instances created when the useGSAP() hook executes will be reverted automatically when the component unmounts and the hook is torn down.

npm install @gsap/react
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const container = useRef();

useGSAP(() => {
  // gsap code here...
  gsap.to('.box', { x: 360 }); // <-- automatically reverted
},{ scope: container }); // <-- scope is for selector text (optional)
