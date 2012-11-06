
// start a bonsai movie
bonsai.run(
  // the element you want bonsai to render in
  document.getElementById('movie'), 
  // options object
  { width: 500,
    height: 500,
    // can pass in a function to run inside the bonsai runner
    code: runner,
  }
)

// this function is executed inside the bonsai runner
function runner() {

  // Rect is one of a handful of globals that bonsai makes available.
  // See: docs.bonsaijs.org API: Classes
  var rect = new Rect(0,0,100,100)
  rect.fill('random')
  rect.addTo(stage)
  rect.animate('2s', {
    x: 500,
    y: 500,
    rotation: Math.PI,
    fillColor: 'random'
  },
  { repeat: Infinity })


  // chainable!!
  var circle = new Circle(250, 250, 50)
    .fill('random')
    .addTo(stage)
    .animate('1.25s', { x: 450, y: 450, fillColor: 'random' }).attr({ x: 450, y: 450 })
    .animate('1.25s', { x: 450, y: 50, fillColor: 'random'}, { delay: '1.25s' }).attr({ x: 450, y: 50 })
    .animate('1.25s', { x: 50, y: 50, fillColor: 'random'}, { delay: '2.5s' }).attr({ x: 50, y: 50 })
    .animate('1.25s', { x: 50, y: 450, fillColor: 'random'}, { delay: '3.75s' }).attr({ x: 50, y: 450 })
    .animate('1.25s', { x: 250, y: 250, fillColor: 'random'}, { delay: '5s' })
};

