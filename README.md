# CKEditor Add-On "Fontawesome" for TYPO3
This repository provides the add-on "Fontawesome" as a extension for TYPO3.

## TSConfig
### Switch to Fontawesome 5 (v.8.8.0-beta)
For the default template ot the CKE-Editor
```
RTE.default.preset = fa5
```
For the full template of CKE-Editor
```
RTE.default.preset = fullfa5
```

## Typo3 Constants:
Disable CDN Integration in Frontend
```
plugin.tx_ckeditor_fontawesome.loadCSS = 
```
Set alternativ CDN reference File
```
plugin.tx_ckeditor_fontawesome.css = 
```

### Switch to Fontawesome 5 (v.8.8.0-beta)
```
# Include Fontawesome 5 from CDN
plugin.tx_ckeditor_fontawesome.css = https://use.fontawesome.com/releases/v5.0.6/css/all.css
```

## ToDo:
- Add FA-Icon in Content Headline Definition.

## Please give us feedback
We would appreciate any kind of feedback or ideas for further developments to keep improving the extension for your needs.

### Contact us
- [E-Mail](mailto:d.persky@gutenberghaus.de)
- [GitHub](https://github.com/DirkPersky/rte-ckeditor-fontawesome)
- [Homepage](https://web-kon.de)
- [TYPO3.org](https://extensions.typo3.org/extension/rte_ckeditor_fontawesome/)
