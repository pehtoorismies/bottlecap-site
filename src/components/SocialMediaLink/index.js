import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Flex, Text } from 'rebass/styled-components'
import arrow from '../../images/arrow.svg'

const Name = styled(Text)`
  font-family: Eczar;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.44;
  letter-spacing: -0.17px;
  color: #000000;
`

const PropTypes = {
  name: string,
  link: string,
}
const DefaultProps = {
  name: '',
  link: '',
}

const ArrowImage = styled.img`
  display: block;
  margin-right: 30px;
`

const Anchor = styled.a`
  text-decoration: none;
`

const SocialMediaLink = (props) => {
  const { name, link } = props

  return (
    <Anchor href={link}>
      <Flex
        width={[250, 250, 300]}
        alignItems="center"
        justifyContent="space-between"
      >
        <ArrowImage src={arrow} height="9px" width="65px" />
        <Flex justifyContent="flex-end">
          <Name fontSize={[26, 26, 32]}>{name}</Name>
        </Flex>
      </Flex>
    </Anchor>
  )
}

SocialMediaLink.propTypes = PropTypes
SocialMediaLink.defaultProps = DefaultProps

export default SocialMediaLink
