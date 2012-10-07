/*
 *
 * Copyright (C) 2012, The Locker Project
 * All rights reserved.
 *
 * Please see the LICENSE file for more information.
 *
 */

var path = require('path')
  , rdio = require(path.join(__dirname, 'lib.js'));

exports.sync = function (processInfo, cb) {
  var tracks = [];
  rdio.getTracksInCollection(processInfo, tracks.push, function (err, config) {
    if (err) return cb(err);
    cb(null, {config : config, data : {track : tracks}});
  });
};