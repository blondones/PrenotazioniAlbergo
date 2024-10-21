//form

const getDateKey = (date) => date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

let date = new Date();
const datekeys = [];
for (let i = 0; i < 30; i++) {
    date.setDate(date.getDate() + 1);
    const key = getDateKey(date);
    datekeys.push(key);
}
const conf = {
    "singola": 10,
    "doppia": 5,
    "suite": 3
  }

const createForm = (parentElement) => {
    const roomTypes = Object.keys(conf);
    let callback = null;

    return {
        setRoomTypes: (type) => {
             roomTypes = types;
             },
        onsubmit: (callbackInput) => {
             callback = callbackInput; 
            },
        render: () => {
            parentElement.innerHTML = `
        <div>
          Data prenotazione:<br>
          <input id="bookingDate" type="date" />
        </div>
        ${roomTypes.map((room) => {
                return `
          <div>${room}  Numero di camere:<br>
              <input id="${room} rooms" type="number" />
            </div>`;
            }).join('\n')}
        <button type='button' id='submit'>Invio</button>
        <div id="ris"></div>`;

            document.querySelector("#submit").onclick = () => {
                const bookingDate = document.querySelector("#bookingDate").value;
                const roomsBooked = roomTypes.map((room) => {
                  return {
                     room,
                     quantity: parseInt(document.querySelector(`#${room}-camere`).value),
                     maxQuantity: conf[room]
                  };  
                });
                let availableDate = bookingDate !== '';

                const risultato = document.querySelector("#ris");
                if (availableDate) {
                    risultato,innerText = "OK";
                callback({
                    dataPrenotazione,
                    roomsBooked: roomsBooked.filter(c => c.quantity > 0)
                  });
                  document.querySelector("#data-prenotazione").value = '';
                  roomTypes.forEach(room => {
                    document.querySelector(`#${room}-camere`).value = '';
                  });
                } else {
                    risultato.innerText = "KO";
            }
        };
      },
    };
};

const form = createForm(document.querySelector('#app'));
form.setRoomTypes(Object.keys(conf));
form.onsubmit(console.log);
form.render();