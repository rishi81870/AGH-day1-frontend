

import React from 'react';
import Notification from './components/notifications/notification';

const App = () => {
  return (
    <div>
      {/* Render the Notification component */}
      <Notification />

      {/* Other components or main content */}
      <main>
        <h1>Welcome to the Dashboard</h1>
        <p>Here is where your main content goes.</p>
      </main>
    </div>
  );
};

export default App;

