
export function handleMenu() {
    const content = document.querySelector('.content')


    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')

    

    const paraOne = document.createElement('p')
    const paraOne1 = document.createElement('p')
    const paraOne2 = document.createElement('p')
    const paraTwo = document.createElement('p')
    const paraTwo1 = document.createElement('p')
    const paraTwo2 = document.createElement('p')


    h1.textContent = 'Appetizers'
    h2.textContent = 'Entrees'
    paraOne.textContent = 'A1. Summer Rolls 4.95'
    paraOne1.textContent = 'A2. Tofu Summer Rolls 4.95' 
    paraOne2.textContent = 'A3. Spring Rolls 4.95'
    paraTwo.textContent = 'B1. Grilled Meat Vermicelli 12.99'
    paraTwo1.textContent = 'B2. Combination Vermicelli 13.99' 
    paraTwo2.textContent = 'B3. Shrimp Vermicelli 13.99'

   content.appendChild(h1)
   content.appendChild(paraOne)
   content.appendChild(paraOne1)
   content.appendChild(paraOne2)
   content.appendChild(h2)
   content.appendChild(paraTwo)
   content.appendChild(paraTwo1)
   content.appendChild(paraTwo2)
}