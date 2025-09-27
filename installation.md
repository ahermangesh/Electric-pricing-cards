Installation
Using components is very straightforward, anyone can do it.

Pick The Method
You can keep it simple and copy code directly from the documentation, or you can use CLI commands to install components into your project.

Click the cards below to change your preferred method.

Manual
CLI
Steps
Follow these steps to manually install components:

1. Pick a component
Preview components and find something you like, then head to the Code tab.

2. Install dependencies
Components may use external libraries, don't forget to install them by selecting Manual, copying the command, and running it in your terminal.


npm install gsap
3. Copy the code
The Code tab also contains all the code you need to copy - you can use the controls below to switch between technologies on the Code tab.


4. Use the component
A basic usage example is provided for every component, and if you want to go into details, you can check all the available props on the Preview tab.


import SplitText from "./SplitText";

<SplitText
  text="Hello, you!"
  delay={100}
  duration={0.6}
/>
That's all!
From here on, it's all about how you integrate the component into your project. The code is yours to play around with - modify styling, functionalities, anything goes!




cli:

Installation
Using components is very straightforward, anyone can do it.

Pick The Method
You can keep it simple and copy code directly from the documentation, or you can use CLI commands to install components into your project.

Click the cards below to change your preferred method.

Manual
CLI
Steps
Use a one-time command to pull any component directly into your project.

React Bits supports two CLI installation methods: shadcn and jsrepo. Pick whichever you prefer – they both fetch the same component source.

Installation
Below are example commands for the SplitText component. Replace placeholders to fit your stack.

shadcn

npx shadcn@latest add https://reactbits.dev/r/SplitText-<LANGUAGE>-<STYLE>
<LANGUAGE> + <STYLE> combinations:

JS-CSS - JavaScript + Plain CSS
JS-TW - JavaScript + Tailwind
TS-CSS - TypeScript + Plain CSS
TS-TW - TypeScript + Tailwind
jsrepo

npx jsrepo add https://reactbits.dev/<VARIANT>/TextAnimations/SplitText
<VARIANT> options:

default - JavaScript + Plain CSS
tailwind - JavaScript + Tailwind
ts/default - TypeScript + Plain CSS
ts/tailwind - TypeScript + Tailwind
Tip: You can run these with other package managers (pnpm, yarn, bun) - just swap the prefix (e.g. pnpm dlx or yarn instead of npx).

That's all!
From here on, it's all about how you integrate the component into your project. The code is yours to play around with - modify styling, functionalities, anything goes!