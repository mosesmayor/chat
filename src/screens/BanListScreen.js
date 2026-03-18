import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import StatusBadge from '../components/StatusBadge';
import DeleteModal from '../components/DeleteModal';

const bannedUsers = [
  { id: '1', name: 'Spam Bot 1', email: 'spam@bot.com', reason: 'Spamming', date: 'Mar 15, 2026' },
  { id: '2', name: 'Abusive User', email: 'abuse@test.com', reason: 'Abusive language', date: 'Mar 10, 2026' },
  { id: '3', name: 'Fake Account', email: 'fake@user.com', reason: 'Fraudulent activity', date: 'Feb 28, 2026' },
];

export default function BanListScreen({ navigation }) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Ban List" onBack={() => navigation.goBack()} />
      <FlatList
        data={bannedUsers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Avatar name={item.name} size={44} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.reason}>{item.reason} · {item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => setShowDelete(true)}>
              <Ionicons name="trash-outline" size={20} color={Colors.danger} />
            </TouchableOpacity>
          </View>
        )}
      />
      <DeleteModal
        visible={showDelete}
        title="Unban User"
        message="Are you sure you want to remove this user from the ban list?"
        onCancel={() => setShowDelete(false)}
        onDelete={() => setShowDelete(false)}
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
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  email: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
  reason: { fontSize: 12, color: Colors.danger, marginTop: 4 },
});
