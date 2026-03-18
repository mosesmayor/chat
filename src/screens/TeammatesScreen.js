import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import StatusBadge from '../components/StatusBadge';

const teammates = [
  { id: '1', name: 'Sarah Johnson', role: 'Support Agent', status: 'active' },
  { id: '2', name: 'Mike Chen', role: 'Support Agent', status: 'active' },
  { id: '3', name: 'Emily Davis', role: 'Team Lead', status: 'active' },
  { id: '4', name: 'James Wilson', role: 'Support Agent', status: 'pending' },
  { id: '5', name: 'Lisa Anderson', role: 'Admin', status: 'active' },
];

export default function TeammatesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Teammates" onBack={() => navigation.goBack()} rightIcon="add" onRightPress={() => navigation.navigate('InviteTeammate')} />
      <FlatList
        data={teammates}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Avatar name={item.name} size={44} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <StatusBadge status={item.status} />
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
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  role: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
});
