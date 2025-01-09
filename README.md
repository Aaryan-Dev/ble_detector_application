This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

*** To run on IOS first - cd ios -> pod install [ if facing isses delete "Pods" folder and "Podfile.lock" file ] ***
*** To run on Android first - yarn android [ if facing isses delete .gradle folder] ***

[Codegen] *https://reactnative.dev/docs/the-new-architecture/using-codegen*

_Android_
Codegen for Android is integrated with the React Native Gradle Plugin (RNGP). The RNGP contains a task that can be invoked that reads the configurations defined in the package.json file and execute Codegen. To run the gradle task, first navigate inside the android folder of your project. Then run:

./gradlew generateCodegenArtifactsFromSchema

_iOS_
Codegen for iOS relies on some Node scripts that are invoked during the build process. The scripts are located in the SampleApp/node_modules/react-native/scripts/ folder.

The main script is the generate-codegen-artifacts.js script. To invoke the script, you can run this command from the root folder of your app:

node node_modules/react-native/scripts/generate-codegen-artifacts.js

Usage: generate-codegen-artifacts.js -p [path to app] -t [target platform] -o [output path]

Options:
--help Show help [boolean]
--version Show version number [boolean]
-p, --path Path to the React Native project root. [required]
-t, --targetPlatform Target platform. Supported values: "android", "ios",
"all". [required]
-o, --outputPath Path where generated artifacts will be output to.

where:

--path is the path to the root folder of your app.
--outputPath is the destination where Codegen will write the generated files.
--targetPlatform is the platform you'd like to generate the code for.
The Generated Code

Running the script with these arguments:

node node_modules/react-native/scripts/generate-codegen-artifacts.js \
 --path . \
 --outputPath ios/ \
 --targetPlatform ios

**The Codegen CLI**

Calling Gradle or manually calling a script might be hard to remember and it requires a lot of ceremony.

To simplify it, we created a CLI tool that can help you running those tasks: the Codegen cli. This command runs @react-native/codegen for your project. The following options are available:

npx @react-native-community/cli codegen --help
Usage: rnc-cli codegen [options]

Options:
--verbose Increase logging verbosity
--path <path> Path to the React Native project root. (default: "/Users/MyUsername/projects/my-app")
--platform <string> Target platform. Supported values: "android", "ios", "all". (default: "all")
--outputPath <path> Path where generated artifacts will be output to.
-h, --help display help for command

**Native Development** *https://reactnative.dev/docs/native-platform*


All Colors reference *https://www.computerhope.com/htmcolor.htm*