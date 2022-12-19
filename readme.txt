1. Install Node.js
(Allows us to run JS in our terminal & manage our JS packages)
-- Verify install in your command prompt with "node -v" & "npm -v"

2. NPM (Node Package Manager) Commands:
-- npm install
(Install dependencies to package.json)
-- npm uninstall package --save
(Remove dependency from package.json)
-- npm update --save
(Upgrade a package to its latest version)
-- Install a package globally
(npm install package -g)

3. Extension Installs
-- Auto Close Tag (8.7M)
-- Auto Rename Tag (11.6M)
-- Babel Javascript (2M)
-- React Snippets (6.9M)
-- ES Lint (23.9M)
-- html to JSX (145K)
-- Markdown All in One (5.4M)
-- Path Intellisense (8.6M)
-- vscode-styled-components (482K)

4. Create React App with NPX
-- React docs (Getting Started->Create a New React App)
(npx create-react-app my-app)
-- NPM (Node Package Manager) vs NPX (Node Package Execute)
-- NPM downloads package
-- NPX downloads package, executes, then deletes the package

5. Scripts (package.json)
-- package.json: file that shows what dependencies are installed
(Similar to our flask requirements.txt file)
-- npm start
-- src folder is the app itself
-- The index.js file is the entry point for every React Application

6. Public folder
-- favicon.ico: Icon in title tab
-- index.html: How your react code is being displayed to the page (Only one you need)
-- logos & manifest.json: used if your project gets downloaded for offline purposes
-- robots.txt: used mainly to avoid overloading your site with requests

7. SRC folder
-- App.js: Contains our entire initial react application (Component)
-- Component: Self contained representation of HTML,CSS, JS
-- React is just functions that return HTML

8. Hooks vs Classes
-- Hooks: Very specific to React (Modern)
-- Classes: Versatile across programming languages
NOTE: Many programmers are shying away from hooks because of the added complexity to React.
-- We'll start with Classes then learn how to convert to Hooks

9. Class Components
-- Component Rendering: Render JSX inside of the return statement in your component.
-- Class Components are easier to understand when renders and re-renders occur.
-- Convert App.js from a functional to a Class Component.
- (Import { Component } from react)
- Change function App -> class App extends Component
- Place Return inside Render function

10. Component State
-- Changes our static webpage to be dynamic
-- Adjust initial code to have our name with a button.
-- Create Contructor method to hold our local state (this.state = {})
-- Reference our state value in our JSX
NOTE: When our state changes, React re-renders our JSX.

11. setState
-- Bind onClick(() => {}) event handler onto button
-- use setState() to update the inital state to a different object
-- setState Shallow Merges with the initial state and looks for any keys that already exist.

12. States and Shallow Merge
-- Add another key,value pair (company:'coding temple') and render to our UI.
-- Make value of name key an object (first_name & last_name)
NOTE: Make sure that when you setState of a value that it matches the initial states value data type

13. setState and Secondary Callback
-- Lets utilize both arguments inside setState(func, callback) to create async behavior.
NOTE: This is optional but very helpful bc it behaves in a async way.

14. Map Arrays to Elements
-- Delete everything in our div.
-- Create new state names
-- Convert each Object to one Array
-- Use the map array method to get rid of tedious code
NOTE: Anytime you use map() inside of render OR you have a list of the same JSX Elements one after another,
they need a key attribute.

15. Keys for Mapping
-- Wrap each h1 into each own div, add key property and unique string value
-- add id key with unique value to each object
NOTE: key property is unique to React, it will NOT show up in the DOM.