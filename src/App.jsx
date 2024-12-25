import React from 'react';
import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';
import '../index.css';
function App() {
  return (
    <div id="app">
      {/* default */}
      <section>
        <h2>Filled Button (Default)</h2>
        <Button>Default</Button>
        <Button mode="filled">Filled (Default)</Button>
      </section>

      {/* Button with Outline */}
      <section>
        <h2>Button with Outline</h2>
        <Button mode="outline">Outline</Button>
      </section>

      {/* Text-only Button */}
      <section>
        <h2>Text-only Button</h2>
        <Button mode="text">Text</Button>
      </section>

      {/* Button with Icon */}
      <section>
        <h2>Button with Icon</h2>
        <Button Icon={HomeIcon}>Home</Button>
        <Button Icon={PlusIcon} mode="text">
          Add
        </Button>
      </section>

      {/* Buttons Should Support Any Props */}
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <Button mode="filled" disabled>
          Disabled
        </Button>
        <Button className={'hello'} onClick={() => console.log('Clicked!')}>
          Click me
        </Button>
      </section>
    </div>
  );
}

export default App;
