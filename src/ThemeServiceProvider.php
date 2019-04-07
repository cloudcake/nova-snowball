<?php

namespace NovaSnowball;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class SnowballServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap snowball.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::style('nova-snowball-theme', __DIR__.'/../resources/css/theme.css');
        });
    }
}
