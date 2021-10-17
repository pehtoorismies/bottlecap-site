import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Text, Box, Flex } from 'rebass/styled-components'

const PropTypes = {
  header: string,
  description: string,
}

const DefaultProps = {
  header: 'Main',
  description: 'Paragraph',
}

const Wrapper = styled(Box)`
  color: #000000;
`

const Header = styled(Text)`
  font-family: Eczar;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.51px;
`

const Description = styled(Text)`
  font-family: 'Roboto Mono';
  font-size: 16px;
  line-height: 1.63;
  color: #000000;
`

const TextContent = (props) => {
  const { header, description } = props

  return (
    <Wrapper>
      <Header fontSize={[56, 56, 88]} width={[300, 418, 775]} mb={4}>
        {header}
      </Header>
      <Flex justifyContent="flex-end">
        <Description fontSize={[16, 16, 20]} width={[300, 349, 549]}>
          {description}
        </Description>
      </Flex>
    </Wrapper>
  )
}

TextContent.propTypes = PropTypes
TextContent.defaultProps = DefaultProps

export default TextContent
