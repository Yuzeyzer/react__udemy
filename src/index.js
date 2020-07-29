import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const input = (arr) => {
//   return arr.reduce((acc, rec) => {
//     let length = rec.length;
//     console.log(rec);
//     return {...acc, [rec]: length};
//   }, {});
// };
// input(['aaaaa', 'bbb', 'c']);
// console.log(input(['aaaaa', 'bbb', 'c']));
