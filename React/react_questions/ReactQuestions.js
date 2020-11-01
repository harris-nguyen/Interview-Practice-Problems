REACT

Name Lifecycle Methods

PART 1
Lifecycle methods are changing
-constructor - set initial state. This.state is used
-Static getDerivedStateFromProps - static bc you can’t use this.state (rarely used)
-Render
-ComponentDidMount - runs after being mounted

PART 2
Re-render phase
-Static getDerivedStateFromProps
-shouldComponentDidUpdate - sees if a component is needed to re-render or not
-Render
-ComponentDidUpdate - confirms it has updated and is done
-componentWillUnMount - lifecycle dies
