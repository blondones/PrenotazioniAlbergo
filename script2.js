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

