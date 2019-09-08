import React from 'react';

const FirebaseContext = React.createContext(null);

// with Firebase is the HOC that returns the consumer
// of whatever we pass to the provider.

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;