var rect = new Rect(0, 0, 200, 200);
rect
  .fill('random')
  .addTo(stage)
  .attr({
    x: stage.width - rect.attr('width'),
    y: stage.width - rect.attr('height')
  })
  .animate('0.5s', {
    x: 0,
    y: 0
  });

