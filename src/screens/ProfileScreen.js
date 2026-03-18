import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import SettingsRow from '../components/SettingsRow';
import SectionLabel from '../components/SectionLabel';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <Avatar name="Admin User" size={72} />
          <Text style={styles.name}>Admin User</Text>
          <Text style={styles.email}>admin@donravepay.com</Text>
        </View>

        <SectionLabel text="Account" />
        <SettingsRow icon="person" label="My Profile" onPress={() => navigation.navigate('MyProfile')} />
        <SettingsRow icon="lock-closed" label="Change Password" onPress={() => navigation.navigate('ChangePassword')} />
        <SettingsRow icon="people" label="Teammates" onPress={() => navigation.navigate('Teammates')} />

        <SectionLabel text="Workspace" />
        <SettingsRow icon="pricetag" label="Brands" onPress={() => navigation.navigate('Brands')} />
        <SettingsRow icon="time" label="Office Hours" onPress={() => navigation.navigate('OfficeHours')} />
        <SettingsRow icon="chatbox-ellipses" label="Widget Settings" onPress={() => navigation.navigate('WidgetSettings')} />
        <SettingsRow icon="card" label="Plans & Billing" onPress={() => navigation.navigate('PlansBilling')} />

        <SectionLabel text="Admin" />
        <SettingsRow icon="ban" label="Ban List" onPress={() => navigation.navigate('BanList')} />
        <SettingsRow icon="document-text" label="Audit Log" onPress={() => navigation.navigate('AuditLog')} />
        <SettingsRow icon="notifications" label="Notifications" onPress={() => navigation.navigate('Notifications')} />

        <SectionLabel text="" />
        <SettingsRow icon="log-out" label="Sign Out" danger onPress={() => navigation.replace('Login')} />
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  profileCard: {
    alignItems: 'center', backgroundColor: Colors.white,
    marginHorizontal: 16, marginTop: 16, borderRadius: 12, padding: 24,
  },
  name: { fontSize: 20, fontWeight: '700', color: Colors.text, marginTop: 12 },
  email: { fontSize: 14, color: Colors.textMuted, marginTop: 4 },
});
