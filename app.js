// @ts-nocheck
let days = document.getElementById('day');
let months = document.getElementById('Month');
let years = document.getElementById('year');

let form = document.getElementById('form');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    Validate();
})

function Validate() {
    day = days.value;
    month = months.value;
    year = years.value;
    if (day.length == 0) {
        document.getElementById('dayError').style.display = 'block';
        document.getElementById('dayError').style.color = '#ff5757';
        document.getElementById('dayLabel').style.color = '#ff5757';
        document.getElementById('day').style.borderColor = '#ff5757';
    }
    if (month.length == 0) {
        document.getElementById('monthError').style.display = 'block';
        document.getElementById('monthError').style.color = '#ff5757';
        document.getElementById('monthLabel').style.color = '#ff5757';
        document.getElementById('Month').style.borderColor = '#ff5757';
    }
    if (year.length == 0) {
        document.getElementById('yearError').style.display = 'block';
        document.getElementById('yearError').style.color = '#ff5757';
        document.getElementById('yearLabel').style.color = '#ff5757';
        document.getElementById('year').style.borderColor = '#ff5757';
    }


    if (day.length > 0 && month.length > 0 && year.length > 0) {

        calculator(day, month, year);
    }


}


const calculator = (day, month, year) => {

    // birth dates

    let birthDate = day;
    let birthMonth = month;
    let birthYear = year;

    // current dates

    let date = new Date();
    let currDate = date.getDate();
    let currMonth = date.getMonth() + 1;
    let currYear = date.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthYear > currYear) {

        document.getElementById('yearError1').style.display = 'block';
        document.getElementById('yearError1').style.color = '#ff5757';
        document.getElementById('yearLabel').style.color = '#ff5757';

    }
    if (birthMonth > 12) {
        document.getElementById('monthError1').style.display = 'block';
        document.getElementById('monthError1').style.color = '#ff5757';
        document.getElementById('monthLabel').style.color = '#ff5757';
    }
    if (birthDate > 31) {
        document.getElementById('dayError1').style.display = 'block';
        document.getElementById('dayError1').style.color = '#ff5757';
        document.getElementById('dayLabel').style.color = '#ff5757';
    }
    else {


        if (birthDate > currDate) {
            currDate = currDate + months[currMonth - 1];
            currMonth = currMonth - 1;
        }
        if (birthMonth > currMonth) {
            currMonth = currMonth + 12;
            currYear = currYear - 1;
        }

        let d = currDate - birthDate;
        let m = currMonth - birthMonth;
        let y = currYear - birthYear;


        // adding the result in display

        document.getElementById('y').innerText = y < 10 ? `0${y}` : y;
        document.getElementById('m').innerText = m < 10 ? `0${m}` : m;
        document.getElementById('d').innerText = d < 10 ? `0${d}` : d;

        days.innerText = day;
        months.innerText = month;
        years.innerText = year

    }

}
