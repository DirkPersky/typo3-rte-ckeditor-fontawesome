<?php
defined('TYPO3_MODE') or die();

(function () {
    // Register Plugin and name SPaces
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
        'WebKon.' . $_EXTKEY,
        'CKEditor',
        'CKEditor'
    );

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rte_ckeditor_fontawesome/Configuration/TSConfig/rte.txt">');
    // Fontawesome V4
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['defaultFA4'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/DefaultFA4.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fullFA4'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/FullFA4.yaml';
    // Fontawesome V5
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/DefaultFA5.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/FullFA5.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimal'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/MinimalFA5.yaml';
    // Frontawesome V5-Pro
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fa5pro'] = 'fileadmin/rte_ckeditor_fontawesome/FA5Pro.yaml';
})();


