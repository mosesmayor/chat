import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const STATUS_MAP = {
  active: { bg: '#E8F5E9', color: Colors.statusActive, label: 'Active' },
  pending: { bg: Colors.primaryLight, color: Colors.primaryDark, label: 'Pending' },
  banned: { bg: '#FFEBEE', color: Colors.statusBanned, label: 'Banned' },
};

export default function StatusBadge({ status }) {
  const config = STATUS_MAP[status] || STATUS_MAP.active;
  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: config.color }]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
