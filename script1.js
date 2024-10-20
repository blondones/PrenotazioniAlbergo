//form

const createForm = (parentElement) => {
    const roomTypes = [];
    let callback = null;

    return {
        setLabels: (labels) => { data = labels; },
        setRoomTypes: (type) => { roomTypes = types },
        onsubmit: (callbackInput) => { callback = callbackInput },
        render: () => {
            parentElement.innerHTML = `
        <div>
          Data prenotazione:<br>
          <input id="data-prenotazione" type="date" />
        </div>
        ${roomTypes.map((room) => {
          return `
          <div>${room}  Numero di camere:<br>
              <input id="${room} camere" type="number" />
            </div>`;
        }).join('\n')}
        <button type='button' id='submit'>Invio</button>
        <div id="ris"></div>`;
            
            document.querySelector("#submit").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
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