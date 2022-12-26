let innerCursor=document.querySelector('.inner-cursor');
let outerCursor=document.querySelector('.outer-cursor');


function moveCursor(e){
    let x=e.clientX;
    let y=e.clientY;
    //console.log(x, y);
    innerCursor.style.left=`${x}px`;
    innerCursor.style.top=`${y}px`;
    outerCursor.style.left=`${x}px`;
    outerCursor.style.top=`${y}px`;
}


document.addEventListener("mousemove",moveCursor);


let links=Array.from(document.querySelectorAll("a"));

links.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow');

    });
    link.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('grow');

    });
})


const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const text=  entry.target.querySelector('.First_text p1');
    const header_first_line= entry.target.querySelector('.First_text h1');
    const header_second_line= entry.target.querySelector('.First_text h2');


    if (entry.isIntersecting) {
      console.log("yes");
      text.classList.add('fade');
      header_first_line.classList.add('typing_1');
      header_second_line.classList.add('typing_2');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    header_first_line.classList.remove('typing_1');
    header_second_line.classList.remove('typing_2');
    text.classList.remove('fade');
  });
});

observer1.observe(document.querySelector('.First-view'));



const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Keyword_element_1 = entry.target.querySelector('.keyword_list li:nth-child(1)');
    const Keyword_element_2 = entry.target.querySelector('.keyword_list li:nth-child(2)');
    const Keyword_element_3 = entry.target.querySelector('.keyword_list li:nth-child(3)');

    if (entry.isIntersecting) {
      console.log("yes");
      Keyword_element_1.classList.add('Keyword_element_animate');
      Keyword_element_2.classList.add('Keyword_element_animate');
      Keyword_element_3.classList.add('Keyword_element_animate');
      console.log("yes");

	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    Keyword_element_1.classList.remove('Keyword_element_animate');
    Keyword_element_2.classList.remove('Keyword_element_animate');
    Keyword_element_3.classList.remove('Keyword_element_animate');
  });
});

observer2.observe(document.querySelector('.Second-view'));




const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Gestion_box_container_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1)');
    const Gestion_box_container_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2)');
    const Gestion_box_container_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3)');



    const Gestion_box_header_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1) h1');
    const Gestion_box_header_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2) h1');
    const Gestion_box_header_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3) h1');


    const Gestion_box_description_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1) p2');
    const Gestion_box_description_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2) p2');
    const Gestion_box_description_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3) p2');


    if (entry.isIntersecting) {
      console.log("yes");
      Gestion_box_container_1.classList.add('border-trace');
      Gestion_box_container_2.classList.add('border-trace');
      Gestion_box_container_3.classList.add('border-trace');


      Gestion_box_header_1.classList.add('fade');
      Gestion_box_header_2.classList.add('fade');
      Gestion_box_header_3.classList.add('fade');


      Gestion_box_description_1.classList.add('fade');
      Gestion_box_description_2.classList.add('fade');
      Gestion_box_description_3.classList.add('fade');


      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    Gestion_box_container_1.classList.remove('border-trace');
    Gestion_box_container_2.classList.remove('border-trace');
    Gestion_box_container_3.classList.remove('border-trace');



    Gestion_box_header_1.classList.remove('fade');
    Gestion_box_header_2.classList.remove('fade');
    Gestion_box_header_3.classList.remove('fade');

    Gestion_box_description_1.classList.remove('fade');
    Gestion_box_description_2.classList.remove('fade');
    Gestion_box_description_3.classList.remove('fade');
  });
});

observer3.observe(document.querySelector('.Gestion_box_list'));



// Array of all pages
let homePage=document.getElementById("Acceuil_page");
let AboutPage=document.getElementById("A_propos_page");
let ContactPage=document.getElementById("Contact_Page");
let ServicePage=document.getElementById("Service_Page");

const Pages = [homePage, AboutPage, ContactPage, ServicePage];


function changePage(x){
    for (let i = 0; i < Pages.length; i++) {
        if (Pages[i].id != x){
            Pages[i].style.display="none";
        }
        else{
            Pages[i].style.display="block";
        }
    }

}



