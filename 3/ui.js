stage.on('message', handleMessage)
stage.on('pointerdown', handlePointerdown)
stage.on('keydown', handleKeypress)

function handleMessage(message) {
  if (message.type === 'Rect' && message.attr)
    new Rect(message.attr.x, message.attr.y, message.attr.w, message.attr.h)
      .attr(message.attr)
      .fill(message.attr.fill || 'random')
      .addTo(stage);
}

function handlePointerdown (e) {
  handleMessage({
    type: 'Rect',
    attr: {
      x: e.stageX-25,
      y: e.stageY-25,
      w: 50,
      h: 50
    }
  })
}

function handleKeypress (e) {
  stage.sendMessage('keypress', e.keyCode);
}

