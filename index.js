// Ponyfill for scroll-snap-points behaviour

const CHARS_WIDTH  =  8
const CHARS_HEIGHT = 16

let pageXOffset_acum = 0
let pageYOffset_acum = 0
let raf


function snap()
{
  raf = null

  const pageXOffset = window.pageXOffset + pageXOffset_acum
  const pageYOffset = window.pageYOffset + pageYOffset_acum

  const snappedX = Math.round(pageXOffset / CHARS_WIDTH ) * CHARS_WIDTH
  const snappedY = Math.round(pageYOffset / CHARS_HEIGHT) * CHARS_HEIGHT

  pageXOffset_acum = pageXOffset - snappedX
  pageYOffset_acum = pageYOffset - snappedY

  window.scroll(snappedX, snappedY)
}

document.addEventListener('scroll', function()
{
  if(!raf) raf = requestAnimationFrame(snap)
})
