let mune = document.querySelector('#mune');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

onscroll = () => {
  sections.forEach(sec =>{ 
    let top = scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    


    if ( top => offset && top < offset + hieght){
      navLink.forEach(links => links.classList.remove('active'));
      document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
    }
})
}
mune.onclick =() => {
  mune.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  
}
