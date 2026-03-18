import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';

export default function EmptyContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Contacts" onBack={() => navigation.goBack()} />
      <EmptyState
        icon="people-outline"
        title="No Contacts Yet"
        subtitle="Your contact list is empty. Contacts will appear here when customers reach out."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
});
