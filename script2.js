/* TABELLA */


/* Funzione per le Date */
const getDateKey = (date) => 
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  
  let date = new Date();
  const datekeys = [];
  
  for (let i = 0; i < 30; i++) {
    date.setDate(date.getDate() + 1);
    const key = getDateKey(date);
    datekeys.push(key);
  }
  
  console.log(datekeys);
  
