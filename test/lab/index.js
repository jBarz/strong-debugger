// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-debugger
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

'use strict';
/* Lab: a laboratory for running automated tests */

exports.Promise = require('./promise');

var tap = require('./tap');
exports.it = tap.it;
exports.describe = tap.describe;
exports.current = tap.current;
exports.run = tap.run;
exports.runUsing = tap.runUsing;
exports.waitForPendingSubTests = tap.waitForPendingSubTests;

exports.expect = require('./expect');
exports.fixture = require('./fixture');
exports.debugScript = require('./client').debugScript;
exports.debuglog = require('./debuglog');
exports.matchers = require('./matchers');
