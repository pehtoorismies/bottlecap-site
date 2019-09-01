import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import Layout from '../components/Layout';
import TextContent from '../components/TextContent';
import logo from '../images/bottlecap-logo.svg';

const Content = styled(Box)`
  background-image: linear-gradient(to bottom, #8ea6e0, #eed4df);
`;

const LogoBox = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 24px;
  width: 95px;
  height: 56px;
  object-fit: contain;
`;

const Logo = styled.img``;

// common margins

const CONTENT_PADDING_TOP = [200, 248, 248];

const textContent = {
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

const IndexPage = () => (
  <Layout>
    <LogoBox mx={[20, 20, 50]}>
      <Logo src={logo} width="95px" height="56px" />
    </LogoBox>

    <Box >
      <Content pt={CONTENT_PADDING_TOP}>
        <TextContent
          header={textContent.first.header}
          description={textContent.first.description}
        />
      </Content>
      <Content pt={CONTENT_PADDING_TOP}>
        <TextContent
          header={textContent.second.header}
          description={textContent.second.description}
        />
      </Content>
      <Content pt={CONTENT_PADDING_TOP}>
        <TextContent
          header={textContent.third.header}
          description={textContent.third.description}
        />
      </Content>
    </Box>
  </Layout>
);

export default IndexPage;
