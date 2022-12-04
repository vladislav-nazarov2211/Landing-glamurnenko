$('.button-up').on('click', function() {
    $('body, html').animate({scrollTop: 0}, 1000)
})

$(window).on('scroll', function() {
    let header = document.querySelector('.menu')
    
    if (window.pageYOffset > 900) {
        header.classList.add('menu-fixed')
    } else {
        header.classList.remove('menu-fixed')
    }
})

$('.btn-menu').on('click', function() {
    let menu = document.querySelector('.media-menu')
    if (menu) {
        menu.remove()
    } else {
        let conteiner = document.querySelector('body') 

        let marcup = `<div class="media-menu">
                        <div><a href='#'>Блог</a></div>
                        <div><a href='#'>Бесплатно</a></div>
                        <div><a href='#'>Семинары</a></div>
                        <div><a href='#'>Тренинги</a></div>
                        <div><a href='#'>Услуги</a></div>
                        <div><a href='#'>Отзывы</a></div>
                        <div><a href='#'>Контакты</a></div>
                        <div><a href="tel:88007070513">8(800)707-05-13</a></div>
                        <div><a href="tel:88007070513">+7(499)350-23-35</a></div>
                        <ul class="social-icons">
                            <li class="insta">
                                <img src="./img/instagram.png" alt="insta">
                            </li>
                            <li class="facebook">
                                <img src="./img/facebook.png" alt="facebook">
                            </li>
                            <li class="vk">
                                <img src="./img/vk.png" alt="vk">
                            </li>
                        </ul>
                    </div>`
        conteiner.insertAdjacentHTML('beforeend', marcup) 
    }           
})