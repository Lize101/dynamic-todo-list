export function checkInput(input: string): boolean{
    return input.trim() !== '';
}

export function createItems(text: string): HTMLLIElement {
    //Create li element
    const li = document.createElement('li');
    li.textContent = text;

    //Create delete button element
    const delBtn = document.createElement('button');
    delBtn.textContent = "Remove";
    delBtn.classList.add('delBtn');
    li.appendChild(delBtn);

    return li;
}
