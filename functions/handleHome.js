export function handleHome() {
    const content = document.querySelector('.content');

    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    const button = document.createElement('button')

    h1.textContent = 'Good Eats Only'
     p.textContent = 'A place to eat, A place that feels like home.'
     p2.textContent = 'Located at 8077 Georgia Avenue, Silver Spring, Maryland 20910'
     button.textContent = 'Call Now'
     

    



    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(p2);
    content.appendChild(button);

}

