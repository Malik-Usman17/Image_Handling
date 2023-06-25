import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNReactNativeHapticFeedback, { trigger } from 'react-native-haptic-feedback';
import DiceFive from './assets/Five.png';
import DiceFour from './assets/Four.png';
import One from './assets/One.png';
import Six from './assets/Six.png';
import Three from './assets/Three.png';
import Two from './assets/Two.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{imageUrl: ImageSourcePropType}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image 
        style={styles.diceImage}
        source={imageUrl}
      />
    </View>
  )
}

function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One) 

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch(randomNumber){
      case 1:
        setDiceImage(One)
        break;
      case 2:
        setDiceImage(Two)
        break;
      case 3:
        setDiceImage(Three)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(Six)
        break;
      default:
        setDiceImage(One)
        break;
    }
     trigger("notificationSuccess", options)
    // RNReactNativeHapticFeedback.trigger("impactHeavy", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
