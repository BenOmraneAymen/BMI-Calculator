const main = document.querySelector('main');
const weight = document.querySelector('#weight');
const increase_weight = document.querySelector('.increase-weight');
const decrease_weight = document.querySelector('.decrease-weight');
const height = document.querySelector('#height');
const increase_height = document.querySelector('.increase-height');
const decrease_height = document.querySelector('.decrease-height');
const age = document.querySelector('#age');
const increase_age = document.querySelector('.increase-age');
const decrease_age = document.querySelector('.decrease-age');
const sexe = document.querySelector('.sexe');
const result = document.querySelector('.submit');
const resultContainer = document.querySelector('#result');

function execMouseDown() {
    increase_weight.style.color = "white";
}


increase_weight.addEventListener('click', increaseWeight);

function increaseWeight() {

    let int = parseInt(weight.textContent);
    int += 1;
    weight.textContent = int;
    const s = document.createElement('span');
    s.innerText = 'kg';
    weight.appendChild(s);
}

increase_weight.addEventListener('mousedown', fastWeightIncrease);

function fastWeightIncrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_weight.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(weight.innerText);
        int += 1;
        weight.innerText = int;
        const s = document.createElement('span');
        s.innerText = 'kg';
        weight.appendChild(s);
    }, 100);
    increase_weight.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}


decrease_weight.addEventListener('click', decreaseWeight);

function decreaseWeight() {
    let int = parseInt(weight.textContent);
    int -= 1;
    if (int < 0) {
        alert("weight can't be lower than zero ")
    }
    else {
        weight.textContent = int;
        const s = document.createElement('span');
        s.innerText = 'kg';
        weight.appendChild(s);
    }
}

decrease_weight.addEventListener('mousedown', fastWeightdecrease);

function fastWeightdecrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_weight.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(weight.innerText);
        if (int > 0) {
            int -= 1;
            weight.innerText = int;
            const s = document.createElement('span');
            s.innerText = 'kg';
            weight.appendChild(s);
        }
        else {
            alert("weight can't be lower than zero ");
            clearInterval(repeat);
        }
    }, 100);
    decrease_weight.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}

increase_height.addEventListener('click', increaseHeight);

function increaseHeight() {
    let int = parseInt(height.textContent);
    int += 1;
    height.textContent = int;
    const s = document.createElement('span');
    s.innerText = 'cm';
    height.appendChild(s);
}

increase_height.addEventListener('mousedown', fastHeightIncrease);

function fastHeightIncrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_height.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(height.innerText);
        int += 1;
        height.innerText = int;
        const s = document.createElement('span');
        s.innerText = 'cm';
        height.appendChild(s);
    }, 100);
    increase_height.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}

decrease_height.addEventListener('click', decreaseHeight);

function decreaseHeight() {
    let int = parseInt(height.textContent);
    int -= 1;
    if (int < 0) {
        alert("height can't be lower than zero ")
    }
    else {
        height.textContent = int;
        const s = document.createElement('span');
        s.innerText = 'cm';
        height.appendChild(s);
    }
}

decrease_height.addEventListener('mousedown', fastHeightdecrease);

function fastHeightdecrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_height.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(height.innerText);
        if (int > 0) {
            int -= 1;
            height.innerText = int;
            const s = document.createElement('span');
            s.innerText = 'kg';
            height.appendChild(s);
        }
        else {
            alert("weight can't be lower than zero ");
            clearInterval(repeat);
        }
    }, 100);
    decrease_height.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}

increase_age.addEventListener('click', increaseAge);

function increaseAge() {
    let int = parseInt(age.textContent);
    int += 1;
    age.textContent = int;
}

increase_age.addEventListener('mousedown', fastAgeIncrease);

function fastAgeIncrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_height.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(age.innerText);
        int += 1;
        age.innerText = int;
    }, 100);
    increase_age.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}

decrease_age.addEventListener('click', decreaseAge);

function decreaseAge() {
    let int = parseInt(age.textContent);
    int -= 1;
    if (int < 0) {
        alert("height can't be lower than zero ")
    }
    else {
        age.textContent = int;
    }
}

