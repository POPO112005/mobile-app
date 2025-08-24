import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: Colors[colorScheme].background }]}
      edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top, paddingBottom: 24 + insets.bottom }] }>
        <ThemedView style={styles.card}>
          <View style={styles.headerRow}>
            <Image
              source={require('@/assets/images/pre_aging.jpg')}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <View style={styles.nameRow}>
                <ThemedText type="title">ชื่อแซนวิส</ThemedText>
                <View style={styles.verifyBadge}>
                  <Text style={styles.verifyBadgeText}>Verified by MSDHS</Text>
                </View>
              </View>
              <Text style={styles.role}>รับปรึกษาปัญหาชีวิต</Text>
              <Text style={styles.location}>Bangkok, Thailand</Text>
            </View>
          </View>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>4.8</Text>
              <Text style={styles.metaLabel}>คะแนน</Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>96</Text>
              <Text style={styles.metaLabel}>เคสงาน</Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>92%</Text>
              <Text style={styles.metaLabel}>สำเร็จ</Text>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText type="subtitle">เกี่ยวกับบริการ</ThemedText>
            <Text style={styles.about}>
            ที่ปรึกษาปัญหาชีวิต ประสบการณ์ทำงานกับคนทำงาน นักศึกษา และผู้ประกอบการกว่า 6 ปี
            ช่วยสำรวจเป้าหมาย จัดการความเครียด วางแผนเส้นทางชีวิต และพัฒนาทักษะการสื่อสารอย่างมั่นใจ
            </Text>
          </View>

          <View style={styles.section}>
            <ThemedText type="subtitle">ทักษะ</ThemedText>
            <View style={styles.chipsRow}>
              {['วางแผนเป้าหมายชีวิต', 'จัดการความเครียด', 'สมดุลงาน', 'สื่อสารอย่างมั่นใจ'].map((s) => (
                <View key={s} style={styles.chip}>
                  <Text style={styles.chipText}>{s}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText type="subtitle">บริการ</ThemedText>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceTitle}>ปรึกษาเบื้องต้น 30 นาที</Text>
              <Text style={styles.serviceDesc}>ทำความเข้าใจปัญหาและวางแผนแนวทางแก้ไขเบื้องต้น</Text>
              <Text style={styles.servicePrice}>ฟรี</Text>
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>จองเวลาลองใช้</Text>
              </Pressable>
            </View>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceTitle}>ให้คำปรึกษาเชิงลึก 60 นาที</Text>
              <Text style={styles.serviceDesc}>ลงรายละเอียด แผนปฏิบัติ และการติดตามผล</Text>
              <Text style={styles.servicePrice}>เริ่มต้น 990 THB</Text>
              <Pressable style={styles.secondaryBtn}>
                <Text style={styles.secondaryBtnText}>ดูรีวิว</Text>
              </Pressable>
            </View>
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: 16 },
  card: { gap: 16 },
  headerRow: { flexDirection: 'row', gap: 12, alignItems: 'center' },
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
  metaRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaItem: { alignItems: 'center', flex: 1 },
  metaDivider: { width: 1, height: 24, backgroundColor: 'rgba(0,0,0,0.1)' },
  metaValue: { fontWeight: '800', fontSize: 18 },
  metaLabel: { color: '#687076' },
  section: { gap: 8 },
  about: { lineHeight: 20 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(10, 126, 164, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(10, 126, 164, 0.25)',
  },
  chipText: { color: '#0a7ea4', fontWeight: '600' },
  serviceCard: {
    gap: 6,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  serviceTitle: { fontWeight: '700' },
  serviceDesc: { color: '#687076' },
  servicePrice: { fontWeight: '700', color: '#0a7ea4' },
  primaryBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#0a7ea4',
  },
  primaryBtnText: { color: 'white', fontWeight: '700' },
  secondaryBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(10, 126, 164, 0.08)',
  },
  secondaryBtnText: { color: '#0a7ea4', fontWeight: '700' },
});
