import React from 'react';
import { Text, View } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

// type 1:13

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>

      <View style={styles.footer}>
        <UserPhoto 
          imageUri='https://github.com/lauchzerjr.png'
          sizes='SMALL'
        />

      <Text style={styles.userName}>Nome do usuario</Text>

      </View>
    </View>
  );
}