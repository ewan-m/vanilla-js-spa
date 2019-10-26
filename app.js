'use-strict';

import { enableRouting } from './routing/router.js';


enableRouting(['post-one', 'post-two'], 'post-one', 'router-outlet');