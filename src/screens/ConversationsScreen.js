import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

const conversations = [
  { id: '1', name: 'Sarah Johnson', message: 'Thanks for your help with the billing issue!', time: '2m', unread: 2 },
  { id: '2', name: 'Mike Chen', message: 'I need help with my subscription', time: '15m', unread: 0 },
  { id: '3', name: 'Emily Davis', message: 'When will my order arrive?', time: '1h', unread: 1 },
  { id: '4', name: 'James Wilson', message: 'Can you help me reset my password?', time: '2h', unread: 0 },
  { id: '5', name: 'Lisa Anderson', message: 'I have a question about pricing', time: '3h', unread: 0 },
  { id: '6', name: 'David Brown', message: 'The app keeps crashing on my phone', time: '5h', unread: 3 },
  { id: '7', name: 'Anna Martinez', message: 'Thank you so much!', time: '1d', unread: 0 },
];

export default function ConversationsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <Avatar name={item.name} size={48} />
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
          {item.unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Conversations" rightIcon="search" onRightPress={() => navigation.navigate('Search')} />
      <FlatList
        data={conversations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { paddingHorizontal: 16, paddingTop: 8 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8,
  },
  info: { flex: 1, marginLeft: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  time: { fontSize: 12, color: Colors.textMuted },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  message: { fontSize: 13, color: Colors.textMuted, flex: 1, marginRight: 8 },
  badge: {
    backgroundColor: Colors.primary, borderRadius: 10,
    minWidth: 20, height: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6,
  },
  badgeText: { fontSize: 11, fontWeight: '700', color: Colors.text },
});
