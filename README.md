# MapLibre-Control-Credits

A MapLibre control to add a logo & hyperlink to your map.

Demo = https://greeninfo-network.github.io/MapLibre-Control-Credits/

Github = https://github.com/GreenInfo-Network/MapLibre-Control-Credits/


## Usage

```
const credits = new MaplibreControlCredits({
    linkUrl: "https://greeninfo.org/",
    imageUrl: "./greeninfo.png",
    imageAlt: "Green Info",
});
MAP.addControl(credits, 'bottom-right');
```

Constructor parameters:

* `linkUrl` -- The hyperlink will have this URL as its `href`
* `imageUrl` -- The URL of the image to display. Can be relative, absolute, or even inline data.
* `imageAlt` -- The text alternative of the image, which also serves as link text in this case. Needed to make the image and link accessible to blind and visually impaired people, also gets displayed when the image fails to load.

This control is intentionally minimal and lightweight, since the needs for custom behaviors vary so widely. You can adjust the CSS in **maplibre-control-credits.css** to adjust the size of the image, or to apply CSS transforms if necessary..


## Development

Fire up a Python CLI web server via `python -m SimpleHTTPServer 9835` or `python3 -m http.server 9835`

You can now point a browser at http://localhost:9835/ and see the demo.
