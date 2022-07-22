# REACT PROPS
everything we pass from parent to child component via HTML attribute can be
accessed in child.

Child receives object param (props) which includes all passed
attributes as properties.

Essentially passing information down the component tree.

# REACT STATE
Used to alter information over time.

## REACT HOOK
useState is react hook function.

# CALLBACK HANDLERS
We create function in root app (or up in hierarchy) - this will be callback function.
We then embeed this function as prop in child component.
Because of that, we can pass props up the chain of components.

# RERENDERING
React is rerendering only changed component (and all of its child components)

# INITIALIZATION
At first all components are instantiated from top to bottom of component hierarchy.

All hooks, with initial values, etc...

From there UI awaits side-effects (user interactions, api calls, etc...).

Once  state is changed, component when it occured (and all components below) will render again.

# SIDE EFFECTS
Don't change output directly.

Used to interact with APIs outside component, measuring HTML element's width/height, setting timers, etc...

# REACT FRAGMENTS
Instead of using enclosing divs in JSX

If we don't want to have them we can use
<> </> - which is react fragments.

or <React.Fragment> </React.Fragment>

# IMPERATIVE REACT
With use of ref attribute.

We create React.useRef(); reference, and put it as ref attribute on element.

Then we use React.useEffect hook to do something when this ref element is used.

That way, every time variable changes side effect is started which changes value of ref element.

# DO NOT IMPLEMENT COMPLEX LOGIC IN JSX

# REACT ASYNC DATA