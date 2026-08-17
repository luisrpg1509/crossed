# Crossed

Proximity-based social discovery app. See [AGENTS.md](./AGENTS.md) for the project's Expo version notes.

## Stack

- React Native + Expo (SDK 57)
- TypeScript
- Expo Router (file-based routing)
- Android testing via a Pixel 8 emulator

## Get started

```bash
npm install
npx expo start
```

Then press `a` in the terminal (or run `npm run android`) to open the app in the Android emulator.

## Project structure

```
src/
  app/          # Expo Router screens (file-based routing)
  components/   # Reusable UI building blocks
  constants/    # Theme constants (colors, spacing, fonts)
  hooks/        # Shared hooks
  global.css    # Web font variables
assets/
  images/       # App icons, splash image
```

This project is in early development — no auth, backend, matching, or chat yet.

## Learn more

- [Expo documentation](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router docs](https://docs.expo.dev/versions/v57.0.0/router/introduction/)
