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
        setLabels: (labels) => { data = labels; },
        setRoomTypes: (type) => { roomTypes = types },
        onsubmit: (callbackInput) => { callback = callbackInput },
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
                const roomsBooked = roomTypes.map((room)) => {
                  return {
                     
                  }  
                }

                
            });
            callback(result);
        }
    },
    };
};

const form = createForm(document.querySelector('#app'));
form.setLabels(["Nome", "Cognome", "Età"]);
form.onsubmit(console.log);
form.render();