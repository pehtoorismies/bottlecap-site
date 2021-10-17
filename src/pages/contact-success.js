import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass/styled-components'
import { Link } from 'gatsby'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import logo from '../images/bottlecap-logo.svg'
import TextContent from '../components/TextContent'

const LogoBoxTopLeft = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 24px;
`

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledLink = styled((props) => <Link {...props} />)`
  color: rgb(184, 97, 152);
  font-size: 18px;
  padding: 30px;
  text-decoration: none;
`

const Logo = styled.img``

const ContactSuccessPage = () => (
  <Layout>
    <LogoBoxTopLeft mx={[20, 20, 50]}>
      <Logo src={logo} width="95px" height="56px" />
    </LogoBoxTopLeft>
    <SEO title="Contact succesfull" />
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: 'linear-gradient(to bottom, #f7e1cb, #8eb390)',
      }}
      height="100vh"
      width="100vw"
    >
      <TextContent
        header="Thank you!"
        description="You will be contacted shortly"
      />
      <StyledLink to="/">Take me back &raquo;</StyledLink>
    </Flex>
  </Layout>
)

export default ContactSuccessPage
