const allButtons = document.querySelectorAll('.button');
const text = document.querySelector('.textarea');

let string = '';


allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('equal')){
            string = eval(string)
            string = String(string)
            text.innerHTML = string;
        }
        else if(e.target.classList.contains('clear')){
            string = ''
            text.innerHTML = string;         
        }
        else if(e.target.classList.contains('del')){
            let updatesting = string.slice(0,string.length-1);
            string = updatesting;
            text.innerHTML = string;
        }else{
            string = string + e.target.innerHTML;
            text.innerHTML = string;
        }
    })
})