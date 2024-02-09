# Getting Started
## Step 1: Install Android Studio
Install Android Studio from https://developer.android.com/studio/index.html?authuser=1.
**Note**: Make sure the boxes next to all of the following items are checked

```bash
Android SDK
Android SDK Platform
Android Virtual Device
```

## Step 2: Install the Android SDK

1. Open SDK Manger in Android Studio
2. Look for and expand the Android 13(Tiramusu) and check Android SDK Platform 33 and Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image.
3. Make sure 33.0.0 is selected in Android SDK Build-Tools

## Step 3: Configure the ANDROID_HOME environment variable
1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again
3. Click on Change my environment variables
4. Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
**Note**: You can find the actual location of the SDK in the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK.

## Step 4: Add platform-tools to Path
1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again
3. Click on Change my environment variables
4. Select the Path variable.
5. Click Edit.
6. Click New and add the path to platform-tools to the list.
**Note**: The default location for this folder is: %LOCALAPPDATA%\Android\Sdk\platform-tools

## Step 5: Create a new application
1. Open powershell and change directory to the folder where the application will be created.
2. Run commend "npx react-native@latest init {project name}"

## Step 6: Create a new virtual device
1. Open Android studio
2. Click the Device Manager on the right menu bar.
3. Create virtual device.
4. Chose any phone and click next.
5. Use Tiramisu33 as system image and click next.
6. Click Finish.

## Step 7: Run Application
1. Click Terminal on the left menu bar.
2. Run command "npm start".
3. Enter "a" to run the application on Android.
