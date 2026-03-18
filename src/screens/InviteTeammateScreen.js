import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const roles = ['Support Agent', 'Team Lead', 'Admin'];

export default function InviteTeammateScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('Support Agent');

  return (
    <View style={styles.container}>
      <Header title="Invite Teammate" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <InputField label="Full Name" placeholder="Enter teammate's name" value={name} onChangeText={setName} />
        <InputField label="Email Address" placeholder="Enter email address" value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.roleLabel}>Role</Text>
        <View style={styles.roles}>
          {roles.map((r) => (
            <TouchableOpacity
              key={r}
              style={[styles.roleBtn, selectedRole === r && styles.roleBtnActive]}
              onPress={() => setSelectedRole(r)}
            >
              <Text style={[styles.roleText, selectedRole === r && styles.roleTextActive]}>{r}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <PrimaryButton title="Send Invitation" onPress={() => navigation.goBack()} style={{ marginTop: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 24 },
  roleLabel: { fontSize: 14, fontWeight: '600', color: Colors.textSecondary, marginBottom: 8 },
  roles: { flexDirection: 'row', gap: 8 },
  roleBtn: {
    paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12,
    borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white,
  },
  roleBtnActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  roleText: { fontSize: 14, color: Colors.textSecondary, fontWeight: '500' },
  roleTextActive: { color: Colors.text, fontWeight: '600' },
});
