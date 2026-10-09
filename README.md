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

## Architecture

```text
app/                                      Expo Router routes and app composition
shared/hooks/                             Platform-aware React Native hooks
shared/theme/                             App-wide theme values
shared/ui/                                Shared UI components
features/discovery/domain/entities/       Discovery business models
features/discovery/domain/repositories/   Repository contracts
features/discovery/domain/useCases/       Feature actions and business rules
features/discovery/data/dataSources/      Local or remote data sources
features/discovery/data/repositories/     Repository implementations
features/discovery/di/                    Feature dependency wiring
features/discovery/presentation/screens/  Screen-level UI
features/discovery/presentation/components/ Reusable feature UI
```

This follows Clean Architecture with feature-first organization. The `app/` directory is the Expo Router equivalent of an app's route table; its route files stay thin and connect a screen to its dependencies. Domain entities, repository contracts, and use cases do not depend on React Native or data implementations. Data repositories implement domain contracts, while `di/` selects the current mock implementation.

For Flutter terminology: domain entities and use cases map directly; repository interfaces are domain contracts; data sources and repository implementations belong to `data`; presentation screens/components are Flutter pages/widgets. React hooks hold screen-local state here, so the app does not require Provider, Riverpod, or Bloc for its current scope.

## Discovery Data and Future API

`DiscoveryRepository` defines the data boundary for the discovery feature. `MockDiscoveryRepository` currently implements it with local sample content. When an API is available, add an HTTP repository that implements the same interface and select it in `features/discovery/di/discoveryDependencies.ts`.

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
