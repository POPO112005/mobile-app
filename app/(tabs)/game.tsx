import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from 'react';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function GameScreen() {
  const [hasClickedSuspicious, setHasClickedSuspicious] = useState<boolean>(false);
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';

  const suspiciousLink = 'http://bank-login-secure-verify.example-phish.com';

  function handleSuspiciousPress() {
    setHasClickedSuspicious(true);
    Alert.alert(
      'ระวัง! คุณเกือบโดนหลอก',
      'การกดลิงก์สุ่มเสี่ยงอาจทำให้เงินในบัญชีถูกถอนออกโดยไม่ได้รับอนุญาต อย่ากรอกข้อมูลส่วนตัวหรือรหัสผ่านในเว็บไซต์ที่ไม่น่าเชื่อถือ',
      [{ text: 'เข้าใจแล้ว' }]
    );
  }

  function handleSafePress() {
    Alert.alert('ดีมาก!', 'คุณเลือกการกระทำที่ปลอดภัย');
  }

  function openEducation() {
    Linking.openURL('https://www.thaipoliceonline.com/');
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: Colors[colorScheme].background }]}
      edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top, paddingBottom: 24 + insets.bottom }] }>
        <ThemedView style={styles.card}>
        <ThemedText type="title">ชัวร์ก่อนคลิก</ThemedText>
        <ThemedText>
          แบบฝึกหัดสั้นๆ เพื่อเรียนรู้การสังเกตลิงก์อันตรายและการหลีกเลี่ยงการถูกหลอกออนไลน์
        </ThemedText>

        <View style={styles.section}>
          <ThemedText type="subtitle">สถานการณ์</ThemedText>
          <ThemedText>
            คุณได้รับ SMS แจ้งเตือนว่าบัญชีธนาคารถูกระงับ ให้กดลิงก์ด้านล่างเพื่อยืนยันตัวตน
          </ThemedText>

          <View style={styles.linkBox}>
            <Text style={styles.linkLabel}>ลิงก์ที่แนบมา:</Text>
            <Pressable onPress={handleSuspiciousPress} style={styles.fakeLinkPressable}>
              <Text style={styles.fakeLink}>{suspiciousLink}</Text>
            </Pressable>
          </View>

          {hasClickedSuspicious && (
            <View style={styles.warningBox}>
              <Text style={styles.warningTitle}>ตัวอย่างผลเสียจากการกดลิงก์สุ่มเสี่ยง</Text>
              <Text style={styles.warningText}>
                เงินในบัญชีของคุณอาจถูกถอนออกไปโดยไม่ได้รับอนุญาต และข้อมูลส่วนตัวของคุณอาจถูกนำไปใช้ในทางที่ผิด
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle">จะทำอย่างไรดี?</ThemedText>
          <View style={styles.actionsRow}>
            <Pressable onPress={handleSuspiciousPress} style={[styles.actionBtn, styles.dangerBtn]}>
              <Text style={styles.dangerText}>กดลิงก์ทันที</Text>
            </Pressable>
            <Pressable onPress={handleSafePress} style={[styles.actionBtn, styles.safeBtn]}>
              <Text style={styles.safeText}>ไม่กด/ตรวจสอบก่อน</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.tipsBox}>
          <ThemedText type="subtitle">เคล็ดลับป้องกัน</ThemedText>
          <Text style={styles.tip}>- ตรวจสอบโดเมนแปลกๆ เช่น ใช้คำว่า verify, secure ผิดที่</Text>
          <Text style={styles.tip}>- อย่ากรอกข้อมูลส่วนตัวผ่านลิงก์ที่ส่งมาทาง SMS/แชท</Text>
          <Text style={styles.tip}>- ติดต่อธนาคารผ่านช่องทางทางการเท่านั้น</Text>
          <Pressable onPress={openEducation} style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>แหล่งความรู้เพิ่มเติม</Text>
          </Pressable>
        </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  card: {
    gap: 16,
  },
  section: {
    gap: 8,
  },
  linkBox: {
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
  },
  linkLabel: {
    fontWeight: '600',
    marginBottom: 6,
  },
  fakeLinkPressable: {
    paddingVertical: 6,
  },
  fakeLink: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
  warningBox: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(220, 53, 69, 0.3)',
  },
  warningTitle: {
    fontWeight: '700',
    marginBottom: 6,
    color: '#dc3545',
  },
  warningText: {
    color: '#dc3545',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  dangerBtn: {
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(220, 53, 69, 0.4)',
  },
  safeBtn: {
    backgroundColor: 'rgba(25, 135, 84, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(25, 135, 84, 0.4)',
  },
  dangerText: {
    color: '#dc3545',
    fontWeight: '600',
  },
  safeText: {
    color: '#198754',
    fontWeight: '600',
  },
  tipsBox: {
    gap: 6,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(13, 110, 253, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(13, 110, 253, 0.2)',
  },
  tip: {
    color: '#11181C',
  },
  learnMoreBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#0a7ea4',
  },
  learnMoreText: {
    color: 'white',
    fontWeight: '600',
  },
});


