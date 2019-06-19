# CKEditor Add-On "Fontawesome" for TYPO3

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/dirkpersky/9.99)
[![Latest Stable Version](https://poser.pugx.org/dirkpersky/typo3-rte-ckeditor-fontawesome/v/stable)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)
[![License](https://poser.pugx.org/dirkpersky/typo3-rte-ckeditor-fontawesome/license)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)

This repository provides the add-on "Fontawesome" as a extension for TYPO3 CKEditor.
It extends the `default`,` full` and `minimal` layout of the CKEditor. If you write your own CKE-Preset pls have attention that you **not remove the Italic Button**

## TSConfig
### Switch back to Fontawesome 4
For the default template ot the CKE-Editor
```
RTE.default.preset = defaultFA4
```
For the full template of CKE-Editor
```
RTE.default.preset = fullFA4
```

## Typo3 Constants:
Disable CDN Integration in Frontend
```
plugin.tx_ckeditor_fontawesome.loadCSS = 
```
Set alternativ CDN reference File
```
plugin.tx_ckeditor_fontawesome.css = {$path}
```

### Switch back Fontawesome 4
```
# Include Fontawesome 4 from CDN
plugin.tx_ckeditor_fontawesome.css = https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
```
## Add Fotawesome in your own RTE Preset
To add this Plug-In in your own RTE Config. Import the Config in your preset.
```
imports:
    - { resource: "EXT:rte_ckeditor_fontawesome/Configuration/RTE/PluginFA5.yaml" }
```

At the next step you need to extend your individual Toolbar-Config to add the Clickable Icon.
```
  ...
  toolbar:
        - [ 'Bold', 'Italic', .....]
        ...
        - [ 'ckeditor_fa5' ]
        ...
```

## Use Fontawesome Pro, or Custom Config:
first create the file `/fileadmin/rte_ckeditor_fontawesome/FA5Pro.yaml`.
Copy the content from below and replace your `fontawesome pro` link.
```
imports:
  - { resource: "EXT:rte_ckeditor/Configuration/RTE/Full.yaml" }
  - { resource: "EXT:rte_ckeditor_fontawesome/Configuration/RTE/PluginFA5Pro.yaml" }
# Add configuration for the editor
editor:
  config:
    # css definitions for the editor
    contentsCss:
      - "EXT:rte_ckeditor/Resources/Public/Css/contents.css"
      - "LINK TO FONTAWESOME PRO"
```

Add to your TSConfig:
```
// Zuweisen der Konfiguration im PageTSconfig
RTE.default.preset = fa5pro
```

Add to your constant or clear this:
```
# Include Fontawesome 5-Pro CSS
plugin.tx_ckeditor_fontawesome.css = "LINK TO FONTAWESOME PRO"
```

## ToDo:
- Add FA-Icon in Content Headline Definition.

## Please give us feedback
We would appreciate any kind of feedback or ideas for further developments to keep improving the extension for your needs.

### Contact us
- [E-Mail](mailto:info@dp-dvelop.de)
- [GitHub](https://github.com/DirkPersky/rte-ckeditor-fontawesome)
- [Homepage](https://web-kon.de)
- [TYPO3.org](https://extensions.typo3.org/extension/rte_ckeditor_fontawesome/)
- [Packagist.org (composer)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)
- [Font Awesome](https://fontawesome.com)
