import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const metrics = [
  { label: 'Total Conversations', value: '1,247', change: '+12%', up: true },
  { label: 'Avg Response Time', value: '1m 42s', change: '-8%', up: true },
  { label: 'Resolution Rate', value: '94.2%', change: '+3%', up: true },
  { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', up: true },
];

const topAgents = [
  { name: 'Sarah Johnson', chats: 145, rating: 4.9 },
  { name: 'Mike Chen', chats: 132, rating: 4.8 },
  { name: 'Emily Davis', chats: 128, rating: 4.7 },
];

export default function AnalyticsScreen() {
  return (
    <View style={styles.container}>
      <Header title="Analytics" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.period}>Last 30 Days</Text>

        {metrics.map((m) => (
          <View key={m.label} style={styles.metricCard}>
            <View>
              <Text style={styles.metricLabel}>{m.label}</Text>
              <Text style={styles.metricValue}>{m.value}</Text>
            </View>
            <View style={[styles.changeBadge, { backgroundColor: m.up ? '#E8F5E9' : '#FFEBEE' }]}>
              <Text style={[styles.changeText, { color: m.up ? Colors.statusActive : Colors.danger }]}>
                {m.change}
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Top Agents</Text>
        {topAgents.map((a, i) => (
          <View key={a.name} style={styles.agentRow}>
            <View style={styles.rank}>
              <Text style={styles.rankText}>{i + 1}</Text>
            </View>
            <View style={styles.agentInfo}>
              <Text style={styles.agentName}>{a.name}</Text>
              <Text style={styles.agentStat}>{a.chats} chats · {a.rating} rating</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  body: { flex: 1, paddingHorizontal: 16 },
  period: { fontSize: 14, color: Colors.textMuted, marginTop: 8, marginBottom: 12 },
  metricCard: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 16, marginBottom: 8,
  },
  metricLabel: { fontSize: 13, color: Colors.textMuted },
  metricValue: { fontSize: 22, fontWeight: '700', color: Colors.text, marginTop: 4 },
  changeBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  changeText: { fontSize: 13, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.text, marginTop: 24, marginBottom: 12 },
  agentRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8,
  },
  rank: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: Colors.primaryLight, alignItems: 'center', justifyContent: 'center',
  },
  rankText: { fontSize: 14, fontWeight: '700', color: Colors.primaryDark },
  agentInfo: { marginLeft: 12 },
  agentName: { fontSize: 15, fontWeight: '600', color: Colors.text },
  agentStat: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
});
