import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Engine from './engine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Engine />, div);
});
