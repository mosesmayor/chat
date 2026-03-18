import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Forgot Password" onBack={() => navigation.goBack()} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text style={styles.desc}>
            Enter your email address and we'll send you a link to reset your password.
          </Text>
          <InputField label="Email Address" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <PrimaryButton title="Send Reset Link" onPress={() => navigation.goBack()} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 24 },
  desc: { fontSize: 14, color: Colors.textSecondary, lineHeight: 20, marginBottom: 24 },
});
