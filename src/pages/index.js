import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import Layout from '../components/Layout';
import TextContent from '../components/TextContent';
import SocialMediaLink from '../components/SocialMediaLink';
import ContactForm from '../components/ContactForm';
import logo from '../images/bottlecap-logo.svg';

const Content = styled(Box)`
  background-image: linear-gradient(to bottom, #8ea6e0, #eed4df);
  position: relative;
`;

const LogoBoxTopLeft = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 24px;
  object-fit: contain;
`;

const LogoBoxBottomRight = styled(Box)`
  position: absolute;
  z-index: 2;
  bottom: 24px;
  right: 24px;
  object-fit: contain;
`;

const Logo = styled.img``;

// common margins

const CONTENT_PADDING_TOP = [200, 248, 248];
const CONTENT_PADDING_BOTTOM = [80, 80, 180];
const CONTENT_PADDING_BOTTOM_LAST = CONTENT_PADDING_BOTTOM.map(x => x + 30);

const TEXT_CONTENT = {
  first: {
    header: 'Here to join the celebration of great craft beer.',
    description:
      'Importing small batches of high-quality beers with care and excellent customer service. Will ensure that we will always provide interesting and new flavours.',
  },
  second: {
    header: 'Shop keepers, restaurants and bars.',
    description:
      'Want to offer your customers the best craft beers around? If you are interested in offering our beers at your menu or shop, please don´t hesitate to contact.',
  },
  third: {
    header: 'Follow & lorem',
    description:
      'Stay updated whith the selection of beers that we offer and find out the locations where they can be found on a menu or on the shelf.',
  },
};

const SOCIAL_MEDIA = [
  {
    id: 1,
    name: 'Facebook',
    link: 'Link',
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'Link',
  },
];

const MARGIN_X = [20, 20, 50];

const IndexPage = () => (
  <Layout>
    <Box>
      <Content pt={CONTENT_PADDING_TOP} pb={CONTENT_PADDING_BOTTOM}>
        <LogoBoxTopLeft mx={[20, 20, 50]}>
          <Logo src={logo} width="95px" height="56px" />
        </LogoBoxTopLeft>
        <Box mx={MARGIN_X}>
          <TextContent
            header={TEXT_CONTENT.first.header}
            description={TEXT_CONTENT.first.description}
          />
        </Box>
      </Content>
      <Content pt={CONTENT_PADDING_TOP} pb={CONTENT_PADDING_BOTTOM}>
        <Box mx={MARGIN_X}>
          <TextContent
            header={TEXT_CONTENT.second.header}
            description={TEXT_CONTENT.second.description}
          />
          <Flex justifyContent="center" width="100%" my={4}>
            <Box width={[335, 335, 437]}>
              <ContactForm />
            </Box>
          </Flex>
        </Box>
      </Content>
      <Content pt={CONTENT_PADDING_TOP} pb={CONTENT_PADDING_BOTTOM_LAST}>
        <Box mx={MARGIN_X}>
          <LogoBoxBottomRight mx={[20, 20, 50]}>
            <Logo src={logo} width="95px" height="56px" />
          </LogoBoxBottomRight>
          <TextContent
            header={TEXT_CONTENT.third.header}
            description={TEXT_CONTENT.third.description}
          />
          <Flex flexDirection="column" alignItems="flex-end" my={[30, 30, 50]}>
            {SOCIAL_MEDIA.map(value => {
              return <SocialMediaLink key={value.id} {...value} />;
            })}
          </Flex>
        </Box>
      </Content>
    </Box>
  </Layout>
);

export default IndexPage;
