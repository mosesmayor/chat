import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

function ShimmerBlock({ width, height, style }) {
  const anim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, [anim]);

  return (
    <Animated.View
      style={[styles.block, { width, height, opacity: anim }, style]}
    />
  );
}

export default function SkeletonLoader() {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((i) => (
        <View key={i} style={styles.row}>
          <ShimmerBlock width={48} height={48} style={{ borderRadius: 24 }} />
          <View style={styles.lines}>
            <ShimmerBlock width="70%" height={14} style={{ borderRadius: 4 }} />
            <ShimmerBlock width="40%" height={12} style={{ borderRadius: 4, marginTop: 8 }} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  block: {
    backgroundColor: '#E0E0E0',
  },
  lines: {
    flex: 1,
    marginLeft: 12,
  },
});
