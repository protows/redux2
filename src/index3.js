import React from 'react';
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <h3>Здесь может быть любой текст</h3>,
//   document.getElementById('fieldToShow')
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('fieldToShow')
)
