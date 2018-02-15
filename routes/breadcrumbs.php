<?php

// Home
Breadcrumbs::register('home', function ($breadcrumbs) {
    $breadcrumbs->push('Home', route('home'));
});

// Home > About
Breadcrumbs::register('about', function ($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('About', route('about'));
});

// Home > Objects
Breadcrumbs::register('objects', function ($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Объекты', route('objects'));
});
//// Home > Object
//Breadcrumbs::register('object', function ($breadcrumbs, $objects) {
//    $breadcrumbs->parent('objects');
//    $breadcrumbs->push($objects->title, route('objects.index',$objects->id));
//});

// Home > Blog > [Category]
Breadcrumbs::register('category', function ($breadcrumbs, $category) {
    $breadcrumbs->parent('blog');
    $breadcrumbs->push($category->title, route('category', $category->id));
});

// Home > Blog > [Category] > [Post]
Breadcrumbs::register('post', function ($breadcrumbs, $post) {
    $breadcrumbs->parent('category', $post->category);
    $breadcrumbs->push($post->title, route('post', $post));
});