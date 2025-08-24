import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: Colors[colorScheme].background }]}
      edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top, paddingBottom: 24 + insets.bottom }]}>
        <ThemedView style={styles.page}>
          {/* Header */}
          <View style={styles.headerCard}>
            <View style={styles.headerTop}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1718468578870-1aff69068150?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <View style={styles.nameRow}>
                  <ThemedText type="title">เอบี</ThemedText>
                  <View style={styles.verifyBadge}>
                    <Text style={styles.verifyBadgeText}>Verified by MSDHS</Text>
                  </View>
                </View>
                <Text style={styles.role}>รับปรึกษาปัญหาชีวิต</Text>
              </View>
              <Pressable style={styles.editBtn}><Text style={styles.editBtnText}>แก้ไข</Text></Pressable>
            </View>

            <View style={styles.tierRow}>
              <Text style={styles.tierLeft}>ระดับ Bronze</Text>
              <Text style={styles.tierRight}>ค่าบริการปัจจุบัน 14%</Text>
            </View>
            <View style={styles.tierDataRow}>
              <Text style={styles.tierLabel}>ยอดขายสะสม</Text>
              <Text style={styles.tierValue}>฿750.00</Text>
            </View>
            <Text style={styles.tierHint}>สะสมอีก ฿14,250 เพื่อรับส่วนลดค่าบริการเหลือ 12%</Text>
          </View>

          {/* Points */}
          <View style={styles.pointsCard}>
            <View style={styles.pointsLeft}>
              <Text style={styles.coin}>🪙</Text>
              <View>
                <Text style={styles.pointsValue}>22.84 Points</Text>
                <Text style={styles.pointsSub}>≈ 22.84 บาท</Text>
              </View>
            </View>
            <Pressable style={styles.pointsButton}><Text style={styles.pointsButtonText}>เติม</Text></Pressable>
          </View>

          {/* Quick actions */}
          <View style={styles.quickGrid}>
            {[
              { k: 'jobs', icon: '🧳', label: 'งานของฉัน' },
              { k: 'ads', icon: '📣', label: 'โปรโมตงาน' },
              { k: 'income', icon: '💰', label: 'รายได้' },
              { k: 'seller', icon: '🏪', label: 'ศูนย์ผู้ขาย' },
              { k: 'rewards', icon: '🎁', label: 'รางวัล' },
              { k: 'coupon', icon: '🎟️', label: 'คูปอง' },
              { k: 'coins', icon: '🪙', label: 'Coins' },
              { k: 'favorite', icon: '❤️', label: 'งานที่ถูกใจ' },
            ].map((a) => (
              <Pressable key={a.k} style={styles.actionItem}>
                <Text style={styles.actionIcon}>{a.icon}</Text>
                <Text style={styles.actionLabel}>{a.label}</Text>
              </Pressable>
            ))}
          </View>

          {/* Language */}
          <View style={styles.listCard}>
            <View style={styles.listRow}>
              <Text style={styles.listLeft}>Language</Text>
              <Text style={styles.listRight}>ภาษาไทย</Text>
            </View>
          </View>

          {/* Settings */}
          <View style={styles.listCard}>
            <View style={styles.listRow}><Text style={styles.listLeft}>ตั้งค่าบัญชี</Text></View>
            <View style={styles.divider} />
            <View style={styles.listRow}><Text style={styles.listLeft}>จัดการการใช้ข้อมูล</Text></View>
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: 16 },
  page: { gap: 16 },
  headerCard: {
    gap: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: 'rgba(10, 126, 164, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(10, 126, 164, 0.25)'
  },
  headerTop: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  avatar: { width: 72, height: 72, borderRadius: 36 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  verifyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(25, 135, 84, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(25, 135, 84, 0.3)',
  },
  verifyBadgeText: { color: '#198754', fontWeight: '700' },
  role: { marginTop: 4, color: '#687076' },
  location: { color: '#687076' },
  tierRow: { flexDirection: 'row', justifyContent: 'space-between' },
  tierLeft: { fontWeight: '800', color: '#0a7ea4' },
  tierRight: { color: '#687076' },
  tierDataRow: { flexDirection: 'row', justifyContent: 'space-between' },
  tierLabel: { color: '#687076' },
  tierValue: { fontWeight: '800' },
  tierHint: { marginTop: 4, color: '#0a7ea4' },
  editBtn: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, backgroundColor: 'white', borderWidth: 1, borderColor: 'rgba(0,0,0,0.08)' },
  editBtnText: { color: '#11181C', fontWeight: '700' },

  pointsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  pointsLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  coin: { fontSize: 28 },
  pointsValue: { fontWeight: '800', fontSize: 18 },
  pointsSub: { color: '#687076' },
  pointsButton: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, backgroundColor: '#0a7ea4' },
  pointsButtonText: { color: 'white', fontWeight: '700' },

  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  actionItem: { width: '23%', alignItems: 'center', gap: 6 },
  actionIcon: { fontSize: 24 },
  actionLabel: { color: '#687076', textAlign: 'center' },

  listCard: { gap: 0, padding: 0, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(0,0,0,0.08)' },
  listRow: { paddingHorizontal: 14, paddingVertical: 14, flexDirection: 'row', justifyContent: 'space-between' },
  listLeft: { fontWeight: '600' },
  listRight: { color: '#687076' },
  divider: { height: 1, backgroundColor: 'rgba(0,0,0,0.08)' },
});


