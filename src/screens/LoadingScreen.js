import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import SkeletonLoader from '../components/SkeletonLoader';

export default function LoadingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Conversations" />
      <SkeletonLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
});
