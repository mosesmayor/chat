import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const notifications = [
  { id: '1', title: 'New conversation', body: 'Sarah Johnson started a new chat', time: '2m ago', read: false, icon: 'chatbubble' },
  { id: '2', title: 'Ticket assigned', body: 'You have been assigned ticket #1042', time: '15m ago', read: false, icon: 'ticket' },
  { id: '3', title: 'Teammate joined', body: 'James Wilson accepted the invite', time: '1h ago', read: true, icon: 'person-add' },
  { id: '4', title: 'Payment received', body: 'Pro plan payment of $29 confirmed', time: '3h ago', read: true, icon: 'card' },
  { id: '5', title: 'System update', body: 'DonRavePay v2.1 is now available', time: '1d ago', read: true, icon: 'cloud-download' },
];

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Notifications" onBack={() => navigation.goBack()} />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[styles.row, !item.read && styles.unread]}>
            <View style={[styles.iconWrap, { backgroundColor: !item.read ? Colors.primaryLight : Colors.divider }]}>
              <Ionicons name={item.icon} size={20} color={!item.read ? Colors.primaryDark : Colors.textMuted} />
            </View>
            <View style={styles.info}>
              <Text style={[styles.title, !item.read && styles.titleBold]}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
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
  unread: { borderLeftWidth: 3, borderLeftColor: Colors.primary },
  iconWrap: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 14, color: Colors.text },
  titleBold: { fontWeight: '700' },
  body: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
  time: { fontSize: 11, color: Colors.textMuted },
});
