# EasyContacts
Google Chrome Extension that grabs contact information on the current page. The main motivation of this application was to help a friend boost productivity at his workplace.

# Versions
Stable - 1.01

# Installation
Can be installed through the official Chrome Web Store:
https://chrome.google.com/webstore/detail/emailgrabber/copokfngaafhcigcpchkdihkeaebgmlg

OR manually added to the browser:

1. Download the packaged extension.
2. Extract the file contents.
3. Open Google Chrome and go to Settings -> Extensions OR go to chrome://extensions/
4. Select pack extension then select the directory of the extracted files. The private key can be left blank.
5. Once the extension is packed, simply go back to the Extensions menu in Chrome and drop the newly generated .crx file onto the browser to install.

# Use
While on any website, just click the EasyContacts button and a popup containing a list of potential emails will appear.

# Bugs
1. Currently not able to properly parse AJAX requested email addresses.

# Future Updates
1. Allow URL entry to parse for emails without having to actually navigate to the website.

# Changelog

## 1.01
Cleaned up comments in code and removed unnecessary files.

## 1.0
Initial release of product. Allows basic parsing of email addresses from the DOM.
