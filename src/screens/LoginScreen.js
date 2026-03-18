import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View style={styles.logoWrap}>
            <Text style={styles.logo}>D</Text>
          </View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>
        </View>

        <View style={styles.form}>
          <InputField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <InputField label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <PrimaryButton title="Sign In" onPress={() => navigation.replace('MainTabs')} style={{ marginTop: 8 }} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}>Sign Up</Text>
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
  logoWrap: {
    width: 64, height: 64, borderRadius: 16,
    backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  logo: { fontSize: 32, fontWeight: '700', color: Colors.white },
  title: { fontSize: 24, fontWeight: '700', color: Colors.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: Colors.textMuted },
  form: { marginBottom: 24 },
  forgot: { fontSize: 14, color: Colors.primaryDark, fontWeight: '600', textAlign: 'right', marginBottom: 8 },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { fontSize: 14, color: Colors.textMuted },
  footerLink: { fontSize: 14, color: Colors.primaryDark, fontWeight: '600' },
});
