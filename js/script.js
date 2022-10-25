const container = document.querySelector('.container-gg');

for (let i = 1; i <= 100; i++) {
    
    const box = document.createElement('div');
    
    box.className = 'box';
    
    if (!(i % 15))
    {
        box.classList.add('orange');
        box.innerHTML = 'fizzbuzz';
    } 
    else if (!(i % 5))
    {
        box.classList.add('firebrick');
        box.innerHTML = 'buzz';
    }
    else if (!(i % 3))
    {
        box.classList.add('purple');
        box.innerHTML = 'fizz';
    }
    else
    {
        box.classList.add('azure');
        box.innerHTML = i;
    }

    container.append(box);

};


// SOLUZIONE DI HENRY PER IL 'FOR'===============================

// for (let num = 1; num <= 100; num++) {

//     let numString = num;
    
//     if (num % 15 == 0)
//     {
//         numString = num + '- fizzbuzz';
//     }
//     else if (num % 5 == 0)
//     {
//         numString = num + '- buzz';
//     }
//     else if (num % 3 == 0)
//     {
//         numString = num + '- fizz';
//     }
// };