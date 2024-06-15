let wrapper = document.querySelector('.wrapper')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            let card = document.createElement('div')
            card.innerHTML = `
           <h2>Ismi:${user.name}</h2>
           <p>Username:${user.username}</p>
           <p>Manzil:${user.address.street}</p>
           <p>Email:${user.email}</p>
           `
            card.classList.add('card')
            wrapper.appendChild(card)
        })
    })


