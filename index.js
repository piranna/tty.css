// Ponyfill for scroll-snap-points behaviour, both for `window` and DOM elements

const CHARS_WIDTH  =  8
const CHARS_HEIGHT = 16


const weakMap = new WeakMap()


document.addEventListener('scroll', function({target})
{
  if(target === document) target = window

  let entry = weakMap.get(target)
  if(!entry)
  {
    entry =
    {
      scrollLeft: 0,
      scrollTop : 0
    }

    weakMap.set(target, entry)
  }

  if(entry.raf) return

  entry.raf = requestAnimationFrame(function()
  {
    // Calc scroll snaps
    let scrollLeft = target.scrollLeft || target.scrollX
    let scrollTop  = target.scrollTop  || target.scrollY

    scrollLeft += entry.scrollLeft
    scrollTop  += entry.scrollTop

    const snappedLeft = Math.round(scrollLeft / CHARS_WIDTH ) * CHARS_WIDTH
    const snappedTop  = Math.round(scrollTop  / CHARS_HEIGHT) * CHARS_HEIGHT

    // Do scroll
    target.scroll(snappedLeft, snappedTop)

    // Update offsets and clean-up
    scrollLeft -= snappedLeft
    scrollTop  -= snappedTop

    if(!(scrollLeft || scrollTop)) return weakMap.delete(target)

    entry.scrollLeft = scrollLeft
    entry.scrollTop  = scrollTop

    entry.raf = null
  })
})
