import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Start managing your conversations</Text>
        </View>

        <View style={styles.form}>
          <InputField label="Full Name" placeholder="Enter your full name" value={name} onChangeText={setName} />
          <InputField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <InputField label="Password" placeholder="Create a password" value={password} onChangeText={setPassword} secureTextEntry />
          <PrimaryButton title="Create Account" onPress={() => navigation.replace('MainTabs')} style={{ marginTop: 8 }} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { flexGrow: 1, padding: 24, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 24, fontWeight: '700', color: Colors.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: Colors.textMuted },
  form: { marginBottom: 24 },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { fontSize: 14, color: Colors.textMuted },
  footerLink: { fontSize: 14, color: Colors.primaryDark, fontWeight: '600' },
});
