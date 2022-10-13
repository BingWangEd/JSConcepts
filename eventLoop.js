function loop() {
  setTimeout(loop, 0);
}

function loop2() {
  while (True) {
    // do something
  }
}

// What will happen?
// https://youtu.be/cCOL7MC4Pl0?t=701
button.onClick(loop)
button2.onClick(loop2)

// RequestAnimationFrame
// See https://youtu.be/cCOL7MC4Pl0?t=778