class MaplibreControlCredits {
    constructor(options) {
        this.options = Object.assign({
            linkUrl: "/",
            imageUrl: "//:0",
            imageAlt: "",
        }, options);
    }

    onAdd (map) {
        const div = document.createElement('div');
        div.className = 'mapboxgl-ctrl mapboxgl-ctrl-group maplibre-control-credits';

        div.innerHTML = `<a href="${this.options.linkUrl}" target="_blank"><img src="${this.options.imageUrl}" alt="${this.options.imageAlt}" /></a>`;

        return div;
    }
}
