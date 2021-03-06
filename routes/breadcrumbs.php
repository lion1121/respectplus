<?php

// Home
Breadcrumbs::register('index', function ($breadcrumbs) {
    $breadcrumbs->push('Головна', route('index'));
});

// Home > News
Breadcrumbs::register('news', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Новини', route('news'));
});

// Home > About
Breadcrumbs::register('about', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Про нас', route('about'));
});

// Home > Service
Breadcrumbs::register('service', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Послуги', route('service'));
});

// Home > Contacts
Breadcrumbs::register('contacts', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Контакти', route('contacts'));
});

// Home > Objects
Breadcrumbs::register('objects', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Нерухомість', route('objects'));
});
// Home > Objects > object
Breadcrumbs::register('object', function ($breadcrumbs, $object) {
    $breadcrumbs->parent('objects');
    $breadcrumbs->push($object->title, route('objects.show',$object->id));
});

// Home > Blog > [Category]
Breadcrumbs::register('new', function ($breadcrumbs, $news) {
    $breadcrumbs->parent('news');
    $breadcrumbs->push($news->title, route('newsDetail', $news->id));
});
//
//// Home > Blog > [Category] > [Post]
//Breadcrumbs::register('post', function ($breadcrumbs, $post) {
//    $breadcrumbs->parent('category', $post->category);
//    $breadcrumbs->push($post->title, route('post', $post));
//});