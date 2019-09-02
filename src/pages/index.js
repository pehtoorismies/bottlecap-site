import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import TextContent from '../components/TextContent';
import ContentBlock from '../components/ContentBlock';
import SocialMediaLink from '../components/SocialMediaLink';
import ContactForm from '../components/ContactForm';
import logo from '../images/bottlecap-logo.svg';
import bgHeader from '../images/header.png';
import bgForms from '../images/shops.png';
import bgSocial from '../images/follow.png';

const LogoBoxTopLeft = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 24px;
`;

const LogoBoxBottomRight = styled(Box)`
  position: absolute;
  z-index: 2;
  bottom: 24px;
  right: 24px;
`;

const Logo = styled.img``;

const TEXT_CONTENT = {
  header: {
    header: 'Here to join the celebration of great craft beer.',
    description:
      'Importing small batches of high-quality beers with care and excellent customer service. Will ensure that we will always provide interesting and new flavours.',
  },
  forms: {
    header: 'Shop keepers, restaurants and bars.',
    description:
      'Want to offer your customers the best craft beers around? If you are interested in offering our beers at your menu or shop, please don´t hesitate to contact.',
  },
  social: {
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

const COMMON_BG = {
  backgroundRepeat: 'no-repeat',
  topPadding: [200, 248, 248],
  bottomPadding: [80, 80, 180],
  backgroundPosition: [
    'left top, center',
    'left top, center',
    'left top, center',
  ],
};

const fromBg = width => `${width}px ${(800 / 1440) * width}px`;

const BACKGROUNDS = {
  header: {
    ...COMMON_BG,
    backgroundImage: `url(${bgHeader}), linear-gradient(to bottom, #f7e1cb, #8eb390)`,
    backgroundSize: 'cover, auto',
  },
  forms: {
    ...COMMON_BG,
    backgroundImage: `url(${bgForms}), linear-gradient(to bottom, #8ea6e0, #eed4df)`,
    backgroundSize: [`contain, auto`, `${fromBg(1700)}, auto`, 'cover, auto'],
    backgroundPosition: [
      'left -600px top, center',
      'left -400px top, center',
      'left top, center',
    ],
  },

  social: {
    ...COMMON_BG,
    backgroundImage: `url(${bgSocial}), linear-gradient(to bottom, #7fbfd3, #edd4df)`,
    backgroundSize: [
      `${fromBg(1100)}, auto`,
      `${fromBg(1700)}, auto`,
      'cover, auto',
    ],
    backgroundPosition: [
      'left -300px top, center',
      'left -500px top, center',
      'left top, center',
    ],
    bottomPadding: [110, 110, 210],
  },
};

const MarginX = props => (
  <Box
    {...props}
    sx={{
      mx: [20, 20, 50],
      position: 'relative',
    }}
  />
);
const IndexPage = () => (
  <Layout>
    <SEO title="High-quality beer import" />
    <ContentBlock {...BACKGROUNDS.header}>
      <LogoBoxTopLeft mx={[20, 20, 50]}>
        <Logo src={logo} width="95px" height="56px" />
      </LogoBoxTopLeft>
      <MarginX>
        <TextContent
          header={TEXT_CONTENT.header.header}
          description={TEXT_CONTENT.header.description}
        />
      </MarginX>
    </ContentBlock>
    <ContentBlock {...BACKGROUNDS.forms}>
      <MarginX>
        <TextContent
          header={TEXT_CONTENT.forms.header}
          description={TEXT_CONTENT.forms.description}
        />
        <Flex justifyContent="center" width="100%" my={4}>
          <Box width={[335, 335, 437]}>
            <ContactForm />
          </Box>
        </Flex>
      </MarginX>
    </ContentBlock>
    <ContentBlock {...BACKGROUNDS.social}>
      <LogoBoxBottomRight mx={[20, 20, 50]}>
        <Logo src={logo} width="95px" height="56px" />
      </LogoBoxBottomRight>
      <MarginX>
        <TextContent
          header={TEXT_CONTENT.social.header}
          description={TEXT_CONTENT.social.description}
        />
        <Flex flexDirection="column" alignItems="flex-end" my={[30, 30, 50]}>
          {SOCIAL_MEDIA.map(value => {
            return <SocialMediaLink key={value.id} {...value} />;
          })}
        </Flex>
      </MarginX>
    </ContentBlock>
  </Layout>
);

export default IndexPage;
