/* TABELLA */


/* Funzione per le Date */
const fDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 30; i++){
        const newDate = new Date();
        newDate.setDate(today.getDate() + i);

        const day = ('0' + newDate.getDate()).slice(-2);
        const month = ('0' + newDate.getDate()).slice(-2);
        const year = newDate.getFullYear(); 
    
        const formattedDate = `${year}-${month}-${day}`;
        dates.push(formattedDate);
    }
    return dates;
}

/* Funzione per la creazione della Tabella*/
const createTable = (information) => {
    const div = document.getElementById("TableID");

    let tableHTML = `
    <table>
        <thead>    
            <tr> 
                <th>Data</th>
                <th>Singola</th>
                <th>Doppia</th>
                <th>Suite</th>
            </tr>
        </thead>
    </table>
    <tbody>
    `;

    fDates().forEach(date => {
        tableHTML += `
            <tr>
                <td>${date}</td>
                <td>${information[date]["Singola"]}</td>
                <td>${information[date]["Doppia"]}</td>
                <td>${information[date]["Suite"]}</td>
            </tr>
        `;
    });

    tableHTML += `
        </tbody>
    </table>
    `;

    div.innerHTML += tableHTML;
}