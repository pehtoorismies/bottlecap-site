import React from 'react';
// import { string } from 'prop-types';
import styled from 'styled-components';
import { Button, Box, Text, Flex } from 'rebass/styled-components';

const Heading = styled(Text)`
  font-family: Eczar;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.44;
  letter-spacing: -0.17px;
  color: #000000;
`;

//
// margin-bottom: 0.5em;

const InputField = styled.input`
  font-family: 'Roboto Mono';
  font-size: 14px;
  line-height: 1.71;
  border: solid 2px black;
  height: 56px;
  width: 100%;
  padding: 4px 17px;
  box-sizing: border-box;
  background: none;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-family: 'Roboto Mono';
  font-size: 14px;
  line-height: 1.71;
  border: solid 2px black;
  height: 140px;
  width: 100%;
  max-width: 100%;
  padding: 4px 17px;
  box-sizing: border-box;
  background: none;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background: black;
  height: 62px;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  
`;

const PropTypes = {};
const DefaultProps = {};

const MARGIN = 2;

const ContactForm = () => {
  

  return (
    <Box width="100%" >
      <Flex justifyContent="flex-end">
        <Heading>Contact</Heading>
      </Flex>
      <Box as="form" onSubmit={e => e.preventDefault()} >
        <Box my={MARGIN}>
          <InputField placeholder="Name*" id="name" name="name" />
        </Box>
        <Box my={MARGIN}>
          <InputField placeholder="Email address*" id="email" name="email" />
        </Box>
        <Box my={MARGIN}>
          <InputField placeholder="Company*" id="company" name="company" />
        </Box>
        <Box my={MARGIN}>
          <TextArea placeholder="Message*" id="message" name="message" />
        </Box>
        <Box width="100%" bg="pink">
          <SubmitButton borderRadius={0}> send </SubmitButton>
        </Box>
      </Box>
    </Box>
  );
};

ContactForm.propTypes = PropTypes;
ContactForm.defaultProps = DefaultProps;

export default ContactForm;
