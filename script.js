var name = ''

function changeName(element) {
    // console.log(element.value)
    name = element.value
}

function searchForChars() {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            console.log(data)
            var character = data.results[0]
            var div = document.querySelector("#display")

            if (character) {
                div.innerHTML = `
            <p>Name: ${character.name}</p>
            <p>Height: ${character.height}</p>
            <p>Birth Year: ${character.birth_year}</p>
            ` 
            } else {
                div.innerHTML = `<h1>CHARACTER NOT FOUND</h1>`
            }
        })
}