const members = [
  {id: 1, name: 'Trần Minh Quang', gender: 'Nam', age: 20},
  {id: 2, name: 'Nguyễn Huyền Trang', gender: 'Nữ', age: 19},
]

let countId = 3;
let onEdit = 1;

const getTrForm = (trAddForm) => {
  trAddForm.setAttribute("id","tr-add-form");
  // createElement td checkbox
  const checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
  const tdCheckBox = document.createElement('TD');
  tdCheckBox.appendChild(checkBox); 
  trAddForm.appendChild(tdCheckBox);
  // createElement td id
  const tdId = document.createElement('TD');
  tdId.innerHTML = countId;
  trAddForm.appendChild(tdId);
  // createElement td Name input
  const formName = document.createElement('input');
  formName.setAttribute('type', 'text');
  formName.setAttribute("id", "name-member")
  const tdName = document.createElement('TD');
  tdName.appendChild(formName);
  trAddForm.appendChild(tdName);
  // createElement td select 
  const selectGender = document.createElement('select');
  selectGender.setAttribute("id", "gender-member")
  const optionMan = document.createElement('option');
  optionMan.setAttribute('value', 'Nam');
  optionMan.innerHTML = 'Nam';
  selectGender.appendChild(optionMan);

  const optionWoman = document.createElement('option');
  optionWoman.setAttribute('value', 'Nữ');
  optionWoman.innerHTML = 'Nữ';
  selectGender.appendChild(optionWoman);

  const tdFormGender = document.createElement('td');
  tdFormGender.appendChild(selectGender);
  trAddForm.appendChild(tdFormGender);
  // createElement td Age input
  const formAge = document.createElement('input');
  formAge.setAttribute("id", "age-member");
  formAge.setAttribute('type', 'number');
  const tdAge = document.createElement('TD');
  tdAge.appendChild(formAge);
  trAddForm.appendChild(tdAge);

  addBtn(trAddForm);
  addEventBtn(trAddForm);
}

const showFormAdd = () => {
  if (!onEdit) return; 
  onEdit = 0;
  const trAddForm = document.createElement('tr');
  getTrForm(trAddForm);
  if (members.length % 2 == 0) trAddForm.style.backgroundColor = '#F2F2F2';

  trAddForm.querySelector('#save-btn').style.display = 'inline-block';
  trAddForm.querySelector('#cancel-btn').style.display = 'inline-block';
  trAddForm.querySelector('#edit-btn').style.display = 'none';

  const tbody = document.getElementById('list-member');
  tbody.appendChild(trAddForm);
}

const addEventBtn = (tr) => {
  tr.querySelector('#edit-btn').addEventListener("click", function () {
    const trAddForm = document.createElement('tr');
    const parent = tr.parentNode;
    getTrForm(trAddForm);
    trAddForm.querySelector('#save-btn').style.display = 'inline-block';
    trAddForm.querySelector('#cancel-btn').style.display = 'inline-block';
    trAddForm.querySelector('#edit-btn').style.display = 'none';

    trAddForm.querySelector('#name-member').value = tr.querySelector('td:nth-child(3)').innerText;
    trAddForm.querySelector('#gender-member').value = tr.querySelector('td:nth-child(4)').innerText;
    trAddForm.querySelector('#age-member').value = tr.querySelector('td:nth-child(5)').innerText;

    const id = tr.querySelector('td:nth-child(2)');
    const newId = trAddForm.querySelector('td:nth-child(2)');
    newId.innerHTML = id.innerText;
    parent.replaceChild(trAddForm, tr);
  });

  tr.querySelector('#save-btn').addEventListener("click", handleSaveMember);
  tr.querySelector('#delete-btn').addEventListener("click", function () {
    const id = tr.querySelector('td:nth-child(2)').innerText;
    const indexId = members.findIndex(x => x.id == id);
    members.splice(indexId, 1);
    removeTable();
    renderTable(members);
  });
  tr.querySelector('#cancel-btn').addEventListener("click", handleCancelMember);
}

