import React from 'react';

const withHeader = WrappedComponent => {
  return props => {
    return <WrappedComponent {...props} />
  }
};

export default withHeader;