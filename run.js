#!/usr/bin/env node

// run static server on 8080
require('child_process').exec('./node_modules/node-static/bin/cli.js')

// run socket.io server on 4000
require('4/server')

