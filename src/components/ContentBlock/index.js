import React from 'react';
import { string, node, arrayOf, number } from 'prop-types';
import { Box } from 'rebass/styled-components';

const PropTypes = {
  backgroundImage: arrayOf(string).isRequired,
  backgroundSize: arrayOf(string).isRequired,
  backgroundPosition: arrayOf(string).isRequired,
  children: node.isRequired,
  topPadding: arrayOf(number).isRequired,
  bottomPadding: arrayOf(number).isRequired,
};
const DefaultProps = {
  
};

const ContentBlock = props => {
  const {
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    topPadding,
    bottomPadding,
    children,
  } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        pt: topPadding,
        pb: bottomPadding,
        backgroundImage,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </Box>
  );
};

ContentBlock.propTypes = PropTypes;
ContentBlock.defaultProps = DefaultProps;

export default ContentBlock;
