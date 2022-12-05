import { Box } from '@twilio-paste/core/box';
import { Flex } from '@twilio-paste/core/flex';
import { Text } from '@twilio-paste/core/text';
import * as React from 'react';

export const PoweredByLink: React.FC<{
  source: string;
  pathname: string;
  packageType: 'elements' | 'elements-dev-portal';
  layout?: 'sidebar' | 'stacked';
}> = ({ source, pathname, packageType, layout = 'sidebar' }) => {
  return (
    <Flex>
      <Box alignItems="center" marginRight="space20">
        <Text as="p">Twilio Docs Link</Text>
      </Box>
    </Flex>
  );
};
