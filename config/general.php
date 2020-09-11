<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
  // Global settings
  '*'          => [
    'defaultWeekStartDay'             => 1,
    'enableCsrfProtection'            => true,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls'            => true,
    // Account
    'autoLoginAfterAccountActivation' => true,
    // Control panel trigger word
    // URL
    'cpTrigger'                       => 'admin',
    'errorTemplatePrefix'             => '_',
    // GraphQL
    'enableGql'                       => false,
    // The secure key Craft will use for hashing and encrypting data
    'securityKey'                     => App::env('SECURITY_KEY'),
    // Cache
    'enableTemplateCaching'           => true,
    'cacheMethod'                     => 'file',
    'cacheDuration'                   => 0, // 86400 = 24 Hours
    'cacheElementQueries'             => false,
    // Timezone
    'timezone'                        => 'Australia/Melbourne',
    // Images / Files
    'defaultImageQuality'             => '100',
    'extraAllowedFileExtensions'      => 'ico,xml,json',
    'transformGifs'                   => false,
    'jpegoptimEnabled'                => true,
    'optipngEnabled'                  => true,
    // Aliases
    'aliases'                         => [
      '@assetBaseUrl'  => getenv('ASSETS_URL'),
      '@assetBasePath' => getenv('ASSETS_PATH')
    ]
  ],

  // Dev environment settings
  'dev'        => [
    // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode'               => true,
    'allowUpdates'          => true,
    'cache'                 => false,
    'enableTemplateCaching' => false,
    'testToEmailAddress'    => getenv('SITE_EMAIL')
  ],

  // Staging environment settings
  'staging'    => [
    'devMode'           => true,
    'allowAdminChanges' => true,
  ],

  // Production environment settings
  'production' => [
    'useSecureCookies'  => true,
    'allowAdminChanges' => true,
  ],
];
