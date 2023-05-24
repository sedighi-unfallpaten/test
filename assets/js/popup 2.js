// Popup-Fenster nach 15 Sekunden anzeigen
// setTimeout(function() {
//     document.getElementById('popup').classList.remove('hidden');
// }, 3000);

// // Popup-Fenster nach 20 Sekunden ausblenden
// setTimeout(function() {
//     document.getElementById('popup').classList.add('hidden');
// }, 8000);






// Funktion, die prüft, ob das Popup-Fenster angezeigt werden soll
function shouldShowPopup() {
    // Aktuelle Zeit abrufen
    var now = new Date();

    // Prüfen, ob aktueller Wochentag ein Werktag (Montag-Freitag) ist
    var dayOfWeek = now.getDay();
    if (dayOfWeek == 0 || dayOfWeek == 6) { // Sonntag (0) oder Samstag (6)
        return false;
    }

    // Prüfen, ob aktuelle Uhrzeit zwischen 10:00 Uhr und 17:00 Uhr liegt
    var hour = now.getHours();
    if (hour < 10 || hour >= 17) {
        return false;
    }

    // Wenn alle Bedingungen erfüllt sind, soll das Popup-Fenster angezeigt werden
    return true;
}

// Popup-Fenster nur anzeigen, wenn alle Bedingungen erfüllt sind
if (shouldShowPopup()) {
    // Popup-Fenster nach 15 Sekunden anzeigen
    setTimeout(function() {
        document.getElementById('popup').classList.remove('hidden');
        document.getElementById('aufleuten_nr').classList.add('aufleuten_nr');
    }, 4000);

    // Popup-Fenster nach 20 Sekunden ausblenden
    setTimeout(function() {
        document.getElementById('popup').classList.add('hidden');
        document.getElementById('aufleuten_nr').classList.remove('aufleuten_nr');
    }, 15000);
}