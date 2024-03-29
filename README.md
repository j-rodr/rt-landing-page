# 1. Landing Page
For my first portfolio project I decided to design and create a landing page for Rotten Tomatoes. I intended to practice my overall CSS skills and knowledge about responsive design and transitions/animations. 

[Go to project →](https://j-rodr.github.io/rt-landing-page/) 

# CSS Style Guide

**File structure (least to most specific)**

1. Settings: variables  
2. Base: styles for bare HTML elements  
3. Objects [prefixed with o-]: reusable content-agnostic styles mostly used for layout  
4. Components [prefixed with -c]: UI components  
5. Utilities [prefixed with -u]: utility classes
6. State: media queries

**Guidelines**
   
I'm using a hybrid approach that is primarily utility-first. Utility classes are used whenever possible and component classes are only created for modules that look the same and appear many times across the page such as buttons, sections or inputs.
   
- Use only hyphens as delimiters.
- Declarations are organized according to their category in the following order: 

1. Layout  
2. Font  
3. Color (including background)  
4. Transitions and animations   
5. Miscellaneous  
                                                                                 
- IDs and !important styles should be avoided.
- JS hooks are prefixed with js- and must not be dependant on any style class.
- The naming methodology to be used is BEM.
- Minimal variants of components must be styled with utility classes when possible.
