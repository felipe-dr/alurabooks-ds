import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';

import { AbButton } from '../src';

const App = () => {
  return (
    <div>
      <AbButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
