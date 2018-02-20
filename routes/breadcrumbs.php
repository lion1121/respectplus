<?php

// Home
Breadcrumbs::register('index', function ($breadcrumbs) {
    $breadcrumbs->push('Главная', route('index'));
});

// Home > News
Breadcrumbs::register('news', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Новости', route('news'));
});

// Home > About
Breadcrumbs::register('about', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('О нас', route('about'));
});

// Home > Objects
Breadcrumbs::register('objects', function ($breadcrumbs) {
    $breadcrumbs->parent('index');
    $breadcrumbs->push('Объекты', route('objects'));
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