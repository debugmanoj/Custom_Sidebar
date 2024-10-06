import React from 'react';

const Container = ({ children, mobile }) => {
  return (
    <div
      className={`flex w-full min-h-screen max-h-[100vh] h-auto overflow-y-auto ${mobile ? 'flex-col' : ''} overflow-x-hidden`}
    >
      {children}
    </div>
  );
};

export default Container;
