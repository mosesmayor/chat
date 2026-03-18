import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function ChangePasswordScreen({ navigation }) {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Change Password" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <InputField label="Current Password" placeholder="Enter current password" value={current} onChangeText={setCurrent} secureTextEntry />
        <InputField label="New Password" placeholder="Enter new password" value={newPass} onChangeText={setNewPass} secureTextEntry />
        <InputField label="Confirm Password" placeholder="Confirm new password" value={confirm} onChangeText={setConfirm} secureTextEntry />
        <PrimaryButton title="Update Password" onPress={() => navigation.goBack()} style={{ marginTop: 8 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 24 },
});
