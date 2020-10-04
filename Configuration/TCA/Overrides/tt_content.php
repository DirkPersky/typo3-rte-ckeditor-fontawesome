<?php
/**
 * Copyright (c) 2020.
 *
 * @category   TYPO3
 *
 * @copyright  2020 Dirk Persky
 * @author     Dirk Persky <info@dp-wired.de>
 * @license    MIT
 */

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;

defined('TYPO3_MODE') || die();

// Register Plugin and name Spaces
ExtensionUtility::registerPlugin(
    'DirkPersky.' . 'rte_ckeditor_fontawesome',
    'CKEditor',
    'CKEditor'
);