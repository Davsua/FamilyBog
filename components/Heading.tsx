import React from 'react';

interface Props {
  children: string;
}

const Heading: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Heading;
