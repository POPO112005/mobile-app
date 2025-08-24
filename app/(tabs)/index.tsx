import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const categories = [
    { key: 'recommended', label: 'แนะนำ', emoji: '⭐' },
    { key: 'graphic', label: 'รับเลี้ยงเด็ก/คนชรา', emoji: '🧑‍🍼' },
    { key: 'beauty', label: 'รับดูดวง', emoji: '🔮' },
    { key: 'photo', label: 'รับปรึกษาปัญหาชีวิต', emoji: '🧭' },
    { key: 'dev', label: 'รับปรึกษาความรัก', emoji: '💞' },
  ];

  const popular = [
    { id: '1', title: 'รับจองคิว', uri: 'https://images.unsplash.com/photo-1584614207146-a64524f5806a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', title: 'รับปรึกษาความรัก', uri: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600' },
    { id: '3', title: 'รับปรึกษาปัญหาชีวิต', uri: 'https://images.unsplash.com/photo-1631217866870-53feedcb8b7d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', title: 'รับเลี้ยงเด็ก/คนชรา', uri: 'https://media.istockphoto.com/id/2202816719/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/taking-care-elderly.jpg?s=1024x1024&w=is&k=20&c=36f1caQKjvEekLHvCnnZbxzQ9wAtR3yKjIXLvOi1BQU=' },
  ];

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: Colors[colorScheme].background }]}
      edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top, paddingBottom: 24 + insets.bottom }]}> 
        <ThemedView style={styles.pagePadding}>
        <ThemedText type="title">สำรวจบริการรอบตัวคุณ</ThemedText>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchEmoji}>✨</Text>
          <Text style={styles.searchPlaceholder}>พิมพ์สิ่งที่ต้องการ เช่น ดูดวงรายเดือน</Text>
          <View style={styles.searchRight}>
            <Text style={styles.searchAIBadge}>AI</Text>
            <Pressable style={styles.searchButton}>
              <Text style={styles.searchButtonText}>ค้นหา</Text>
            </Pressable>
          </View>
        </View>

        {/* Points card */}
        <View style={styles.pointsCard}>
          <View style={styles.pointsLeft}>
            <Text style={styles.coin}>🪙</Text>
            <View>
              <Text style={styles.pointsValue}>22.84 Points</Text>
              <Text style={styles.pointsSub}>≈ 22.84 บาท</Text>
            </View>
          </View>
          <Pressable style={styles.pointsButton}>
            <Text style={styles.pointsButtonText}>เพิ่ม Point</Text>
          </Pressable>
        </View>

        {/* Promo banners */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerScroll}>
          {[1, 2, 3].map((n) => (
            <View key={n} style={[styles.bannerCard, { backgroundColor: bannerColor(n) }]}>
              <Text style={styles.bannerTitle}>ดีลพิเศษ {n}00 เดียวได้ 2 บริการ</Text>
              <Text style={styles.bannerSub}>ปรึกษา/ไลฟ์สไตล์</Text>
            </View>
          ))}
        </ScrollView>

        {/* Categories as square cards */}
        <ThemedText style={styles.sectionTitle}>หมวดหมู่ยอดฮิต</ThemedText>
        <View style={styles.categoryGrid}>
          {categories.map((c) => (
            <Pressable key={c.key} style={styles.categoryCard}>
              <View style={styles.categoryIconBubble}>
                <Text style={styles.categoryIcon}>{c.emoji}</Text>
              </View>
              <Text style={styles.categoryLabel}>{c.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Popular grid */}
        <ThemedText style={styles.sectionTitle}>งานยอดนิยม</ThemedText>
        <View style={styles.grid}>
          {popular.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

function bannerColor(index: number) {
  switch (index) {
    case 1:
      return '#FDE68A';
    case 2:
      return '#C7D2FE';
    default:
      return '#A7F3D0';
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingBottom: 24,
  },
  pagePadding: {
    padding: 16,
    gap: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(10, 126, 164, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(10, 126, 164, 0.25)',
  },
  searchEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  searchPlaceholder: {
    flex: 1,
    color: '#687076',
  },
  searchRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  searchAIBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0a7ea4',
  },
  searchButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#0a7ea4',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  pointsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  pointsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  coin: {
    fontSize: 28,
  },
  pointsValue: {
    fontWeight: '800',
    fontSize: 18,
  },
  pointsSub: {
    color: '#687076',
  },
  pointsButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#0a7ea4',
  },
  pointsButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  bannerScroll: {
    marginTop: 4,
  },
  bannerCard: {
    width: 300,
    height: 120,
    borderRadius: 14,
    padding: 14,
    marginRight: 12,
    justifyContent: 'space-between',
  },
  bannerTitle: {
    fontWeight: '800',
    fontSize: 20,
  },
  bannerSub: {
    color: '#374151',
  },
  sectionTitle: {
    marginTop: 8,
    fontWeight: '700',
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 8,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 4,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    padding: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 8,
  },
  categoryIconBubble: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(10, 126, 164, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: { fontSize: 22 },
  categoryLabel: { fontWeight: '600', textAlign: 'center' },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  chipActive: {
    backgroundColor: 'rgba(10, 126, 164, 0.1)',
    borderColor: 'rgba(10, 126, 164, 0.3)',
  },
  chipText: {
    color: '#11181C',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#0a7ea4',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  card: {
    width: '48%',
    gap: 6,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  cardTitle: {
    fontWeight: '600',
  },
});
