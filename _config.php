<?php

use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;
use SilverStripe\Core\Manifest\ModuleResourceLoader;

$path = ModuleResourceLoader::resourceURL(
    'drmartingonzo/tinymce-ss4-theme:client/dist/TinyMCE_ss4/'
);

TinyMCEConfig::get('cms')->setOption('skin_url', $path);
