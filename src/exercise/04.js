// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  const togglerProps = {'aria-pressed': on, onClick: toggle}

  const getProps = (...args) => {
    console.log("args are:", args);
    if (args.length === 0) return togglerProps;
    else {
      const filteredProps = {};
      for (let key in togglerProps) {
        if (args.includes(key)) {
          filteredProps[key] = togglerProps[key];
        }
      }
      return filteredProps;
    }
  }

  return {on,getProps}
}

function App() {
  const {on, getProps} = useToggle()

  const allProps = getProps();
  const customProps = getProps('on');
  return (
    <div>
      <Switch on={on} {...allProps} />
      <hr />
      <button aria-label="custom-button" onClick={() => console.info('test ')} {...customProps}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
