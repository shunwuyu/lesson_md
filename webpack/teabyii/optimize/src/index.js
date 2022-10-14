require('./style.less')

import { map } from 'lodash-es'
import { square } from './lib/math'
const { log } = require('./utils')

log('hello world')
log(map([1, 2, 3], square))

