
import * as React from 'react';
import { Draw } from "@benjeau/react-native-draw";

export default function DrawingScreen() {
  return (
    <Draw
      height={550}
      width={415}
      initialValues={{
        color: "#000000",
        thickness: 10,
        paths: []
      }}
      brushPreview="none"
      canvasStyle={{ elevation: 0, backgroundColor: "#ffffff" }}
    />
  );
}