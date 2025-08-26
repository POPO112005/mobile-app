## Project: Mobile App (Expo + React Native)

A cross‑platform mobile application for job searching aimed at pre-aging users (50-59 years old). This is currently UI only and will be developed into a complete prototype.

### Main Features
- **Expo Router**: Route management using a structured `app/` directory
- **4 Main Tabs**: `Home`, `Explore`, `Game`, `Profile` with clear, modular example code
- **Dark/Light Theme**: Uses `ThemedText`, `ThemedView`, and `useColorScheme` for automatic theme switching
- **Reusable Components**: Such as `Collapsible`, `ParallaxScrollView`, and `HapticTab`
- **Clear Structure**: Separated files in `components/`, `hooks/`, `constants/` for easy maintenance

### Technologies Used
- React 19, React Native 0.79
- Expo SDK 53, Expo Router 5
- React Navigation, Reanimated, Gesture Handler, Safe Area Context, Screens

### Project Structure Overview
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
    ui/               # Tab icons/backgrounds
    *.tsx             # Reusable components
  hooks/              # Theme/util hooks
  constants/          # Colors and other constants
  assets/             # Fonts/images
  package.json
```

### Getting Started
1) Install dependencies
```bash
npm install
```

2) Start the app
```bash
npx expo start
```

Once running, you can open the app via:
- Development build
- Android Emulator
- iOS Simulator
- or the Expo Go app

All development files are in the `app/` directory, and this project uses [file‑based routing](https://docs.expo.dev/router/introduction).

### Common Scripts
- `npm run android` Open on Android Emulator
- `npm run ios` Open on iOS Simulator (macOS)
- `npm run web` Open on web
- `npm run reset-project` Create a new blank project, moving example code to `app-example/`

### Theme & Styling
- Main theme values are in `constants/Colors.ts`
- The `useColorScheme` hook and `ThemedText`/`ThemedView` components are used for theme syncing

### Recommended Resources
- Expo Docs: [https://docs.expo.dev](https://docs.expo.dev)
- Expo Getting Started Tutorial: [https://docs.expo.dev/tutorial/introduction/](https://docs.expo.dev/tutorial/introduction/)
- Expo on GitHub: [https://github.com/expo/expo](https://github.com/expo/expo)
- Discord Community: [https://chat.expo.dev](https://chat.expo.dev)


