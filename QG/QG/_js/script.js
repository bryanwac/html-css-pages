const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.aimg')
images.forEach(image =>{
    image.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img = document.createElement('.aimg')
        img.src = image.src
        while(lightbox.firstChild){//n deixar a foto duplicada no lightbox
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')//ocultando o active do lbox
})