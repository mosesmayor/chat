import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const days = [
  { id: '1', day: 'Monday', start: '9:00 AM', end: '5:00 PM', enabled: true },
  { id: '2', day: 'Tuesday', start: '9:00 AM', end: '5:00 PM', enabled: true },
  { id: '3', day: 'Wednesday', start: '9:00 AM', end: '5:00 PM', enabled: true },
  { id: '4', day: 'Thursday', start: '9:00 AM', end: '5:00 PM', enabled: true },
  { id: '5', day: 'Friday', start: '9:00 AM', end: '5:00 PM', enabled: true },
  { id: '6', day: 'Saturday', start: '10:00 AM', end: '2:00 PM', enabled: false },
  { id: '7', day: 'Sunday', start: '', end: '', enabled: false },
];

export default function OfficeHoursScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Office Hours" onBack={() => navigation.goBack()} />
      <FlatList
        data={days}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => navigation.navigate('EditDayHours', { day: item.day })}
          >
            <View style={styles.dayInfo}>
              <Text style={styles.dayName}>{item.day}</Text>
              <Text style={styles.hours}>
                {item.enabled && item.start ? `${item.start} - ${item.end}` : 'Closed'}
              </Text>
            </View>
            <Switch
              value={item.enabled}
              trackColor={{ true: Colors.primary, false: Colors.border }}
              thumbColor={Colors.white}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { padding: 16 },
  row: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: Colors.white, borderRadius: 12, padding: 16, marginBottom: 8,
  },
  dayInfo: { flex: 1 },
  dayName: { fontSize: 16, fontWeight: '600', color: Colors.text },
  hours: { fontSize: 13, color: Colors.textMuted, marginTop: 4 },
});
