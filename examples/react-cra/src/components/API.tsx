import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const TwilioAPI: React.FC = () => {
  return (
    <API
      basePath="twilio-api"
      apiDescriptionUrl="https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/yaml/twilio_accounts_v1.yaml"
    />
  );
};
