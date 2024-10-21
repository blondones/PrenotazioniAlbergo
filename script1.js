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
                        quantity: parseInt(document.querySelector(`#${room}rooms`).value),
                        maxQuantity: conf[room]
                    };
                });

                let OneRoomAvailable = false;
                for (let i = 0; i < roomsBooked.length; i++) {
                    if (roomsBooked[i].quantity > 0) {
                        OneRoomAvailable = true;
                        break;
                    }
                }
                let availableDate = bookingDate !== '';
                const result = document.querySelector("#ris");
                if (availableDate && OneRoomAvailable) {
                    result, innerText = "OK";
                    callback({
                        availableDate,
                        roomsBooked: roomsBooked.filter(c => c.quantity > 0)
                    });
                    document.querySelector("#bookingDate").value = '';
                    roomTypes.forEach(room => {
                        document.querySelector(`#${room}rooms`).value = '';
                    });
                } else {
                    result.innerText = "KO";
                }
            };
        },
    };
};

const form = createForm(document.querySelector('#app'));
form.setRoomTypes(Object.keys(conf));
form.onsubmit(console.log);
form.render();