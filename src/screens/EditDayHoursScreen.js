import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

const hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'];

export default function EditDayHoursScreen({ navigation, route }) {
  const day = route?.params?.day || 'Monday';
  const [startTime, setStartTime] = useState('9:00 AM');
  const [endTime, setEndTime] = useState('5:00 PM');
  const [selecting, setSelecting] = useState('start');

  return (
    <View style={styles.container}>
      <Header title={day} onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.selectors}>
          <TouchableOpacity
            style={[styles.timeBox, selecting === 'start' && styles.timeBoxActive]}
            onPress={() => setSelecting('start')}
          >
            <Text style={styles.timeLabel}>Start Time</Text>
            <Text style={styles.timeValue}>{startTime}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeBox, selecting === 'end' && styles.timeBoxActive]}
            onPress={() => setSelecting('end')}
          >
            <Text style={styles.timeLabel}>End Time</Text>
            <Text style={styles.timeValue}>{endTime}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.pickLabel}>Select {selecting === 'start' ? 'Start' : 'End'} Time</Text>
        <View style={styles.grid}>
          {hours.map((h) => {
            const isSelected = (selecting === 'start' && h === startTime) || (selecting === 'end' && h === endTime);
            return (
              <TouchableOpacity
                key={h}
                style={[styles.hourBtn, isSelected && styles.hourBtnActive]}
                onPress={() => selecting === 'start' ? setStartTime(h) : setEndTime(h)}
              >
                <Text style={[styles.hourText, isSelected && styles.hourTextActive]}>{h}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <PrimaryButton title="Save Hours" onPress={() => navigation.goBack()} style={{ marginTop: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 20 },
  selectors: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  timeBox: {
    flex: 1, backgroundColor: Colors.white, borderRadius: 12, padding: 16,
    borderWidth: 2, borderColor: 'transparent',
  },
  timeBoxActive: { borderColor: Colors.primary },
  timeLabel: { fontSize: 12, color: Colors.textMuted, marginBottom: 4 },
  timeValue: { fontSize: 18, fontWeight: '700', color: Colors.text },
  pickLabel: { fontSize: 14, fontWeight: '600', color: Colors.textSecondary, marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  hourBtn: {
    paddingHorizontal: 14, paddingVertical: 10, borderRadius: 10,
    backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border,
  },
  hourBtnActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  hourText: { fontSize: 14, color: Colors.textSecondary },
  hourTextActive: { color: Colors.text, fontWeight: '600' },
});
