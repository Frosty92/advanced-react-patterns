// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext


const ToggleContext = React.createContext();

function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return <ToggleContext.Provider value={{toggle, on}}>{children}</ToggleContext.Provider>
}

const useToggleContext = () => {
  const context = React.useContext(ToggleContext);
  if (context === undefined) throw new Error("useToggleContext must be used inside of Toggle");
  return context;
}


function ToggleOn({children}) {
  const {on} = useToggleContext();
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggleContext();
  return on ? null : children
}

function ToggleButton({props}) {
  const {on, toggle} = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
