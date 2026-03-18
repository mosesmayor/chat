import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

const stats = [
  { label: 'Active Chats', value: '24', icon: 'chatbubbles', color: '#4ECDC4' },
  { label: 'Open Tickets', value: '12', icon: 'ticket', color: Colors.primary },
  { label: 'Contacts', value: '156', icon: 'people', color: '#45B7D1' },
  { label: 'Avg Response', value: '2m', icon: 'time', color: '#96CEB4' },
];

const recentChats = [
  { name: 'Sarah Johnson', message: 'Thanks for your help!', time: '2m ago' },
  { name: 'Mike Chen', message: 'I need help with billing', time: '15m ago' },
  { name: 'Emily Davis', message: 'When will my order arrive?', time: '1h ago' },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.primary, Colors.background]} style={styles.header}>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.name}>Welcome back, Admin</Text>
      </LinearGradient>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          {stats.map((s) => (
            <View key={s.label} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: s.color + '20' }]}>
                <Ionicons name={s.icon} size={22} color={s.color} />
              </View>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Conversations</Text>
        {recentChats.map((c) => (
          <View key={c.name} style={styles.chatRow}>
            <View style={[styles.avatar, { backgroundColor: '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16).padStart(6, '0') }]}>
              <Text style={styles.avatarText}>{c.name[0]}</Text>
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{c.name}</Text>
              <Text style={styles.chatMsg} numberOfLines={1}>{c.message}</Text>
            </View>
            <Text style={styles.chatTime}>{c.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { paddingTop: 60, paddingBottom: 24, paddingHorizontal: 20 },
  greeting: { fontSize: 14, color: Colors.textSecondary },
  name: { fontSize: 24, fontWeight: '700', color: Colors.text, marginTop: 4 },
  body: { flex: 1, paddingHorizontal: 16 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 16 },
  statCard: {
    width: '47%', backgroundColor: Colors.white, borderRadius: 12,
    padding: 16, alignItems: 'flex-start',
  },
  statIcon: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  statValue: { fontSize: 24, fontWeight: '700', color: Colors.text },
  statLabel: { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.text, marginTop: 24, marginBottom: 12 },
  chatRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8,
  },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 18, fontWeight: '700', color: Colors.white },
  chatInfo: { flex: 1, marginLeft: 12 },
  chatName: { fontSize: 15, fontWeight: '600', color: Colors.text },
  chatMsg: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
  chatTime: { fontSize: 12, color: Colors.textMuted },
});
