import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

const allResults = [
  { id: '1', name: 'Sarah Johnson', type: 'Conversation', preview: 'Thanks for your help!' },
  { id: '2', name: 'Mike Chen', type: 'Contact', preview: 'mike@chen.com' },
  { id: '3', name: 'Billing Issue #1042', type: 'Ticket', preview: 'Payment not processed' },
  { id: '4', name: 'Emily Davis', type: 'Conversation', preview: 'When will my order arrive?' },
  { id: '5', name: 'Order Refund #1038', type: 'Ticket', preview: 'Refund requested for order' },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const filtered = allResults.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase()) || r.preview.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header title="Search" onBack={() => navigation.goBack()} />
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={20} color={Colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations, contacts, tickets..."
          placeholderTextColor={Colors.textPlaceholder}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
      </View>
      <FlatList
        data={query.length > 0 ? filtered : []}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          query.length > 0 ? (
            <Text style={styles.empty}>No results found</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Avatar name={item.name} size={40} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.preview}>{item.preview}</Text>
            </View>
            <View style={styles.typeBadge}>
              <Text style={styles.typeText}>{item.type}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  searchWrap: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white,
    marginHorizontal: 16, marginTop: 8, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 15, color: Colors.text },
  list: { padding: 16 },
  empty: { textAlign: 'center', color: Colors.textMuted, fontSize: 14, marginTop: 40 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8,
  },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  preview: { fontSize: 13, color: Colors.textMuted, marginTop: 2 },
  typeBadge: { backgroundColor: Colors.divider, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  typeText: { fontSize: 11, color: Colors.textMuted, fontWeight: '600' },
});
