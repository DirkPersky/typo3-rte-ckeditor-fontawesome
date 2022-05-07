<?php

defined('TYPO3_MODE') or die();

(function () {
    // add TS Config
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rte_ckeditor_fontawesome/Configuration/TSConfig/rte.txt">');
    // Fontawesome V5
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['defaultFA5'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/DefaultFA5.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fullFA5'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/FullFA5.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimalFA5'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/MinimalFA5.yaml';
    // Frontawesome V5-Pro
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fa5pro'] = 'fileadmin/rte_ckeditor_fontawesome/FA5Pro.yaml';
    // Fontawesome V6
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/DefaultFA6.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/FullFA6.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimal'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/MinimalFA6.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fa6pro'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/PluginFa6Pro.yaml';
})();

