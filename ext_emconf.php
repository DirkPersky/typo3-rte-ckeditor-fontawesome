<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'CKEditor Fontawesome Add-On',
    'description' => 'Adds the Fontawesome add-on to the CKEditor in TYPO3.',
    'category' => 'be',
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Dirk Persky',
    'author_email' => 'd.persky@gutenberghaus.de',
    'version' => '8.7.6',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-8.7.99',
            'rte_ckeditor' => '8.7.0-8.7.99',
        ],
        'conflicts' => [],
        'suggests' => [
            'setup' => '',
        ],
    ],
];

