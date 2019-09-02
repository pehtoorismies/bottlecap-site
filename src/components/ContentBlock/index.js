import React from 'react';
import { string, node, arrayOf, number } from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

const PropTypes = {
  cssBgImage: string,
  children: node,
  topPadding: arrayOf(number),
  bottomPadding: arrayOf(number),
};
const DefaultProps = {
  cssBgImage: '',
  children: null,
  topPadding: [],
  bottomPadding: [],
};

const Wrapper = styled(Box)`
  background-image: ${props => props.bgImage};
  position: relative;
  background-position: left top,  left top; 
  background-repeat: no-repeat, no-repeat;
  background-size: auto, auto;

`;
const ContentBlock = props => {
  const { cssBgImage, topPadding, bottomPadding, children } = props;

  return (
    <Wrapper bgImage={cssBgImage} pt={topPadding} pb={bottomPadding}>
      {children}
    </Wrapper>
  );
};

ContentBlock.propTypes = PropTypes;
ContentBlock.defaultProps = DefaultProps;

export default ContentBlock;
