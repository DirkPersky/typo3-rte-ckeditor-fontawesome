<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

(function () {
    // add TS Config
    ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rte_ckeditor_fontawesome/Configuration/TSConfig/rte.txt">');
    // Fontawesome V6
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/DefaultFA6.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/FullFA6.yaml';
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimal'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/MinimalFA6.yaml';
})();

