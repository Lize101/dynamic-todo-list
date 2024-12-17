const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
const list = document.getElementById('list') as HTMLUListElement;

function handleFormSubmit(e: Event): void {
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
}

  function handleLiClicks(e: Event): void {
    const target = e.target as HTMLElement;

       if (target.tagName === 'LI') {
        target.classList.toggle('completed');
       } else if (target.tagName === 'BUTTON' && target.classList.contains('delBtn')) {
        const liParent = target.parentElement;
        if (liParent) {
            liParent.remove();
        } 
      }
  }
   
  form.addEventListener('submit', handleFormSubmit)
  list.addEventListener('click', handleLiClicks)