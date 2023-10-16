# CKEditor Add-On "Fontawesome" for TYPO3
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg?style=for-the-badge)](https://www.paypal.me/dirkpersky)
[![Latest Stable Version](https://img.shields.io/packagist/v/dirkpersky/typo3-rte-ckeditor-fontawesome?style=for-the-badge)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)
[![TYPO3](https://img.shields.io/badge/TYPO3-rte__ckeditor__fontawesome-%23f49700?style=for-the-badge)](https://extensions.typo3.org/extension/rte_ckeditor_fontawesome/)
[![License](https://img.shields.io/packagist/l/dirkpersky/typo3-rte-ckeditor-fontawesome?style=for-the-badge)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)

This repository provides the add-on "Fontawesome" as a extension for TYPO3 CKEditor.
It extends the `default`,` full` and `minimal` layout of the CKEditor. If you write your own CKE-Preset pls have attention that you **not remove the Italic Button**

## TSConfig

## Typo3 Constants:
Disable CDN Integration in Frontend
```
plugin.tx_ckeditor_fontawesome.loadCSS = 
```
Set alternativ CDN reference File
```
plugin.tx_ckeditor_fontawesome.css = {$path}
```

## Add Fotawesome in your own RTE Preset
To add this Plug-In in your own RTE Config. Import the Config in your preset.
```yaml
imports:
    - { resource: "EXT:rte_ckeditor_fontawesome/Configuration/RTE/PluginFA6.yaml" }
```

At the next step you need to extend your individual Toolbar-Config to add the Clickable Icon.
```yaml
  ...
  toolbar:
        - [ 'Bold', 'Italic', .....]
        ...
        - [ 'DPFontAwesome' ]
        ...
```

## Fontawesome 6 Pro, or Custom Config
> 12LTS NOT WORKING YET

![Update YAML](https://img.shields.io/badge/UPDATE-FA6%20PRO%20YAML-green?style=for-the-badge)
Usually you have a RTE config in your sitepackage, if not create a new file.
* add PluginFA6Pro.yaml to imports
* add fontAwesome URL or path to CSS
* if icons are still missing: check webfonts path in the css and change if necessary

```yaml
imports:
- { resource: "EXT:rte_ckeditor/Configuration/RTE/Processing.yaml" }
- { resource: "EXT:rte_ckeditor/Configuration/RTE/Editor/Base.yaml" }
- { resource: "EXT:rte_ckeditor/Configuration/RTE/Editor/Plugins.yaml" }
- { resource: "EXT:rte_ckeditor_fontawesome/Configuration/RTE/PluginFA6Pro.yaml" }

editor:
  config:
    fontAwesome:
      - "EXT:sitepackage/Resources/Public/Fonts/Css/fa6pro-all.css"
```

Depends on your RTE Config maybe the toolbar button may not appear.
Than you need to add it to your sets.

```yaml
editor:
  config:
    toolbar:
      ###YOUR_TOOLBARGRP###:
        - '|'
        - DPFontAwesome
```

## ToDo:
- FAPRO Support

## Please give us feedback
We would appreciate any kind of feedback or ideas for further developments to keep improving the extension for your needs.

## Say thanks! and support me
You like this extension? Get something for me (surprise!) from my wishlist on [Amazon](https://www.amazon.de/hz/wishlist/ls/15L17XDFBEYFL/r) or [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/dirkpersky) the next pizza. Thanks a lot!

### Contact me
- [E-Mail](mailto:info@dp-wired.de)
- [GitHub](https://github.com/DirkPersky/rte-ckeditor-fontawesome)
- [Homepage](https://web-kon.de)
- [TYPO3.org](https://extensions.typo3.org/extension/rte_ckeditor_fontawesome/)
- [Packagist.org (composer)](https://packagist.org/packages/dirkpersky/typo3-rte-ckeditor-fontawesome)
- [Font Awesome](https://fontawesome.com)
