import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import posed from 'react-pose';
import { Consumer } from '../../../store/createContext';
const AnimatedContainer = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
});

const Item = ({ fields, frontmatter }) => {
  const { title, image, bgColor, textColor, workType, copy } = frontmatter;
  const { slug } = fields;

  return (
    <Consumer>
      {({ updateIntro }) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          onMouseOver={() =>
            updateIntro(title, bgColor, textColor, workType, copy)
          }
          onFocus={() => updateIntro(title, bgColor, textColor, workType, copy)}
          onMouseLeave={() =>
            updateIntro(
              'An internet based designer',
              '#ffffff',
              '#313E50',
              'Kosti Marko',
              'You can find me on the bus, people watching.'
            )
          }
        >
          <Link
            to={slug}
            onClick={() =>
              updateIntro(
                'An internet based designer',
                '#ffffff',
                '#313E50',
                'Kosti Marko',
                'You can find me on the bus, people watching.'
              )
            }
          >
            <figure>
              <Img fluid={image.childImageSharp.fluid} alt={title} />
            </figure>
          </Link>
        </motion.div>
      )}
    </Consumer>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object,
};

export default Item;
