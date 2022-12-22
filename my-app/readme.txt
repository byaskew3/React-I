1. Class Component Lifecycle Methods Breakdown (Diagram)

2. Functional Component Intro
-- Create App Functional Component
NOTE: Functional Components do not have a constructor, any lifecycle methods, or a render.
Its a function that only returns your UI (JSX).
-- Copy and paste our JSX from our Class Component to our Functional Component.
-- Thats it, lets verify the component

3. Hooks: useState
-- Copy and paste our onSearchChange Method from our class to our function
-- this.setState is unique to our class
-- Import { useState } hook
-- Use Array Destructuring to useState()
-- Delete this.setState & implement setSearchString(search_field_string)
-- Uncomment our SearchBox component
-- console.log the useState flow

4. Functional Component Re-rendering
-- console.log('render') at the top of our functional component
-- When props(Functional Arguments) or the state value changes, a re-render occurs.
NOTE: If the state value is the same as the setState value, a re-render does NOT occur.

5. Infinite Re-rendering
-- Lets migrate the rest of our unused code. (PokeCard Component, Filtered Pokemon, Fetch Request)
-- Initialize new state for our pokemon array
-- Adjust our fetch request (incoming infinite loop)
NOTE: Infinite loop occurs bc when fetching to a third party API, it is storing our response
to a new location in memory, which then updates our setPokemon state, which triggers the re-render of our entire function.

6. Hooks: useEffect
-- Import useEffect hook (useEffect(callback, array))
NOTE: useEffect runs after our functional component mounts.
it only runs again if the value of our array dependencies change
-- Add FilteredPokemon as a useState and useEffect to update the state

7. Update remaining class components to functional components
-- Convert PokeCard to functional. (Use rafce snippet to build React Arrow Functional Component Export)
-- pass props parameter
NOTE: You can destructure inside of the parameter itself since the prop will always be the first
argument.
-- Convert SearchBox to functional

** APP Complete in a Functional Way **