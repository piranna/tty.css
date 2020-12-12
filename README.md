# tty.css

Pure CSS simulation of text-mode web browsers

Inspired by [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386),
`tty.css` is a pure CSS stylesheet that provides a visual aspect similar to
text-mode web browsers like Lynx or Links2, similar to what other projects like
[98.css](https://jdan.github.io/98.css/) does with old desktop UIs.

http://www.kompx.com/en/text-based-web-browsers-for-linux.htm

## Features

- Text-like styled components
- Enforce usage of monospaced fonts (system UI monospaced font if available as
  [ui-monospace](https://drafts.csswg.org/css-fonts-4/#valdef-font-family-ui-monospace)
  and [GNU Unifont](http://unifoundry.com/unifont/index.html) if externally
  provided)
- Usage of `!important` to force limitations of monospaced grid layout of TTYs
- Light and dark color schemes (default dark if there's no system preference)
- Markdown-inspired representation of compatible elements (can be used as pure
  CSS html-to-markdown converter)
- Row-by-row scrolling

## How to use

```html
<link
  href="https://unpkg.com/tty.css"
  media="tty or (grid)"
  rel="stylesheet"
  type="text/css"
/>
```

If you want to apply it unconditionally, for example to use it as a base
stylesheet or to force a webpage to render as a terminal, just remove the `media` query. You can use the [GNU Unifont](http://unifoundry.com/unifont) by
adding the next line:

```html
<link
  href="https://fontlibrary.org/face/gnu-unifont"
  rel="stylesheet"
  type="text/css"
/>
```

### Row-by-row scrolling

For row-by-row scrolling, it was possible to be done in pure CSS by using
[scroll-snap-points-y](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-y),
but it was later removed from the CSS specification in benefict of element-based
snapping. Due to this, I've added a simple Javascript file that somewhat
replicates that functionality. You can use it by adding:

```html
<script src="https://unpkg.com/tty.css/index.js"></script>
```

Alternatively, you can use a `scroll-snap-points-y` polyfill to have a more
"pure CSS-like" experience like old
[scrollsnap-polyfill](https://github.com/ckrack/scrollsnap-polyfill), or since
this will never goes into the standard, provide a ponyfill focused only on the
`scroll-snap-points-y` here. Pull-requests are welcome.

## TO-DO

- Pixel-perfect adjustment to 8x16 grid (bold, borders...)
  - Replace **bold** by bright colors
- Replace graphical elements (images, videos and SVG) with low-res versions
- Multiple modes for graphical elements (only text, half-blocks, sixels, full
  resolution)
- Color modes (monochrome, 16 colors, 256 colors, 24 bits)

## FAQ

### Why?

I'm a hands-on learner when I find an interesting project to tink around, so I
decided to re-purposse it as a way to learn CSS myself.

### How have you defined the stylesheet in the GitHub Pages site?

GitHub Pages sites are powered by [Jekyll](https://jekyllrb.com/), where themes
files are stacked. It was as simple as
[placing an empty stylesheet file at `assets/css/style.scss`](https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll#customizing-your-themes-css)
importing the one of the project.

<script src="index.js"></script>
