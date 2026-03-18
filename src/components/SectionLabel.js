import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function SectionLabel({ text }) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textMuted,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
