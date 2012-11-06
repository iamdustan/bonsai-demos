var movie = document.getElementById('movie')
var runnerContext = function (runnerUrl) {
  this.socket = io.connect(runnerUrl);
};

// some boilerplate to connext via socket.io
var proto = runnerContext.prototype = bonsai.tools.mixin({
  init: function () {
    var self = this;
    this.socket.on('message', function(msg) {
      self.emit('message', msg[0]);
    });
  },
  notify: function (message) {
    this.socket.emit('message', message);
  },
  notifyRunner: function (message) {
    this.socket.emit('message', message);
  },
  run: function (code) {
    this.notifyRunner({
      command: 'runScript',
      code: code
    });
  }
}, bonsai.EventEmitter);

proto.notifyRunnerAsync = proto.notifyRunner;

bonsai
  .setup({
    runnerContext: runnerContext,
    runnerUrl: 'http://localhost:4000'
  })
  .run(movie, {
    width: 600,
    height: 400
  });

