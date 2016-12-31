import React, { Component } from 'react';
import BlogTitle from './BlogTitle.js';
import BlogEntries from './BlogEntries.js';

import entries from './data/Blog';

class App extends Component {
  render() {
    return (
      <div className = "main">
        <BlogTitle />
        <BlogEntries entries = {entries} />
      </div>
    );
  }
}

export default App;
