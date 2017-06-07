const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
	ev.preventDefault()
	const f = ev.target
	const details = document.querySelector('#details')
    // const name = f.personName.value
    // const favoriteColor = f.favoriteColor.value
    // const age = f.age.value
    const person = {
        name: f.personName.value,
        favoriteColor: renderColor(f.favoriteColor.value).outerHTML,
        age: f.age.value,
    }


    //const colorDiv = `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>`

    //details.innerHTML += `<strong>${name}</strong>`//string interpolation
    // const boldedName = document.createElement('strong') //same as the above but more versatile
    // boldedName.textContent = name
    // details.appendChild(boldedName) DOM element: better than innerHTML because it does not convert what is not a string into a string
    //const colorDiv =`<div></div>`

    
    // details.innerHTML = `
    //      <ul>
    //         <li>Name: ${name}</li>
    //         <li>Favorite Color: ${colorDiv}</li>
    //         <li>Age ${age}</li>
    //      </ul>
    // `

    //Day 2 LAB
    // const nameItem = document.createElement('li')
    // nameItem.textContent = `Name: ${name}`
    // const colorItem = document.createElement('li')
    // colorItem.innerHTML = `Color: ${renderColor(favoriteColor).outerHTML}`
    // const ageItem = document.createElement('li')
    // ageItem.textContent = `Age: ${age}`

    // const list = document.createElement('ul')
    // list.appendChild(nameItem)
    // list.appendChild(colorItem)
    // list.appendChild(ageItem)

    const list = renderList(person)
    //details.appendChild(renderList(person))
    details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)
function renderColor(color){
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div
}

function renderListItem(label, value){
    const item = document.createElement('li')
    item.innerHTML = `${label}: ${value}`

    return item
}

function renderList(personData) {
    const list = document.createElement('ul')
    //call renderListItem several times?
    Object.keys(personData).map(function(label){
        const item = renderListItem(label, personData[label])
        list.appendChild(item)
    }) //gives us an array of our titles

    return list
}
