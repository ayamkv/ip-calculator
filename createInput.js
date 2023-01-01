const row = document.querySelector('.row');
fetch('mapel.json')
.then(response => response.json())
.then(jsonData => {
  let inputCounter = 1; // keeps track of the input id

  for (const item of jsonData.listMapel) {
    const div = document.createElement('div');
    div.classList.add('inputs');

    const label = document.createElement('label');
    label.setAttribute('for', `input${inputCounter}`);
    label.innerText = item;

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', `input${inputCounter}`);
    input.min = 0;
    input.max = 100;
    input.setAttribute("onkeyup", "enforceNumberInput(this); enforceMinMax(this);");
    input.placeholder = "Isi dengan nomor 1 - 100";

    div.appendChild(label);
    div.appendChild(input);

    document.querySelector('.row').appendChild(div);

    inputCounter++; // increment input id

    div.setAttribute("tabindex", "0"); // add tabindex attribute to div
  }
});