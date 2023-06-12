
let showButton = document.querySelector('#showButton')
let fullnameInput = document.querySelector('#fullnameInput')
let ageInput = document.querySelector('#ageInput')
let tableBody = document.querySelector('#table tbody')

let rowCounter = 1

showButton.onclick = () => {
    let fullname = fullnameInput.value
    let age = ageInput.value

    if (fullname && age) {
        let birthYear = new Date().getFullYear() - age
        let row = document.createElement('tr')
        let numberCell = document.createElement('td')
        let fullnameCell = document.createElement('td')
        let ageCell = document.createElement('td')
        let actionsCell = document.createElement('td')
        let editButton = document.createElement('button')
        let deleteButton = document.createElement('button')
        editButton.classList.add('btn-action')
        deleteButton.classList.add('btn-action')

        numberCell.innerHTML = rowCounter++
        fullnameCell.innerHTML = fullname
        ageCell.innerHTML = birthYear

        editButton.innerHTML = '🖋'
        deleteButton.innerHTML = '🗑'

        editButton.onclick = () => {

            let newFullname = prompt('Введите новое имя:', fullname)
            if (newFullname) {
                fullnameCell.innerHTML = newFullname
            }

            let newAge = +prompt('Введите новый возраст:', age)
            if (newAge) {
                let newBirthYear = new Date().getFullYear() - (+newAge)
                ageCell.innerHTML = newBirthYear
            }
        }

        deleteButton.onclick = () => {
            tableBody.remove(row)
        }

        actionsCell.append(editButton)
        actionsCell.append(deleteButton)

        row.append(numberCell)
        row.append(fullnameCell)
        row.append(ageCell)
        row.append(actionsCell)

        tableBody.append(row)

        fullnameInput.value = ''
        ageInput.value = ''
    }
}

