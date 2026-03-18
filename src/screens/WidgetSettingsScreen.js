import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SectionLabel from '../components/SectionLabel';

export default function WidgetSettingsScreen({ navigation }) {
  const [greeting, setGreeting] = useState('Hi there! How can we help you?');
  const [autoReply, setAutoReply] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <View style={styles.container}>
      <Header title="Widget Settings" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <SectionLabel text="Appearance" />
        <View style={styles.card}>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Show Agent Avatar</Text>
            <Switch value={showAvatar} onValueChange={setShowAvatar} trackColor={{ true: Colors.primary }} />
          </View>
          <View style={styles.divider} />
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Notification Sound</Text>
            <Switch value={soundEnabled} onValueChange={setSoundEnabled} trackColor={{ true: Colors.primary }} />
          </View>
        </View>

        <SectionLabel text="Messages" />
        <InputField label="Greeting Message" value={greeting} onChangeText={setGreeting} multiline />

        <View style={styles.card}>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Auto Reply</Text>
            <Switch value={autoReply} onValueChange={setAutoReply} trackColor={{ true: Colors.primary }} />
          </View>
        </View>

        <SectionLabel text="Preview" />
        <View style={styles.preview}>
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>{greeting}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingBottom: 40 },
  card: { backgroundColor: Colors.white, marginHorizontal: 16, borderRadius: 12, overflow: 'hidden' },
  switchRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  switchLabel: { fontSize: 15, color: Colors.text, fontWeight: '500' },
  divider: { height: 1, backgroundColor: Colors.divider, marginLeft: 16 },
  preview: { marginHorizontal: 16, backgroundColor: Colors.white, borderRadius: 12, padding: 16 },
  chatBubble: {
    backgroundColor: Colors.primaryLight, borderRadius: 12, borderTopLeftRadius: 4,
    padding: 12, maxWidth: '80%',
  },
  chatText: { fontSize: 14, color: Colors.text, lineHeight: 20 },
});
