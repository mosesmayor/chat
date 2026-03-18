import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const brands = [
  { id: '1', name: 'DonRavePay', website: 'donravepay.com', color: '#F5C543' },
  { id: '2', name: 'PayFlow', website: 'payflow.io', color: '#4ECDC4' },
  { id: '3', name: 'QuickSend', website: 'quicksend.app', color: '#45B7D1' },
];

export default function BrandsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Brands" onBack={() => navigation.goBack()} rightIcon="add" onRightPress={() => navigation.navigate('CreateBrand')} />
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.brandIcon, { backgroundColor: item.color }]}>
              <Text style={styles.brandInitial}>{item.name[0]}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.website}>{item.website}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textPlaceholder} />
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
  brandIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  brandInitial: { fontSize: 20, fontWeight: '700', color: Colors.white },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  website: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
});
