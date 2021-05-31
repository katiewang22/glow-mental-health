
import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Journal: {
            screens: {
              JournalScreen: 'two',
            },
          },
          Checklist: {
            screens: {
              ChecklistScreen: 'three',
            },
          },
          Drawing: {
            screens: {
              DrawingScreen: 'four',
            },
          },
          Website: {
            screens: {
              WebsiteScreen: 'five',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
