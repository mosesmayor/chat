import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';

export default function ErrorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name="cloud-offline-outline" size={64} color={Colors.textMuted} />
      </View>
      <Text style={styles.title}>Something Went Wrong</Text>
      <Text style={styles.subtitle}>
        We couldn't connect to the server. Please check your internet connection and try again.
      </Text>
      <PrimaryButton
        title="Retry"
        onPress={() => navigation.goBack()}
        style={{ width: '60%', marginTop: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: Colors.background,
    alignItems: 'center', justifyContent: 'center', padding: 40,
  },
  iconWrap: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: Colors.divider, alignItems: 'center', justifyContent: 'center', marginBottom: 24,
  },
  title: { fontSize: 22, fontWeight: '700', color: Colors.text, marginBottom: 8 },
  subtitle: { fontSize: 14, color: Colors.textMuted, textAlign: 'center', lineHeight: 20 },
});