const handleDeleteMember = () => {
  const tdParent = checkBoxs.parentNode;
  const trParent = tdParent.parentNode;
  const indexId = trParent.querySelector('td:nth-child(2)').textContent;
  const deleteMember = members.findIndex(x => x.id == indexId);
  removeTable();
  renderTable(members);
}
const addBtn = (tr) => {
  const newEditBtn = document.createElement('button');
  newEditBtn.setAttribute("id", "edit-btn");
  newEditBtn.innerText = 'Edit';

  const newSaveBtn = document.createElement('button');
  newSaveBtn.setAttribute('id', 'save-btn');
  newSaveBtn.style.display = 'none';
  newSaveBtn.innerText = 'Save';

  const newCancelBtn = document.createElement('button');
  newCancelBtn.setAttribute('id', 'cancel-btn');
  newCancelBtn.style.display = 'none';
  newCancelBtn.innerText = 'Cancel';

  const newDeleteBtn = document.createElement('button');
  newDeleteBtn.setAttribute('id', 'delete-btn');
  newDeleteBtn.innerText = 'Delete';

  const tdBtn = document.createElement('TD');
  tdBtn.appendChild(newEditBtn);
  tdBtn.appendChild(newSaveBtn);
  tdBtn.appendChild(newCancelBtn);
  tdBtn.appendChild(newDeleteBtn);

  tr.appendChild(tdBtn);
}

const removeTable = () => {
  const tbody = document.getElementById('list-member');
  tbody.remove();
}

const handleCancelMember = () => {
  removeTable();
  renderTable(members);
}

const handleSaveMember = () => {
  onEdit = 1;
  const newObj = Object.create(null);
  const trAddForm = document.querySelector("#tr-add-form");
  const id = trAddForm.querySelector('td:nth-child(2)');
  newObj.id = id.innerText;
  const name = trAddForm.querySelector("#name-member");
  newObj.name = name.value;
  const gender = document.querySelector("#gender-member");
  newObj.gender = gender.value;
  const age = document.querySelector("#age-member");
  newObj.age = parseInt(age.value);
  const index = members.findIndex(key => key.id == newObj.id);
  if(index != -1) members.splice(index, 1, newObj);
  else {
    members.push(newObj);
    countId++;
  }
  removeTable();
  renderTable(members);
}

const handleDeleteMembers = () => {
  const checkBoxs = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkBoxs.length; i++) {
    if (checkBoxs[i].checked == true) {
      const tdParent = checkBoxs[i].parentNode;
      const trParent = tdParent.parentNode;
      const indexId = trParent.querySelector('td:nth-child(2)').textContent;
      const deleteMember = members.findIndex(x => x.id == indexId);
      members.splice(deleteMember, 1);
    }
  }
  removeTable();
  renderTable(members);
  const checkAll = document.querySelector('#check-all');
  if (checkAll.checked == true) checkAll.checked = false;
}

const renderTable = arr => {
  const table = document.querySelector('table');
  const tbody = document.createElement('TBODY');
  tbody.setAttribute('id', 'list-member');
  table.appendChild(tbody);
  const setColorTr = (i, tr) => {
    if (i % 2 == 0) tr.style.backgroundColor = '#F2F2F2';
  }
  for (let i = 0; i < arr.length; i++) {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    const tdCheckBox = document.createElement('TD');
    tdCheckBox.appendChild(checkBox);
    const tr = document.createElement('TR');
    tr.appendChild(tdCheckBox);
    for (const key in arr[i]) {
      const td = document.createElement('TD');
      td.innerHTML = arr[i][key];
      td.className = arr[i][key];
      tr.appendChild(td);
    }
    addBtn(tr);
    addEventBtn(tr);
    setColorTr(i, tr);
    tbody.appendChild(tr);
  }
}   

renderTable(members);

const handleCheckBoxAll = () => {
  const checkBoxAll = document.querySelector('thead input');
  const checkBoxs = document.querySelectorAll('input[type="checkbox"]');  
  if (checkBoxAll.checked == true) {
    for (let i = 0; i < checkBoxs.length; i++) {
      checkBoxs[i].checked = true;
    }
  }
  else {
    for (let i = 0; i < checkBoxs.length; i++) {
      checkBoxs[i].checked = false;
    }
  }
}