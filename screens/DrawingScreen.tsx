import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { View } from '../components/Themed';

// Creates prop
interface NativeWebViewProps {
  target: string;
}

// WebView structure
const NativeWebView = (props: NativeWebViewProps): JSX.Element => {
  return <WebView source={{ uri: props.target }} style={styles.webViewStyles}/>;
};

export default function DrawingScreen() {
  return (
    <View style={styles.container}>
      <NativeWebView target="https://sketch.io/mobile/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  webViewStyles: {
    height: 500,
    width: 420
  }
});