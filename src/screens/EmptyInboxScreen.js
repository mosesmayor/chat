import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';

export default function EmptyInboxScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Inbox" onBack={() => navigation.goBack()} />
      <EmptyState
        icon="mail-open-outline"
        title="No Messages Yet"
        subtitle="Your inbox is empty. New conversations will appear here."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
});
