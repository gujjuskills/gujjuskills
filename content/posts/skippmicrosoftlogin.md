---
title: "How to Skip Microsoft Account Login During Windows 11 Installation"
date: 2026-09-23T01:00:00Z
image: /images/post/skipmicrosoftlogin.webp
categories: ["Computer"]
featured: true
draft: false
---

Windows 11 may ask you to connect to the internet and sign in with a Microsoft account during the first time setup.

If you prefer to create a **local account**, you can use the offline setup options available on your Windows 11 installation build.

Follow the steps below carefully.

## Step 1: Start Windows 11 Installation

First, start your computer using your Windows 11 installation **USB** drive.

When the Windows Setup screen appears, select your:

**Language to install**

**Time and currency format**

**Keyboard or input method**

Then click **Next**.

Click **Install now** and continue with the normal Windows installation.

## Step 2: Select Windows Edition

If Windows Setup asks you to select an edition, choose the edition that matches your Windows license.

For example:

**Windows 11 Home**

**Windows 11 Pro**

Click **Next**.

Continue through the installation process.

## Step 3: Wait for Windows Installation

Windows will copy the required files and install Windows 11.

Your computer may restart several times during this process.

Do not remove the **USB** drive until Windows has progressed into the initial setup process.

## Step 4: Reach the Network Connection Screen

After Windows installation is complete, Windows 11 will start the Out of Box Experience, commonly called **OOBE**.

You may see a screen similar to:

**Let's connect you to a network**

Windows may ask you to connect to WiFi or Ethernet.

At this point, do not sign in with a Microsoft account.

## Step 5: Open Command Prompt

On the network connection screen, press:

 Shift + **F10**

On some laptops, you may need to press:

```text Shift + Fn + **F10** ```

A black **Command Prompt** window should appear.

You may see something similar to:

```text X:\Sources> ```

## Step 6: Enter the Bypass Command

Type the following command:

```cmd **OOBE**\**BYPASSNRO** ```

Make sure the spelling and backslash are correct.

Press **Enter**.

Windows should restart automatically.

## Step 7: Wait for Windows to Restart

After you press Enter, Windows may restart.

Allow the computer to complete the restart.

You will eventually return to the Windows 11 setup process.

## Step 8: Return to the Network Screen

Continue through the setup screens until Windows again asks you to connect to a network.

Look for the option:

**I don't have internet**

Click it.

If you do not see this option, make sure your computer is not connected to Ethernet or WiFi and check the setup screen again.

## Step 9: Select *Continue with Limited Setup*

Windows may now show a screen asking you to connect to the internet.

Look for:

**Continue with limited setup**

Click this option.

Windows will allow you to continue the setup without signing in with a Microsoft account.

## Step 10: Create Your Local Account

Windows will ask:

**Who's going to use this device?**

Enter the username that you want to use.

For example:

```text GujjuSkills ```

Click **Next**.

This will be the name associated with your Windows local account.

## Step 11: Create a Password

Windows may ask you to create a password.

Enter a strong password that you can remember.

For example:

```text Your own secure password ```

Do not use an example password from an online tutorial as your actual password.

Click **Next**.

Depending on your Windows version, you may also have an option to continue without a password.

## Step 12: Answer Security Questions

If Windows asks you to choose security questions, select the questions provided by Windows.

Enter answers that you can remember.

These may be used to help recover access to your local account.

Click **Next**.

## Step 13: Configure Privacy Settings

Windows will show several privacy options.

These can include settings related to:

**Location**

**Find My Device**

**Diagnostic Data**

**Inking and Typing**

**Tailored Experiences**

**Advertising ID**

Review each setting.

Select the options according to your preference.

Then continue with the setup.

## Step 14: Wait for Windows to Complete Setup

Windows will now prepare your desktop.

You may see messages such as:

**Getting things ready**

**This may take a few minutes**

**Almost there**

Wait until the Windows desktop appears.

Do not turn off the computer while Windows is completing this process.

## Step 15: Windows 11 Desktop Appears

Once setup is complete, the Windows 11 desktop will appear.

You can now sign in using the local account you created.

You did not need to connect that Windows login to a Microsoft account during the initial setup.

# How to Check Your Account Type

After reaching the desktop, open:

**Settings**

Then select:

**Accounts**

Look at the account information shown on the Accounts page.

If you created a local account, Windows will identify it as a **Local account**.

# What If OOBE\BYPASSNRO Does Not Work?

Windows 11 setup behavior can differ between installation builds.

If the following command does not work:

```cmd **OOBE**\**BYPASSNRO** ```

you can try opening Command Prompt again and using:

```cmd start ms-cxh:localonly ```

Press **Enter**.

If your Windows 11 build supports this command, it may open the local account creation interface.

## Important Note

Not every Windows 11 version behaves exactly the same way.

