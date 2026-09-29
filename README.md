# SnapFind

SnapFind is a mobile-first visual discovery app built with Expo and React Native. The current screen lets users browse inspiration by category, search the discovery feed, and save items during the current app session.

The app is UI-first: discovery content is supplied by an in-memory mock repository, and saved items are not persisted between launches. The feature is structured so the mock repository can later be replaced by an HTTP-backed repository for a separate Node.js or Express API.

## Requirements

- Node.js 22.13 or newer
- npm
- For iOS Simulator: macOS, Xcode 26.4 or newer, and an installed iOS Simulator runtime
- For Android: Android Studio and an available emulator

Accept the Xcode license before using Apple build or simulator tools:

```sh
sudo xcodebuild -license accept
```

## Getting Started

Install the dependencies from the committed lockfile:

```sh
npm ci
```

Start the Expo development server:

```sh
npm start
```

Use the Expo terminal shortcuts to open the app in a simulator, or start a platform directly:

```sh
npm run ios
npm run android
npm run web
```

The iOS command requires Xcode and an installed simulator runtime. Expo Go is used for the current UI unless the project later adds native modules that require a development build.

## Project Structure

```text
app/                              Expo Router routes and layouts
assets/                           App fonts and images
components/                       Shared application components and hooks
constants/                        Shared app constants
features/discovery/domain/        Discovery models and repository contract
features/discovery/application/   Feed loading and discovery filtering
features/discovery/data/mock/     Mock feed and mock repository
features/discovery/composition/   Repository and action wiring
features/discovery/presentation/  Discovery screen, UI components, and styles
```

Route files stay in `app/`. Feature behavior and presentation live outside the route tree so the route can remain a small composition point.

## Discovery Data and Future API

`DiscoveryRepository` defines the data boundary for the discovery feature. `MockDiscoveryRepository` currently implements it with local sample content. When an API is available, add an HTTP repository that implements the same interface and select it in `features/discovery/composition/discoveryServices.ts`.

Keep the Express server in its own backend project or service. The mobile app should communicate with it through an HTTP API; do not import Express or server-only modules into the React Native bundle. Any `EXPO_PUBLIC_` environment variable is included in the client app and must not contain secrets.

## Checks

Run the configured lint command and TypeScript check:

```sh
npm run lint
npx tsc --noEmit
```

To verify that the JavaScript bundle can be generated for iOS:

```sh
npx expo export --platform ios
```

There is currently no automated test script configured in `package.json`.
