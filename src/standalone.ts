import React from 'react';
import { createRoot } from 'react-dom/client';
import Logo from './Logo';

export default {
  mount: (el: Element | DocumentFragment) => {
    const root = createRoot(el);
    root.render(React.createElement(Logo));
  },
};
