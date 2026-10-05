# પ્રેકટિકલ-૧૩૬ : IIS નો ઉપયોગ કરીને વેજ પ્રોજેક્ટ ડીપલોય કરો

To deploy and host a created website on a Windows PC using **IIS (Internet Information Services)**.

## Steps

### 1. Enable IIS

1. Open **Control Panel**.
2. Select **Programs**.
3. Click **Turn Windows features on or off**.
4. Find **Internet Information Services**.
5. Expand it and make sure the required options are selected.
6. Click **OK**.
7. Wait until Windows completes the installation.

### 2. Check IIS

1. Press **Windows + R**.
2. Type `inetmgr`.
3. Press **Enter**.
4. The **IIS Manager** window will open.
5. Expand the computer name from the left panel.
6. Click **Sites**.
7. You will see the **Default Web Site**.

### 3. Prepare the Website

1. Create or copy your website files into a folder.
2. For example, create a folder named `MyWebsite`.
3. Keep the main webpage file such as `index.html` inside this folder.
4. Make sure all CSS, JavaScript and image files are available in the correct folders.

Example:

```text
MyWebsite
│
├── index.html
├── about.html
├── css
│   └── style.css
├── js
│   └── script.js
└── images
    └── logo.png
