import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import Header from '../components/Header';

const plans = [
  { name: 'Starter', price: '$0', period: '/mo', features: ['100 conversations', '1 teammate', 'Basic analytics'], current: false },
  { name: 'Pro', price: '$29', period: '/mo', features: ['Unlimited conversations', '5 teammates', 'Advanced analytics', 'Priority support'], current: true },
  { name: 'Enterprise', price: '$99', period: '/mo', features: ['Everything in Pro', 'Unlimited teammates', 'Custom branding', 'API access', 'Dedicated support'], current: false },
];

export default function PlansBillingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Plans & Billing" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {plans.map((plan) => (
          <View key={plan.name} style={[styles.planCard, plan.current && styles.planCardActive]}>
            {plan.current && <View style={styles.currentBadge}><Text style={styles.currentText}>Current Plan</Text></View>}
            <Text style={styles.planName}>{plan.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.period}>{plan.period}</Text>
            </View>
            {plan.features.map((f) => (
              <View key={f} style={styles.featureRow}>
                <Ionicons name="checkmark-circle" size={18} color={plan.current ? Colors.primary : Colors.textMuted} />
                <Text style={styles.featureText}>{f}</Text>
              </View>
            ))}
            {!plan.current && (
              <TouchableOpacity style={styles.upgradeBtn}>
                <Text style={styles.upgradeBtnText}>
                  {plan.price === '$0' ? 'Downgrade' : 'Upgrade'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 16, paddingBottom: 40 },
  planCard: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 20, marginBottom: 12,
    borderWidth: 2, borderColor: 'transparent',
  },
  planCardActive: { borderColor: Colors.primary },
  currentBadge: {
    backgroundColor: Colors.primaryLight, paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 8, alignSelf: 'flex-start', marginBottom: 8,
  },
  currentText: { fontSize: 12, fontWeight: '600', color: Colors.primaryDark },
  planName: { fontSize: 20, fontWeight: '700', color: Colors.text },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 4, marginBottom: 16 },
  price: { fontSize: 32, fontWeight: '700', color: Colors.text },
  period: { fontSize: 14, color: Colors.textMuted, marginLeft: 2 },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  featureText: { fontSize: 14, color: Colors.textSecondary },
  upgradeBtn: {
    borderWidth: 1, borderColor: Colors.border, borderRadius: 12,
    paddingVertical: 12, alignItems: 'center', marginTop: 12,
  },
  upgradeBtnText: { fontSize: 15, fontWeight: '600', color: Colors.text },
});
