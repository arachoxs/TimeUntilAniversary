const aniversaryNumberElement = document.getElementById("aniversary-number");
const aniversaryDateElement = document.getElementById("aniversary-date");
const aniversaryMonthElement = document.getElementById("aniversary-month");
const aniversaryDayElement = document.getElementById("aniversary-day");
const aniversaryHoursElement = document.getElementById("aniversary-hours");
const aniversaryMinutesElement = document.getElementById("aniversary-minutes");
const aniversarySecondsElement = document.getElementById("aniversary-seconds");

var aniversaryDate = new Date();
aniversaryDate.setDate(8);
aniversaryDate.setMonth(7);
aniversaryDate.setHours(0);
aniversaryDate.setMinutes(0);
aniversaryDate.setSeconds(0);

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

const aniversaryNumber = new Date().getFullYear() - 2022;  
aniversaryNumberElement.textContent = `${aniversaryNumber}`;

setInterval(() => {
    const now = new Date();
    const diff = aniversaryDate - now; // Diferencia en milisegundos

    if (diff <= 0) { // modifica para cuando llegue el dia aparecer easter egg
            return;
        }

    let temp = Math.floor(diff/1000);
    let seconds = temp%60;
    let minutes = Math.floor((temp/60)%60);
    let hours = Math.floor((temp/3600)%24);

    let tempDate = new Date(now);
    let months = 0;

    while (true) {
        const nextMonth = new Date(tempDate);
        nextMonth.setMonth(tempDate.getMonth() + 1);
        if (nextMonth <= aniversaryDate) {
            months++;
            tempDate = nextMonth;
        } else {
            break;
        }
    }

    const remainingMs = aniversaryDate - tempDate;
    const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    
    aniversaryMonthElement.textContent = `Meses: ${months}`;
    aniversaryDayElement.textContent = `Días: ${days}`;
    aniversaryHoursElement.textContent = `Horas: ${hours}`;
    aniversaryMinutesElement.textContent = `Minutos: ${minutes}`;
    aniversarySecondsElement.textContent = `Segundos: ${seconds}`;
}, 1000);

