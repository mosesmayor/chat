import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

export default function SettingsRow({ icon, label, value, onPress, danger }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      {icon && (
        <View style={[styles.iconWrap, danger && { backgroundColor: '#FFEBEE' }]}>
          <Ionicons name={icon} size={20} color={danger ? Colors.danger : Colors.primary} />
        </View>
      )}
      <Text style={[styles.label, danger && { color: Colors.danger }]}>{label}</Text>
      <View style={styles.right}>
        {value && <Text style={styles.value}>{value}</Text>}
        <Ionicons name="chevron-forward" size={18} color={Colors.textPlaceholder} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  value: {
    fontSize: 14,
    color: Colors.textMuted,
  },
});
