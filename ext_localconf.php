<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rte_ckeditor_fontawesome/Configuration/TSConfig/rte.txt">');

$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/Default.yaml';
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/Full.yaml';
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fa5'] = 'EXT:rte_ckeditor_fontawesome/Configuration/RTE/Fa5.yaml';