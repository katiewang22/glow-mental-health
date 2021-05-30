
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
          Website: {
            screens: {
              WebsiteScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
