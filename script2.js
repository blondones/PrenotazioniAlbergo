/* Table */

function initializeAvailability() {
  const dates = fDates();
  for (let i = 0; i < dates.length; i++) {
    availabilityData[dates[i]] = {
      Singola: conf.singola,
      Doppia: conf.doppia,
      Suite: conf.suite
    };
  }
}

function fDates() {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);

    const day = ('0' + newDate.getDate()).slice(-2);
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const year = newDate.getFullYear();

    const formattedDate = year + '-' + month + '-' + day;
    dates.push(formattedDate);
  }

  return dates;
}

function createTable(information) {
  const div = document.getElementById("TableID");
  
  let tableHTML = `
    <table border="1">
      <thead>
        <tr>
          <th>Data</th>
          <th>Singola</th>
          <th>Doppia</th>
          <th>Suite</th>
        </tr>
      </thead>
      <tbody>
  `;

  const dates = fDates();
  for (let i = 0; i < dates.length; i++) {
    tableHTML += `
      <tr>
        <td>${dates[i]}</td>
        <td>${information[dates[i]].Singola}</td>
        <td>${information[dates[i]].Doppia}</td>
        <td>${information[dates[i]].Suite}</td>
      </tr>
    `;
  }

  tableHTML += `
      </tbody>
    </table>
  `;

  div.innerHTML = tableHTML;
}

function addReservation(reservation) {
  const date = reservation.date;
  const roomsBooked = reservation.roomsBooked;


  for (let i = 0; i < roomsBooked.length; i++) {
    const roomType = roomsBooked[i].room;
    const quantity = roomsBooked[i].quantity;
    availabilityData[date][roomType] -= quantity;
  }

  createTable(availabilityData);
}


initializeAvailability();
createTable(availabilityData);

const exampleReservation = {
  date: "2025-03-15",
  roomsBooked: [
    { room: 'Singola', quantity: 2 },
    { room: 'Suite', quantity: 1 }
  ]
};

addReservation(exampleReservation);
