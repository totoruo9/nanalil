import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'Nanalilfire',
  slug: 'nanalilfire',
  extra: {
    eas: {
      projectId: "5fc70a06-9f44-41cc-b906-f7558a5ebee5"
    }
  }
};

export default config;