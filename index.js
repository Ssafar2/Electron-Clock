let clockSingle, clockPlural, minuteSingle, minutePlural, secondSingle, secondPlural, intervalId, timer, basla, stopped, events, dayan, temizle;


events = document.getElementById('events');
basla = document.getElementById('basla');
dayan = document.getElementById('dayan');

basla.addEventListener('click', baslat);


stopped = document.createElement('button');
stopped.style.display = 'none';
stopped.id = 'dayan';
stopped.type = 'button';
stopped.addEventListener('click', dayandir);
events.appendChild(stopped);

stoppedIcon = document.createElement('i');
stoppedIcon.className = 'bi bi-pause-circle';
stopped.appendChild(stoppedIcon);



temizle = document.createElement('button');
temizle.style.display = 'none';
temizle.id = 'temizle';
temizle.type = 'button';
temizle.addEventListener('click', sil);
events.appendChild(temizle);

temizleIcon = document.createElement('i');
temizleIcon.className = "bi bi-stop-circle";
temizle.appendChild(temizleIcon)


function times1(singleTime, pluralTime) {
    singleTime.textContent = 0;
    pluralTime.textContent = +pluralTime.textContent + 1;
}

function times2(singleTime2, pluralTime2, anyTime) {
    singleTime2.textContent = 0;
    pluralTime2.textContent = 0;
    anyTime.textContent = +anyTime.textContent + 1;
}

function time() {

    clockSingle = document.getElementById('clockSingle');
    minuteSingle = document.getElementById('minuteSingle');
    secondSingle = document.getElementById('secondSingle');

    clockPlural = document.getElementById('clockPlural');
    minutePlural = document.getElementById('minutePlural');
    secondPlural = document.getElementById('secondPlural');
    timer = 0;


    if (timer == 0) {
        secondSingle.textContent = +secondSingle.textContent + 1;

        if (secondSingle.textContent == 10) {
            times1(secondSingle, secondPlural);

            if (secondSingle.textContent == 0 && secondPlural.textContent == 6) {
                times2(secondSingle, secondPlural, minuteSingle);

                if (minuteSingle.textContent == 10) {
                    times1(minuteSingle, minutePlural);

                    if (minuteSingle.textContent == 0 && minutePlural.textContent == 6) {
                        times2(minuteSingle, minutePlural, clockSingle);

                        if (clockSingle.textContent == 10) {
                            times1(clockSingle, clockPlural);
                        }
                    }
                }
            }
        }
    }
    if (clockSingle.textContent == 4 && clockPlural.textContent == 2) {
        reset()
    }
}


function reset() {
    secondSingle.textContent = 0;
    secondPlural.textContent = 0;
    minuteSingle.textContent = 0;
    minutePlural.textContent = 0;
    clockSingle.textContent = 0;
    clockPlural.textContent = 0;
}

function sil() {
    reset();
    temizle.style.display = 'none';
    stopped.style.display = 'none';
    dayandir();
    temizle.style.display = 'none';
}

function baslat() {
    intervalId = setInterval(time, 1000);
    basla.style.display = "none";
    stopped.style.display = 'inline-block';
    temizle.style.display = 'inline-block';
}

function dayandir() {
    clearInterval(intervalId);
    basla.style.display = "inline-block";
    stopped.style.display = 'none';
    temizle.style.display = 'inline-block';
}
