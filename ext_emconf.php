<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'CKEditor Fontawesome Add-On',
    'description' => 'Adds the Fontawesome add-on to the CKEditor in TYPO3.',
    'category' => 'be',
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Dirk Persky',
    'author_email' => 'd.persky@gutenberghaus.de',
    'version' => '11.5.5',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.0-11.5.99',
            'rte_ckeditor' => '10.4.0-11.5.99',
        ],
        'conflicts' => [],
        'suggests' => [
            'setup' => '',
        ],
    ],
];

