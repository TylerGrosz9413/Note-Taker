import React from 'react';

function Footer(props) {
  return (
    <footer>
      <p>Number of notes: {props.count}</p>
    </footer>
  );
}

export default Footer;