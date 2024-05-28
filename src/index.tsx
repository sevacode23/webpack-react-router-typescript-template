import { createRoot } from 'react-dom/client';

import { App } from '@/screens/app';

import '@/theme/global-styles/global.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

createRoot(container).render(<App />);
