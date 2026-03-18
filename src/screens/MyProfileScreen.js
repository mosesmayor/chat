import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import Avatar from '../components/Avatar';

export default function MyProfileScreen({ navigation }) {
  const [name, setName] = useState('Admin User');
  const [email, setEmail] = useState('admin@donravepay.com');
  const [phone, setPhone] = useState('+1 234 567 8900');
  const [role, setRole] = useState('Administrator');

  return (
    <View style={styles.container}>
      <Header title="My Profile" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarWrap}>
          <Avatar name={name} size={80} />
        </View>
        <InputField label="Full Name" value={name} onChangeText={setName} />
        <InputField label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <InputField label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <InputField label="Role" value={role} onChangeText={setRole} />
        <PrimaryButton title="Save Changes" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 24 },
  avatarWrap: { alignItems: 'center', marginBottom: 24 },
});
