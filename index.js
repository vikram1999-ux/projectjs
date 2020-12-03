console.log('THIS IS CV SCREENER PROJECT');

// data is an array of objects which contains information about the candidates
const data = [

    {
        name: 'elina',
        age: 24,
        city: 'newyork',
        language: 'javascript',
        framework: 'react',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },

    {
        name: 'evanka',
        age: 23,
        city: 'lebanon',
        language: 'php',
        framework: 'laravel',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'stormy daniels',
        age: 22,
        city: 'london',
        language: 'javascript',
        framework: 'express',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'camila',
        age: 22,
        city: 'austria',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/women/73.jpg'
    },
    {
        name: 'alieta',
        age: 25,
        city: 'america',
        language: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
]


//CV iterator
function CVIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

const candidates = CVIterator(data);
nextCV();

//Button listener for next button
const next = document.getElementById('next')
next.addEventListener('click', nextCV);



function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
   
    <li class="list-group-item">NAME : ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily Works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
    }
    else {
        alert('End of applications');
        window.location.reload();
    }
}