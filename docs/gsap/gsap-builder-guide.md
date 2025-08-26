# GSAP Builder Tool Documentation

## Overview

The GSAP Builder is a comprehensive, intuitive tool for creating, testing, and exporting GSAP animations. It provides a visual interface for working with GSAP's powerful animation capabilities without requiring deep knowledge of the GSAP API.

## Features

### 🎯 Core Features

- **Visual Animation Builder**: Create animations with sliders, inputs, and dropdowns
- **Real-time Preview**: See your animations instantly as you adjust parameters
- **Code Generation**: Automatically generates clean, production-ready GSAP code
- **Content Management**: Add text, boxes, and images to animate
- **Preset Library**: Quick-start with common animation patterns
- **ScrollTrigger Integration**: Create scroll-based animations with visual markers
- **Export Options**: Download JavaScript files or save configuration

### 🚀 Animation Types Supported

1. **gsap.to()** - Animate TO specific values
2. **gsap.from()** - Animate FROM specific values  
3. **gsap.fromTo()** - Animate from one state to another
4. **Timeline** - Chain multiple animations together
5. **ScrollTrigger** - Scroll-based animations with full configuration

### 🎨 Properties Available

#### Transform Properties
- **Position**: X and Y coordinates
- **Scale**: Uniform scaling 
- **Rotation**: Rotation in degrees
- **Opacity**: Transparency control

#### Styling Properties
- **Background Color**: Color animations
- **Border Radius**: Shape morphing
- **Custom Properties**: Add any CSS property

#### Timing Controls
- **Duration**: Animation length in seconds
- **Delay**: Start delay in seconds
- **Ease**: Comprehensive easing library
- **Repeat**: Loop count (-1 for infinite)
- **Yoyo**: Reverse animation on repeat
- **Stagger**: Delay between multiple elements

## Usage Guide

### Getting Started

1. **Add Content Items**
   - Choose content type (Text, Box, Image)
   - Enter your content
   - Click "Add" to create animated elements

2. **Configure Animation**
   - Select animation type (to/from/fromTo/timeline)
   - Set target selector (CSS selector for elements)
   - Adjust transform and styling properties
   - Fine-tune timing and easing

3. **Preview & Test**
   - Use Play/Pause/Restart controls
   - See real-time updates as you adjust settings
   - Test different configurations instantly

4. **Export Your Work**
   - Copy generated code to clipboard
   - Download as JavaScript file
   - Save configuration for later use

### Advanced Features

#### ScrollTrigger Configuration
```javascript
scrollTrigger: {
  trigger: ".demo-text",      // Element that triggers animation
  start: "top 80%",           // When animation starts
  end: "bottom 20%",          // When animation ends
  scrub: true,                // Tie animation to scroll position
  pin: true,                  // Pin element during scroll
  toggleActions: "play none none none"  // Control play states
}
```

#### Timeline Building
- Create complex sequences
- Chain multiple animations
- Control timing and synchronization
- Add ScrollTrigger to entire timeline

### Preset Animations

Quick-start with these built-in animations:

- **fadeIn**: Simple opacity fade
- **slideUp/Down/Left/Right**: Directional slides with opacity
- **scaleIn**: Scale up with back ease
- **rotateIn**: Rotation with opacity
- **bounce**: Bounce effect on Y-axis
- **elastic**: Elastic scale animation
- **wobble**: Elastic rotation effect

## Code Generation

The tool generates clean, production-ready GSAP code:

```javascript
// Example output
gsap.to('.demo-text', {
  x: 200,
  scale: 1.2,
  rotation: 15,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".demo-text",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none"
  }
});
```

## Best Practices

### Performance Tips
1. **Use CSS transforms** (x, y, scale, rotation) for best performance
2. **Batch similar animations** using stagger
3. **Use ScrollTrigger markers** in development only
4. **Kill old animations** before creating new ones

### Selector Tips
1. **Use classes** (.my-element) rather than IDs
2. **Be specific** to avoid unintended targets
3. **Test selectors** in browser dev tools first
4. **Use data attributes** for complex targeting

### Animation Design
1. **Start simple** with basic transforms
2. **Use appropriate easing** for natural motion
3. **Consider performance** on mobile devices
4. **Test different durations** for best feel

## Integration Guide

### Adding to Your Project

1. **Install GSAP**
```bash
npm install gsap @gsap/react
```

2. **Register Plugins**
```javascript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
```

3. **Copy Generated Code**
- Use the code exactly as generated
- Modify selectors to match your elements
- Test in your environment

### React Integration

```javascript
import { useGSAP } from '@gsap/react'

function MyComponent() {
  const containerRef = useRef()

  useGSAP(() => {
    // Paste your generated code here
    gsap.to('.my-element', {
      x: 100,
      duration: 1,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <div className="my-element">Animated content</div>
    </div>
  )
}
```

## Troubleshooting

### Common Issues

1. **Animation Not Playing**
   - Check selector targets correct elements
   - Ensure elements exist in DOM
   - Verify no CSS conflicts

2. **ScrollTrigger Not Working**
   - Check trigger element exists
   - Verify start/end positions
   - Ensure sufficient scroll distance

3. **Performance Issues**
   - Avoid animating layout properties
   - Use transform properties instead
   - Reduce complex selectors

### Debugging Tips

1. **Use DevTools** to inspect elements
2. **Check console** for GSAP warnings
3. **Enable ScrollTrigger markers** in development
4. **Test on different devices** for performance

## Keyboard Shortcuts

- **Space**: Play/Pause animation
- **R**: Restart animation
- **C**: Copy code to clipboard
- **S**: Save configuration (with Ctrl/Cmd)

## Support

For GSAP-specific questions, refer to:
- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Forums](https://greensock.com/forums/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

For tool-specific issues, check the generated code and ensure proper GSAP installation in your project.
