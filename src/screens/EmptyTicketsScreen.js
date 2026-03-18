import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';

export default function EmptyTicketsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Tickets" onBack={() => navigation.goBack()} />
      <EmptyState
        icon="ticket-outline"
        title="No Tickets Yet"
        subtitle="Support tickets will appear here when they are created."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
});
