let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}


var c=new Image("../images/blogbg.jpeg");
c.onload=function(){
   //render the form
}