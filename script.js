class SCROLL {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.el.style.position = 'fixed'
        if (window.innerHeight - this.el.offsetHeight - window.scrollY >= 0) {
            this.el.style.top = (window.innerHeight - this.el.offsetHeight - window.scrollY) + 'px'
        } else {
            this.el.style.top = 0
        }
    }
}
const myScroll = new SCROLL({
    el: '.header__nav',
})
class TEXT {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.str()
    }
    str(i = 0) {
        this.el.innerHTML += this.text[i];
        i++;
        if (i < this.text.length) {
            setTimeout(() => {
                this.str(i)
            }, 80);
        }
    }
}
const text = new TEXT({
    el: '.header__content h1',
})
const text2 = new TEXT({
    el: '.header__content p',
})
const text3 = new TEXT({
    el: '.info__scroll-desc',
})

let title = document.querySelector('.header__content')

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
title.addEventListener('mouseover', () => {
    title.style = `left:${random(2, 50)}%;
                   top:${random(4,60)}%;
                   bottom:${random(2,50)}%;
                   right:${random(6,60)}%;`
 })
let randomson = (random)
    console.log();
