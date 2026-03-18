import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const industries = ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Education', 'Other'];
const brandColors = ['#F5C543', '#4ECDC4', '#45B7D1', '#FF6B6B', '#96CEB4', '#DDA0DD', '#F0B27A', '#85C1E9'];

export default function CreateBrandScreen({ navigation }) {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedColor, setSelectedColor] = useState('#F5C543');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Create Brand" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.logoUpload}>
          <Ionicons name="camera" size={32} color={Colors.textMuted} />
          <Text style={styles.uploadText}>Upload Logo</Text>
        </TouchableOpacity>

        <InputField label="Brand Name" placeholder="Enter brand name" value={name} onChangeText={setName} />
        <InputField label="Website URL" placeholder="https://example.com" value={website} onChangeText={setWebsite} keyboardType="url" />

        <Text style={styles.label}>Brand Color</Text>
        <View style={styles.colorsRow}>
          {brandColors.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.colorDot, { backgroundColor: c }, selectedColor === c && styles.colorDotActive]}
              onPress={() => setSelectedColor(c)}
            />
          ))}
        </View>

        <Text style={styles.label}>Industry</Text>
        <View style={styles.industryGrid}>
          {industries.map((ind) => (
            <TouchableOpacity
              key={ind}
              style={[styles.industryBtn, selectedIndustry === ind && styles.industryBtnActive]}
              onPress={() => setSelectedIndustry(ind)}
            >
              <Text style={[styles.industryText, selectedIndustry === ind && styles.industryTextActive]}>{ind}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <PrimaryButton title="Create Brand" onPress={() => navigation.goBack()} style={{ marginTop: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 24 },
  logoUpload: {
    width: 100, height: 100, borderRadius: 20, borderWidth: 2,
    borderColor: Colors.border, borderStyle: 'dashed',
    alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 24,
  },
  uploadText: { fontSize: 12, color: Colors.textMuted, marginTop: 4 },
  label: { fontSize: 14, fontWeight: '600', color: Colors.textSecondary, marginBottom: 10 },
  colorsRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  colorDot: { width: 36, height: 36, borderRadius: 18 },
  colorDotActive: { borderWidth: 3, borderColor: Colors.text },
  industryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  industryBtn: {
    paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12,
    backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border,
  },
  industryBtnActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  industryText: { fontSize: 14, color: Colors.textSecondary },
  industryTextActive: { color: Colors.text, fontWeight: '600' },
});
