# DesignliTest

This is a React Native project built using the `@react-native-community/cli`. Below is a list of libraries used in the project and their purposes:

## Libraries Used

### Dependencies

- **@notifee/react-native**: Used for handling local push notifications when stock prices exceed alert thresholds.
- **@react-native-async-storage/async-storage**: Provides persistent storage for data.
- **@reduxjs/toolkit**: Simplifies state management with Redux.
- **axios**: Used for making HTTP requests.
- **phosphor-react-native**: Provides icon components for React Native.
- **react-native-reanimated**: Enables animations in React Native.
- **react-native-wagmi-charts**: Provides charting capabilities.
- **redux-persist**: Persists Redux state across app reloads.

## Challenges Completed

### Auth0 Authentication

Auth0 authentication was successfully integrated into the project. Callback and logout URLs were configured for both iOS and Android platforms. The `AuthButton` component was implemented using the approach recommended by the Auth0 library, as it provides optimal compatibility and functionality.

### Local Push Notifications

Local push notifications were added using `@notifee/react-native`. Notifications are triggered when stock prices exceed user-defined alert thresholds, ensuring timely updates for users.

### Real-Time Stock Updates

Real-time stock updates were integrated using the FinHub API. This allows users to receive live updates on stock prices directly within the app.

## Architectural Decisions

### Class Components vs Functional Components

Most components were refactored to use class-based architecture for better maintainability and scalability. However, some components, such as `Header` and `AuthButton`, were retained as functional components due to library constraints:

- **Header**: Uses `useNavigation` for navigation, as the `withNavigation` HOC was removed from the library and downgrading was not optimal.
- **AuthButton**: Implemented using the approach recommended by the Auth0 library, which relies on functional components.

## Running the Project

### Step 1: Install Dependencies

Run the following command to install all dependencies:

```sh
npm install
```

### Step 2: Start Metro

Start the Metro bundler:

```sh
npm start
```

### Step 3: Build and Run the App

#### Android

```sh
npm run android
```

#### iOS

Install CocoaPods dependencies:

```sh
bundle install
bundle exec pod install
```

Then run:

```sh
npm run ios
```

### Troubleshooting

Refer to the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting) for help.
