## โครงการ: Mobile App (Expo + React Native)

แอปพลิเคชันมือถือแบบ Cross‑platform พัฒนาด้วย React Native และ Expo Router โครงสร้างเส้นทางเป็นแบบไฟล์ (file‑based routing) รองรับ Android, iOS และ Web ภายในโปรเจกต์มีตัวอย่างหน้าใช้งานหลัก 4 แท็บ ได้แก่ Home, Explore, Game และ Profile พร้อมคอมโพเนนต์ UI ที่รีใช้ซ้ำได้และระบบธีมแบบ Light/Dark

### คุณสมบัติหลัก
- **Expo Router**: จัดการเส้นทางด้วยโครงสร้างไดเรกทอรี `app/` อย่างเป็นระบบ
- **แท็บหลัก 4 หน้า**: `Home`, `Explore`, `Game`, `Profile` พร้อมโค้ดตัวอย่างที่แยกส่วนชัดเจน
- **ธีมมืด/สว่าง**: ใช้ `ThemedText`, `ThemedView`, และ `useColorScheme` เพื่อเปลี่ยนธีมอัตโนมัติ
- **คอมโพเนนต์พร้อมใช้**: เช่น `Collapsible`, `ParallaxScrollView`, และ `HapticTab`
- **โครงสร้างชัดเจน**: จัดไฟล์แยกส่วน `components/`, `hooks/`, `constants/` ช่วยให้ดูแลรักษาง่าย

### เทคโนโลยีที่ใช้
- React 19, React Native 0.79
- Expo SDK 53, Expo Router 5
- React Navigation, Reanimated, Gesture Handler, Safe Area Context, Screens

### โครงสร้างโปรเจกต์โดยสรุป
```text
mobile-app/
  app/
    _layout.tsx
    (tabs)/
      _layout.tsx
      index.tsx       # Home
      explore.tsx     # Explore
      game.tsx        # Game
      profile.tsx     # Profile
    +not-found.tsx
  components/
    ui/               # สัญลักษณ์/พื้นหลังแท็บ
    *.tsx             # คอมโพเนนต์ที่รีใช้ซ้ำได้
  hooks/              # โฮกธีม/ยูทิลิตี้
  constants/          # สี และค่าคงที่ต่าง ๆ
  assets/             # ฟอนต์/ภาพ
  package.json
```

### เริ่มต้นใช้งาน
1) ติดตั้งไลบรารี
```bash
npm install
```

2) เริ่มรันแอป
```bash
npx expo start
```

เมื่อรันแล้ว คุณสามารถเลือกเปิดแอปได้ผ่าน:
- Development build
- Android Emulator
- iOS Simulator
- หรือแอป Expo Go

ไฟล์ทั้งหมดสำหรับเริ่มพัฒนาจะอยู่ในไดเรกทอรี `app/` และโปรเจกต์นี้ใช้ [file‑based routing](https://docs.expo.dev/router/introduction).

### สคริปต์ที่ใช้บ่อย
- `npm run android` เปิดบน Android Emulator
- `npm run ios` เปิดบน iOS Simulator (macOS)
- `npm run web` เปิดบนเว็บ
- `npm run reset-project` สร้างโครงใหม่แบบว่าง โดยย้ายโค้ดตัวอย่างไปที่ `app-example/`

### ธีมและสไตล์
- ค่าธีมหลักอยู่ใน `constants/Colors.ts`
- ฮุค `useColorScheme` และคอมโพเนนต์ `ThemedText`/`ThemedView` ใช้สำหรับซิงก์ธีม

### แหล่งข้อมูลแนะนำ
- เอกสาร Expo: [https://docs.expo.dev](https://docs.expo.dev)
- บทเรียนเริ่มต้น Expo: [https://docs.expo.dev/tutorial/introduction/](https://docs.expo.dev/tutorial/introduction/)
- Expo บน GitHub: [https://github.com/expo/expo](https://github.com/expo/expo)
- ชุมชน Discord: [https://chat.expo.dev](https://chat.expo.dev)

---
ปรับแต่งและขยายหน้าต่าง ๆ ได้ตามต้องการ โดยยึดโครงสร้างไฟล์ใน `app/(tabs)/` เพื่อคงความเป็นระบบในระยะยาว
