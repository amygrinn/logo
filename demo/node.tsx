import React from 'react';
import { createRoot } from 'react-dom/client';
import Logo from '../lib';
import '../lib/tay-logo.min.css';

const root = createRoot(document.getElementById('app'));
root.render(<Logo header="LOGO!" />);
