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

    //Create li element
    const li = document.createElement('li');
    li.textContent = text;

    //Create delete button element
    const delBtn = document.createElement('button');
    delBtn.textContent = "Remove";
    delBtn.classList.add('delBtn');
    li.appendChild(delBtn);

    list.appendChild(li);
    input.value = '';

    // li.addEventListener('click', function(){
    //     li.classList.toggle('completed');
    // })

    list.addEventListener('click', function(e: Event){
        const target = e.target as HTMLElement;

       if (target.tagName === 'LI') {
        target.classList.toggle('completed');
       } else if (target.tagName === 'BUTTON' && target.classList.contains('delBtn')) {
        const liParent = target.parentElement;
        if (liParent) {
            liParent.remove();
        } 
       }
    })
})