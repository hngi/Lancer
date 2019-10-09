let add = document.querySelector('#add');
let info = document.querySelector('#info');

const ncont = () =>{
    let newContact = document.createElement('div');
    newContact.innerHTML= `
                <div class="row">
                        <p class="sp">Contact name </p> 
                        <input type="text" class="con" placeholder="e.g Ben Davies"> 
                    </div>
                    <div class="row">   
                        <p class="sp">Contact email </p>
                        <input type="email" class="con" placeholder="e.g email@domain.com " required>
                    </div>`;
    document.querySelector('#contact').appendChild(newContact);
}
document.querySelector('#plus').addEventListener('click',ncont);

const show = () =>{
    add.style.display='none';
    info.style.display='block'
}
add.addEventListener('click',show);