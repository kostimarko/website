import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items }) => {
  return (
    <Container>
      {items.map((item, i) => {
        return <Item {...item.node} key={i} />;
      })}
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
