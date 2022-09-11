'use strict';

import * as numerol from '../../lib/index.js';

/**
 * Old way of using
 */
numerol.numerolinPersian('1368/03/01');
numerol.calculateNumerology('1989/05/22');

/**
 * New interface:
 */
const numerolInstance = new numerol.Numeroljs();
numerolInstance.handle('jalali', '1368/03/01');
