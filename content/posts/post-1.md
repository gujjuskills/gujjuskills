---
title: "How to Skip Microsoft Account Login During Windows 11 Installation"
date: 2026-09-23T01:00:00Z
image: /images/post/skipmicrosoftlogin.webp
categories: ["Computer"]
featured: true
draft: false

# How to Skip Microsoft Account Login During Windows 11 Installation

If you want to **install Windows 11 without signing in with a Microsoft account**, you can create a **local account** during setup.

## Method 1: Use `Shift + F10`

1. Start Windows 11 installation normally.
2. Continue until you reach the screen asking you to **sign in with a Microsoft account**.
3. Press:

   **Shift + F10**

4. A Command Prompt window will open.
5. Type the following command:

```cmd
OOBE\BYPASSNRO
```
6. Press Enter.
7. Your PC will restart.
8. After restarting, continue Windows setup.
9. At the network screen, choose I don't have internet or the equivalent option.
10. Select Continue with limited setup if shown.
11. Create your local Windows username and password.
If OOBE\BYPASSNRO Doesn't Work
On newer Windows 11 builds, Microsoft has been removing or disabling some older setup bypass methods.
In that case, try:

start ms-cxh:localonly

f it works on your Windows 11 build, it should open the local account creation screen.
