import { checkInput, createItems } from "./utils";

//Variables for form, input and list
const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
const list = document.getElementById('list') as HTMLUListElement;

//Function to handle form submissions
function handleFormSubmit(e: Event): void {
  e.preventDefault(); //Prevent default form submission behaviour
    let text = input.value; //Remove white space from beginning and end of input
    if (!checkInput(text)) return;

    const li = createItems(text);

    list.appendChild(li);
    input.value = ''; //Clear input field after adding each task
}

//Function to handle list clicks - completions and deletions
  function handleLiClicks(e: Event): void {
    const target = e.target as HTMLElement;

       if (target.tagName === 'LI') {
        target.classList.toggle('completed');

       } else if (target.tagName === 'BUTTON' && target.classList.contains('delBtn')) {
        const liParent = target.parentElement;
        if (liParent) {
            liParent.remove(); //Remove li element
        } 
      }
  }

  //Event Listeners for form submission and list clicks
  form.addEventListener('submit', handleFormSubmit)
  list.addEventListener('click', handleLiClicks)