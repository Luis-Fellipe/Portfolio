const acordeonDetails = document.querySelectorAll('.acordeon .details')

acordeonDetails.forEach((detail) => {
    detail.addEventListener('click', (e) => {
        const acordeon = detail.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
}) 