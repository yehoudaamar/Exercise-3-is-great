function buildHeader(){
    const aa = document.createElement('header')
    aa.textContent = 'תרגיל מספר - 3'
    aa.classList.add('header')
return aa
}
function buildDescription(){
    const div = document.createElement('div')
    div.setAttribute('id','Who')

    const h2 = document.createElement('h2')
    h2.textContent = 'Who we are' 

    const p =document.createElement('p')
    p.textContent = 'Gif search Engine is to search the images from the given user input keywords and the output of the image'
       
    div.appendChild(h2)
    div.appendChild(p)

    return div
} 
function buildDescription1() {


    const div1 = document.createElement('div')
    div1.setAttribute('class', 'container')

    const h2 = document.createElement('h2')
    h2.textContent = 'our mission'

    const p = document.createElement('p')
    p.textContent = 'In this article, we will create a Gif Search Engine using JavaScript. The basic application of Gif search Engine is to search the images from the given user input keywords and the output of the image  '

    const mydiv1 = document.createElement('div')
    mydiv1.setAttribute('class', 'mydiv')

    mydiv1.appendChild(h2)
    mydiv1.appendChild(p)

    const h21 = document.createElement('h2')
    h21.textContent = 'our vision'

    const p1 = document.createElement('p')
    p1.textContent = 'In this article, we will create a Gif Search Engine using JavaScript. The basic application of Gif search Engine is to search the images from the given user input keywords and the output of the image  '

    const mydiv2 = document.createElement('div')
    mydiv2.setAttribute('class', 'mydiv')

    mydiv2.appendChild(h21)
    mydiv2.appendChild(p1)

    const h22 = document.createElement('h2')
    h22.textContent = 'our valuse'

    const p2 = document.createElement('p')
    p2.textContent = 'In this article, we will create a Gif Search Engine using JavaScript. The basic application of Gif search Engine is to search the images from the given user input keywords and the output of the image  '
  
    const mydiv3 = document.createElement('div')
    mydiv3.setAttribute('class', 'mydiv')

    mydiv3.appendChild(h22)
    mydiv3.appendChild(p2)
    
    const Square = document.createElement('div')
    Square.setAttribute('id', 'Square')

    div1.appendChild(mydiv1)
    div1.appendChild(mydiv2)
    div1.appendChild(mydiv3)

    div1.appendChild(Square)

    return div1
} 

function footer() {

    const footer = document.createElement('footer')

    footer.textContent = 'hello -  webscool'

    footer.classList.add('footer')

    return footer
}
function buildPage() {

    const body = document.querySelector('body');
    body.classList.add('body');

    body.appendChild(buildHeader());

    body.appendChild(buildDescription());

    body.appendChild(buildDescription1())
 
    body.appendChild(footer())
}
buildPage() 







