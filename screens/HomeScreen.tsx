import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';
import { ReenieBeanie_400Regular } from '@expo-google-fonts/reenie-beanie';

import { Text, View } from '../components/Themed';
import { quotes } from '../quotes';

export default function HomeScreen() {

  // Loading fonts
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
    ReenieBeanie_400Regular,
  });

  // Getting random quotes and its author
  const objKeys = Object.keys(quotes);
  const ranIndex = parseInt(objKeys[Math.floor(Math.random() * objKeys.length)]);
  const quoteText = JSON.stringify(quotes[ranIndex].text);
  const quoteAuthor = JSON.stringify(quotes[ranIndex].author).replace(/['"]+/g, ''); 

  // Screen
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/glow-bg.jpg')} style={styles.image}>
          <Text style={styles.title}>Glow</Text>
          <Text style={styles.quoteText}>{quoteText}</Text>
          <Text style={styles.quoteAuthor}>- {quoteAuthor}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 50, 
    fontFamily: "Courgette_400Regular",
    textAlign: "center",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    justifyContent: "center",
  },
	quoteText: {
		fontSize: 35,
    textAlign: "center",
    fontFamily: "ReenieBeanie_400Regular",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "black",
	},
	quoteAuthor: {
		fontSize: 25,
    color: "black",
    textAlign: "center",
    fontFamily: "ReenieBeanie_400Regular",
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
	},
});
