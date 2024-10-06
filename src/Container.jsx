import React from 'react';

const Container = ({ children, mobile }) => {
  return (
    <div
      className={`flex w-full min-h-screen h-auto ${mobile ? 'flex-col' : ''}`}
    >
      {children}
    </div>
  );
};

export default Container;
