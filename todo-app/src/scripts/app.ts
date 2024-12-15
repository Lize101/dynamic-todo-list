// const message: string = 'Hello You';
// console.log(message);

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
// const btn = document.getElementById('btn');
const list = document.getElementById('list') as HTMLUListElement;

form.addEventListener('submit', function(e: Event){
    e.preventDefault();
    let text = input.value.trim();
    if(!text) return;

    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';

    li.addEventListener('click', function(){
        li.classList.toggle('completed');
    })
})