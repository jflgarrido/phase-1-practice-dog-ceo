//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//Challenge 1 SUCCESS
/*
function addToDOM(data){
    console.log(data)
    let dogPicture = document.createElement('img')
    dogPicture.src = data.message[0]
    document.getElementById('dog-image-container').appendChild(dogPicture)
} */

//Challenge 2 & 3 SUCCESS without help!
/*
function addToDOM(data){
    let breedList = data.message
    breedListArray = Object.keys(breedList)
    breedListArray.forEach(element => {
        let breedOfDog = document.createElement('li')
        breedOfDog.innerText = element
        breedOfDog.classList.add('colorChange')
        document.getElementById('dog-breeds').appendChild(breedOfDog)
    })
    let clickMe = document.getElementsByClassName('colorChange')
    for (const doggie of clickMe) {
        doggie.addEventListener('click',function(e){
            e.target.style.color = 'red'
        })
    }
} */

//Challenge 4 SUCCESS!
function addToDOM(data){
    const breedList = data.message
    const breedListArray = Object.keys(breedList)

    const options = document.getElementById('breed-dropdown')
    options.addEventListener('change', function(){
        document.getElementById('dog-breeds').innerText=''
        const letter = options.value;
        const newArray = breedListArray.filter(breed => breed.startsWith(letter))

        newArray.forEach(element => {
        let breedOfDog = document.createElement('li')
        breedOfDog.innerText = element
        document.getElementById('dog-breeds').appendChild(breedOfDog)
        })
    })
}



function getImages(){
    fetch(breedUrl)
    .then((res) => res.json())
    .then(function(data){
        addToDOM(data)
    }
        )
}

document.addEventListener('DOMContentLoaded', getImages);