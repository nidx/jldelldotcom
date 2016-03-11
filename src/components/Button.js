import React, {PropTypes} from 'react';

const Button = ({children, onClick}) => (
    <button onClick={onClick}>
      {children}
    </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
