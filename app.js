// console.log('this is cv scanner');

// const url = "data.txt";
// fetch(url).then(res => {
//     return res.json();
// }).then(data => {

//     data.forEach(elem => {

//         const toString = JSON.stringify(elem).toLowerCase();
//         const toJSON = JSON.parse(toString)
//         // console.log(toJSON);
//         if (toJSON.city == 'mumbai') {
//             // for (const iterator2 in toJSON) {
//             //     console.log(toJSON[iterator2]);
//             // }
//             console.log(toJSON);
//         }
//     });
//     // console.log(data);
// })

console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

// cv itrator 

function cvinrator(profiles) {
    let index = 0;
    return {
        next: function () {
            return index < profiles.length ?
                { value: profiles[index++], done: false } :
                { done: true }
        }
    };
}


const candidate = cvinrator(data);


// adding addEventListener 
const nextElem = document.getElementById('next');
nextElem.addEventListener('click', nextCV);
nextCV();

function nextCV() {

    const currentCandidate = candidate.next().value;
    if (currentCandidate != undefined) {
        const imgElem = document.querySelector('#image');
        imgElem.innerHTML = `<img src="${currentCandidate.image}">`
        const profile = document.querySelector('#profile')
        profile.innerHTML =
            `
        <p>${currentCandidate.name}</p>
        <p>${currentCandidate.age}</p>
        <p>${currentCandidate.city}</p>
        <p>${currentCandidate.language}</p>
        <p>${currentCandidate.framework}</p>`;
        // console.log(currentCandidate);
    }
    else {
        const smsElem = document.querySelector('.sms');
        smsElem.innerHTML = "Your List Has Been ended";
        smsElem.style.backgroundColor = 'red';
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}





















// // CV Iterator
// function cvIterator(profiles) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < profiles.length ?
//                 { value: profiles[nextIndex++], done: false } :
//                 { done: true }
//         }
//     };
// }
// const candidates = cvIterator(data);

// nextCV();
// // Button listener for next button
// const next = document.getElementById('next');
// next.addEventListener('click', nextCV);


// function nextCV() {
//     const currentCandidate = candidates.next().value;
//     let image = document.getElementById('image');
//     let profile = document.getElementById('profile');
//     if (currentCandidate != undefined) {
//         image.innerHTML = `<img src='${currentCandidate.image}'>`;
//         profile.innerHTML = `<ul class="list-group">
//     <li class="list-group-item">Name: ${currentCandidate.name}</li>
//     <li class="list-group-item">${currentCandidate.age} years old</li>
//     <li class="list-group-item">Lives in ${currentCandidate.city}</li>
//     <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
//     <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
//   </ul>`;
//     }
//     else {
//         alert('End of candidate applications');
//         window.location.reload();
//     }

// }







