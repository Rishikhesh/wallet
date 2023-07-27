import Lottie from 'lottie-react-native';
import splashJson from '../../assets/splashScreen.json';
import { Dispatch, SetStateAction } from 'react';
import React from 'react';
export function LaunchScreen({
  lottieDone,
}: {
  lottieDone: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Lottie
      source={splashJson}
      loop={false}
      resizeMode={'cover'}
      autoPlay
      onAnimationFinish={() => {
        lottieDone(true);
      }}
    />
  );
}
