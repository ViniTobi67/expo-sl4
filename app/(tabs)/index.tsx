import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
      <ScrollView contentContainerStyle={s.container}>
        <Image source={} resizeMode='cover' style={s.image}/>
      </ScrollView>
  );
}

const s = StyleSheet.create({

});
