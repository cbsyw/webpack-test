
export function handleAbout() {
    const content = document.querySelector('.content')


    const h1 = document.createElement('h1')

    


    const paraOne = document.createElement('p')
    const paraOne1 = document.createElement('p')
    const paraOne2 = document.createElement('p')

    h1.textContent = 'About'
    paraOne.textContent = 'At Lotus Café, we’re more than just a restaurant—we’re a family. Our journey began with a passion for sharing the rich and vibrant flavors of Vietnamese cuisine with our community.'
    paraOne1.textContent = 'Our family-owned café is rooted in the traditions of Vietnam, where each meal is an opportunity to gather, celebrate, and create memories. Every dish we serve is crafted with love and dedication, using recipes that have been passed down through generations.'
    paraOne2.textContent = 'Thank you for visiting our site. We can’t wait to welcome you to our café and share the magic of Vietnamese cuisine with you. We hope to see you soon!'

    content.appendChild(h1)
    content.appendChild(paraOne)
    content.appendChild(paraOne1)
    content.appendChild(paraOne2)
}

