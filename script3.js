/* Cache Remota */

const sendReservation = (reservation) => {
    fetch('https://ws.progettimolinari.it/cache/set', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'key': '3b7fdbbe-8ca6-4031-b093-b8bcd544c993'
        },
        body: JSON.stringify({
            key: 'prenotazione',
            value: reservation
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Prenotazione inviata:', data);
        updateTable();
    })
    .catch(error => {
        console.log('Errore nell\'invio della prenotazione:', error);
    });
}

const updateTable = () => {
    fetch('https://ws.progettimolinari.it/cache/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'key': '3b7fdbbe-8ca6-4031-b093-b8bcd544c993'
        },
        body: JSON.stringify({
            key: 'disponibilità'
        })
    })
    .then(response => response.json())
    .then(data => {
        createTable(data);
    })
    .catch(error => {
        console.log('Errore nel caricamento della tabella:', error);
    });
}

form.onsubmit = (data) => {
    const reservation = {
        date: data.availableDate,
        roomsBooked: data.roomsBooked
    };
    sendReservation(reservation);
};

updateTable();