Microsoft can change the **OOBE** setup process in newer Windows 11 builds, so a method that works on one installation image may not work on another.

# What If Shift + F10 Does Not Open Command Prompt?

If:

```text Shift + **F10** ```

does not work, try:

```text Shift + Fn + **F10** ```

This is common on some laptops where the function keys require the **Fn** key.

Make sure you press the keys while you are on the Windows setup screen.

# What If *I Don't Have Internet* Is Missing?

First check whether the computer is connected to the internet.

If an Ethernet cable is connected, disconnect it temporarily.

If the computer is connected to WiFi, disconnect the WiFi connection if possible.

Then return to the network setup screen.

You can also reopen Command Prompt and run:

```cmd **OOBE**\**BYPASSNRO** ```

Then allow Windows to restart and check the network screen again.

# Can You Use Windows 11 Without a Microsoft Account?

Yes. A local Windows account can be used for many normal Windows functions.

You can:

- Sign in to Windows
- Open File Explorer
- Manage files and folders
- Install desktop applications
- Change Windows settings
- Use Windows offline
- Create additional local users
- Protect the computer with a password

Some Microsoft online services may require a Microsoft account.

# Can You Add a Microsoft Account Later?

Yes.

You can start with a local account and connect a Microsoft account later if you need Microsoft online services.

Open:

**Settings → Accounts**

Then use the available account options to connect your Microsoft account.

This means you do not necessarily have to use a Microsoft account during the initial Windows setup.

# Local Account vs Microsoft Account

| Feature | Local Account | Microsoft Account |
|---|---|---|
| Sign in to Windows | Yes | Yes |
| Works offline | Yes | Windows sign in can work offline after setup |
| Microsoft account required | No | Yes |
| OneDrive integration | Limited | Available |
| Microsoft Store account features | Limited | Available |
| Windows settings synchronization | No | Available |
| Cloud account integration | No | Yes |
| Can be added later | Yes | Already connected |

# Important Tips

## Tip 1: Keep Your Local Password Safe

If you create a local account password, make sure you remember it.

A local account is not the same as an online Microsoft account, so account recovery works differently.

## Tip 2: Do Not Confuse Account Setup With Activation

Skipping Microsoft account login does **not** activate Windows.

Windows activation is a separate process that depends on your license or digital entitlement.

## Tip 3: Disconnect the Internet if Necessary

If Windows keeps forcing you toward online setup, disconnect Ethernet or WiFi and return to the setup screen.

## Tip 4: Windows Builds Can Change

Commands and setup screens can change between Windows 11 versions.

If a command does not work, do not repeatedly enter random commands.

Check the Windows installation build and use a method appropriate for that build.

# Quick Step Summary

The complete process is:

**1. Start Windows 11 installation**

↓

**2. Complete the normal installation**

↓

**3. Reach the network connection screen**

↓

**4. Press Shift + **F10****

↓

**5. Enter `**OOBE**\**BYPASSNRO**`**

↓

**6. Press Enter**

↓

**7. Allow Windows to restart**

↓

**8. Return to the network screen**

↓

**9. Click *I don't have internet***

↓

**10. Click *Continue with limited setup***

↓

**11. Enter your local username**

↓

**12. Create a password**

↓

**13. Configure privacy settings**

↓

**14. Finish Windows setup**

↓

**15. Start using Windows 11 with your local account**

# Alternative Command

If the first command does not work on your Windows 11 installation build, try:

```cmd start ms-cxh:localonly ```

Press **Enter** and follow the local account setup screen if it appears.

# Frequently Asked Questions

## Can I install Windows 11 without signing in to Microsoft?

On Windows 11 installation builds that provide an offline or local account setup path, you can complete the initial setup with a local account instead of connecting the Windows login to a Microsoft account.

## Does a local account need internet?

A local account itself does not require an internet connection for normal Windows sign in.

## Can I use the Microsoft Store with a local account?

Some Microsoft Store features may require you to sign in with a Microsoft account.

## Can I use OneDrive with a local account?

Yes, but OneDrive requires its own Microsoft account sign in for cloud synchronization.

## Can I switch to a Microsoft account later?

Yes. You can connect a Microsoft account later through Windows Settings.

## Will this method remove Microsoft from Windows?

No. It only allows you to use a local Windows account during setup. Microsoft services and Windows components remain part of Windows.

## Does this method delete my files?

The commands described here are used during Windows initial setup and do not themselves erase your files.

However, be extremely careful when installing Windows because options involving deleting or formatting partitions can permanently remove data.

# Final Result

After completing these steps, you can use Windows 11 with a local account instead of connecting your Windows login to a Microsoft account during the initial setup.

If you later need Microsoft services such as OneDrive, Microsoft Store features, or account synchronization, you can connect a Microsoft account separately.
