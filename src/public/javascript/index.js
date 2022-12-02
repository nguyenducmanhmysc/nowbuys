
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.onload = function() {
    handleEffectHeader();
    handleButtonBrandAndSort();
}

function handleEffectHeader() {
    var position = 0;
    window.addEventListener("scroll", function(event) { 
        var scroll_y = this.scrollY; 
        var headerMain = $('.header-main');
        var headerSub = $('.header-sub');

        if (scroll_y > position && scroll_y > 90) {
            headerMain.style.height = '0px';
            position = scroll_y;
            headerSub.style.boxShadow = '0px 1px 5px 1px #000';
            
        }
        if (scroll_y < position && scroll_y < 180) {
            headerMain.style.height = '90px';
            position = scroll_y;
            headerSub.style.boxShadow = '0px 0px 0px 0px #000';
        }

        // show/hidden button back to top
        if (scroll_y >= window.innerHeight) {
            $('.scroll-to-top').style.top = window.innerHeight - 90 + 'px';
        }
        if (scroll_y <= window.innerHeight){
            $('.scroll-to-top').style.top = window.innerHeight + 10 + 'px';
        }
        // console.log(window.scrollY);
        console.log($('.body_phone').offsetTop);

        if (window.scrollY >= $('.body_phone').offsetTop) {
            swiperPhone.autoplay.start();
        }
        if (window.scrollY >= $('.body_laptop').offsetTop) {
            swiperLaptop.autoplay.start();
        }
    });

    // add back to top action for button back to top
    $('.scroll-to-top').addEventListener('click', (e) => {
        $('.scroll-to-top').style.top = window.innerHeight + 10 + 'px';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}


function handleButtonBrandAndSort() {
    if (document.querySelectorAll('.button-brand'))
    document.querySelectorAll('.button-brand').forEach((item) => {
        item.onclick = function(e) {
            if (document.querySelector('.button-brand.checked'))
                document.querySelector('.button-brand.checked').classList.remove('checked');
            this.classList.add('checked');
        }
    })
    
    if (document.querySelectorAll('.button-sort'))
        document.querySelectorAll('.button-sort').forEach((item) => {
            item.onclick = function(e) {
                if (document.querySelector('.button-sort.checked'))
                    document.querySelector('.button-sort.checked').classList.remove('checked');
                this.classList.add('checked');
            }
        })
}