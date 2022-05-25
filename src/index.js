import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);