decrease_age.addEventListener('mousedown', fastAgedecrease);

function fastAgedecrease() {
    mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down      
    increase_age.style.color = "grey";
    var repeat = setInterval(function () {
        int = parseInt(age.innerText);
        if (int > 0) {
            int -= 1;
            age.innerText = int;
        }
        else {
            alert("weight can't be lower than zero ");
            clearInterval(repeat);
        }
    }, 100);
    decrease_age.addEventListener('mouseup', function () {
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        clearInterval(repeat);
    });
}

sexe.addEventListener('click', gender);

function gender() {
    const check = document.querySelector('.check');
    const sections = document.querySelectorAll('.mini_section');
    const body = document.querySelector('body');
    if (check.checked === true) {
        check.checked = false;
        sections.forEach(section => {
            section.style.backgroundColor = 'rgb(7, 7, 59)';
        });
        body.style.backgroundColor = 'rgb(20, 20, 61)';
    }
    else {
        check.checked = true;
        sections.forEach(section => {
            section.style.backgroundColor = '#7e0b9e';
        });
        body.style.backgroundColor = '#ce1cff';
    }

    const s = document.querySelector('.swipe');
    s.classList.toggle("swiped");
}

result.addEventListener('click', submit)

function submit() {
    let w = parseInt(weight.textContent);
    let h = parseInt(height.textContent);
    let BMI = (w * 10000) / (h * h);
    if (resultContainer.children.length > 1) {
        var container = document.querySelector('.Result_container');
        const miniContainer = document.querySelector('.details');
        const p = document.querySelector('.result');
        container.removeChild(miniContainer);
        container.removeChild(p);
        container.remove();
        console.log(1234);
    }
    if (isNaN(BMI)) {
        alert('Please enter your informations.');
    }
    else {
        const p = document.createElement('span');
        p.innerText = "Your BMI is " + BMI.toFixed(2);
        p.className = 'result';
        const detail = document.createElement('span');
        detail.className = 'detail';
        const image = document.createElement('img');
        image.className = 'demo';
        const check = document.querySelector('.check');
        const container = document.createElement('div');
        container.className = 'Result_container';
        const miniContainer = document.createElement('div');
        miniContainer.className = 'details';
        switch (true) {
            case (BMI < 18.5):
                {
                    container.style.backgroundColor = '#e3d844';
                    detail.innerText = 'You are underweight';
                    if (check.checked == true) {
                        image.src = 'images/woman1.png';
                    }
                    else {
                        image.src = 'images/man1.png';
                    }
                    break;
                }
            case (BMI < 24.9):
                container.style.backgroundColor = '#76e344';
                detail.innerText = 'You have a normal weight';
                if (check.checked == true) {
                    image.src = 'images/woman2.png';
                }
                else {
                    image.src = 'images/man2.png';
                }
                break;
            case (BMI < 29.9):
                container.style.backgroundColor = '#fc9403';
                detail.innerText = 'You are slightly overweight';
                if (check.checked == true) {
                    image.src = 'images/woman3.png';
                }
                else {
                    image.src = 'images/man3.png';
                }
                break;
            case (BMI < 34.9):
                container.style.backgroundColor = '#fc6203';
                detail.innerText = 'You have a class I obesity';
                if (check.checked == true) {
                    image.src = 'images/woman4.png';
                }
                else {
                    image.src = 'images/man4.png';
                }
                break;
            case (34.9  < BMI):
                container.style.backgroundColor = '#ff1900';
                detail.innerText = 'You have a class II obesity';
                if (check.checked == true) {
                    image.src = 'images/woman5.png';
                }
                else {
                    image.src = 'images/man5.png';
                }
                break;

        }
        container.appendChild(p);
        container.appendChild(document.createElement('br'));
        miniContainer.appendChild(image);
        miniContainer.appendChild(detail);
        container.appendChild(miniContainer);
        resultContainer.appendChild(container);
    }
}
