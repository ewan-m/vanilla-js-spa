'use-strict';

import { Route } from './routing/route.js';
import { Router } from './routing/router.js';
import { configureParallaxScrollHeader } from './utils/parallax-scroll-header.js';

new Router([
    new Route('post-one', true),
    new Route('post-two')
], 'router-outlet');

configureParallaxScrollHeader();