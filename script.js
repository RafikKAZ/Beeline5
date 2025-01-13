ymaps.ready(init);

let map;

function init() {
    map = new ymaps.Map("map", {
        center: [51.169392, 71.449074], // Центр Казахстана
        zoom: 5,
    });
}

function updateMap() {
    const city = document.getElementById("city").value;

    ymaps.geocode(city, {
        results: 1,
    }).then(function (res) {
        const firstGeoObject = res.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();
        const bounds = firstGeoObject.properties.get('boundedBy');

        map.setBounds(bounds, { checkZoomRange: true });

        map.geoObjects.removeAll();
        const placemark = new ymaps.Placemark(coords, { balloonContent: city });
        map.geoObjects.add(placemark);
    }).catch(function (err) {
        console.error("Ошибка при загрузке города:", err);
    });
}
"""

# Save files to the appropriate paths
with open("/mnt/data/index.html", "w", encoding="utf-8") as html_file:
    html_file.write(html_content)

with open("/mnt/data/styles.css", "w", encoding="utf-8") as css_file:
    css_file.write(css_content)

with open("/mnt/data/script.js", "w", encoding="utf-8") as js_file:
    js_file.write(js_content)

"/mnt/data/index.html", "/mnt/data/styles.css", "/mnt/data/script.js"
