import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import { action } from '@storybook/addon-actions' // eslint-disable-line
import TextContent from './'

storiesOf('TextContent', module)
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('default', () => (
    <TextContent
      header="Here to join the celebration
of great craft beer."
      description="Importing small batches of high-quality beers with care and excellent customer service. Will ensure that we will always provide interesting and new flavours.
"
    />
  ))
