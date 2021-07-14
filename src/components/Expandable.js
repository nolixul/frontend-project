import { useState } from 'react';

const Expandable = ({ children }) => {
  console.log(children, 'children of expandable');
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <div>
      <button onclick={toggleIsOpen}>{isOpen ? 'close' : 'open'}</button>
      {isOpen ? children : null}
    </div>
  );
};

export default Expandable;
