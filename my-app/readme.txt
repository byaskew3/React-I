1. Lifecycle Method: componentDidMount
-- delete hard-coded state data (pokemon: [])
-- implement componentDidMount(){}
NOTE: Mounting is the first time React renders a component to the page,
It only happens once throughout a components life. If you need to make an API request
so your component can have the appropriate data it needs in order to render the correct things,
put your request in componentDidMount.

-- make async/await api request to pokemon api
-- setState({pokemon: data['results']})

2. Renders & Re-renders
--------- Rendering Order of a Component Lifecycle -------------
--(constructor())
  (initialize the state)

--(render())
  (render your initial component UI)

--(componentDidMount())
  (make API requests)

--(Re-render occurs when setState updates your initial state)

NOTE: This is one of the most important concepts to understand with React.
-- console.log() example of Lifecycle

3. Understanding Components
-- Create Components Folder Structure (this is where our components will live)
-- --> PokeCard Folder
-- --> SearchBox Folder
(When using class based components, name your files in a class named convention)

3. Create Search Box Component
-- quickly create class template using 'rcc' snippet
-- import SearchBox Component into App.js
-- Render SearchBox Component
NOTE: Your initial return statement needs a parent div or fragment

4. Search Box Functionality
-- Create Input tag on SearchBox
-- Create constructor, on_search_change method
-- Console log onChange event.target.value

5. Component Props (Shorthand for Propertys)
-- from App.js pass this.state.pokemon as a prop to the SearchBox Component
-- inside render, log the prop on your SearchBox Component
NOTE: props will always be objects
-- After passing prop, destructure objects (this.props, this.state, this)

6. Filtering & Mapping to page
-- Use filter() to filter out the pokemon from our pokemon prop
(similar to how we map)
-- map over filtered_pokemon and display to page

7. Rendering and Re-Rendering
-- Why is our PokeCard Component Rendering/Logging Twice?
-- Think about the Component Lifecycle...