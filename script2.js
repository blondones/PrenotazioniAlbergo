let availabilityData = {};

const roomConfig = {  
  singola: 10,
  doppia: 5,
  suite: 3
};

const initializeAvailability = () => {
  const dates = fDates();
  for (let i = 0; i < dates.length; i++) {
    availabilityData[dates[i]] = {
      Singola: roomConfig.singola,
      Doppia: roomConfig.doppia,
      Suite: roomConfig.suite
    };
  }
};

const fDates = () => {
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
};

const createTable = (information) => {
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
};

const addReservation = (reservation) => {
  const date = reservation.date;

  if (!availabilityData[date]) {
    console.error(`Data ${date} non trovata nel sistema di disponibilità.`);
    return;
  }

  const roomsBooked = reservation.roomsBooked;

  for (let i = 0; i < roomsBooked.length; i++) {
    const roomType = roomsBooked[i].room;
    const quantity = roomsBooked[i].quantity;

    if (availabilityData[date][roomType] < quantity) {
      console.error(`Non ci sono abbastanza stanze di tipo ${roomType} disponibili per la data ${date}.`);
      continue;
    }

    availabilityData[date][roomType] -= quantity;
  }

  createTable(availabilityData);
};

initializeAvailability();
createTable(availabilityData);

const exampleReservation = {
  date: "2024-11-05",
  roomsBooked: [
    { room: 'Singola', quantity: 2 },
    { room: 'Suite', quantity: 1 }
  ]
};

addReservation(exampleReservation);
