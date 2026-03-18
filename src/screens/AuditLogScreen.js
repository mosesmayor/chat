import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const logs = [
  { id: '1', action: 'User Login', user: 'Admin User', time: 'Today, 9:00 AM', icon: 'log-in', color: '#4ECDC4' },
  { id: '2', action: 'Teammate Invited', user: 'Admin User', time: 'Today, 8:45 AM', icon: 'person-add', color: '#45B7D1' },
  { id: '3', action: 'Brand Created', user: 'Admin User', time: 'Yesterday, 3:30 PM', icon: 'pricetag', color: Colors.primary },
  { id: '4', action: 'Password Changed', user: 'Sarah Johnson', time: 'Yesterday, 2:15 PM', icon: 'lock-closed', color: '#FF6B6B' },
  { id: '5', action: 'User Banned', user: 'Admin User', time: 'Mar 15, 11:00 AM', icon: 'ban', color: Colors.danger },
  { id: '6', action: 'Plan Upgraded', user: 'Admin User', time: 'Mar 14, 4:00 PM', icon: 'card', color: '#96CEB4' },
  { id: '7', action: 'Office Hours Updated', user: 'Emily Davis', time: 'Mar 13, 10:30 AM', icon: 'time', color: '#DDA0DD' },
  { id: '8', action: 'Widget Settings Changed', user: 'Admin User', time: 'Mar 12, 9:00 AM', icon: 'settings', color: '#85C1E9' },
];

export default function AuditLogScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Audit Log" onBack={() => navigation.goBack()} />
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.iconWrap, { backgroundColor: item.color + '20' }]}>
              <Ionicons name={item.icon} size={20} color={item.color} />
            </View>
            <View style={styles.info}>
              <Text style={styles.action}>{item.action}</Text>
              <Text style={styles.meta}>{item.user} · {item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { padding: 16 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8,
  },
  iconWrap: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  info: { flex: 1, marginLeft: 12 },
  action: { fontSize: 15, fontWeight: '600', color: Colors.text },
  meta: { fontSize: 12, color: Colors.textMuted, marginTop: 4 },
});
