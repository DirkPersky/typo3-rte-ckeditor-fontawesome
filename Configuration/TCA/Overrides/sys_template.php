<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') || die();

// Add Plugin Configs
ExtensionManagementUtility::addStaticFile('rte_ckeditor_fontawesome', 'Configuration/TypoScript', 'CKEditor');