'use-strict';

import { enableRouting } from './routing/router.js';


enableRouting(['post-one', 'post-two', 'education'], 'post-one', 'router-outlet');