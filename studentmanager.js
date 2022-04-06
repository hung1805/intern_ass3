const arr = [
  { name: 'abc', point: 6.8 },
  { name: 'xyz', point: 4.2 },
  { name: 'max', point: 7.2 },
  { name: 'manuel', point: 5.9 },
  { name: 'bob', point: 1.2 },
];
const addBtn = document.querySelector('#add-btn');
const tbody = document.querySelector('#table-body');
const filterBtn = document.querySelector('#filter-btn');
const sortBtn = document.querySelector('#sort-btn');
const table = document.querySelector('table');

const resetContent = () => {
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
};
const addStudent = () => {
  table.classList.remove('show');
  resetContent();
  const name = prompt("What is student's name");
  const point = prompt("Student's point:");
  if (name === '' || point === '') return alert('Please enter information');
  else arr.push({ name, point });

  arr.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index + 1}</td>
      <td>${item.name}</td>
       <td>${item.point}</td>`;
    tbody.appendChild(tr);
    table.classList.add('show');
  });
};

const filterStudent = () => {
  table.classList.remove('show');
  resetContent();

  const filterArr = arr.filter((stu) => stu.point >= 5);
  console.log(filterArr);
  if (filterArr.length === 0) {
    alert('No student has a score above 5');
  } else {
    filterArr.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${index + 1}</td>
      <td>${item.name}</td>
       <td>${item.point}</td>`;
      tbody.appendChild(tr);
    });
    table.classList.add('show');
  }
};
const sortStudent = () => {
  table.classList.remove('show');
  resetContent();

  const arr2 = [...arr];
  arr2.sort((prevStu, nextStu) => {
    return nextStu.point - prevStu.point;
  });
  arr2.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index + 1}</td>
      <td>${item.name}</td>
       <td>${item.point}</td>`;
    tbody.appendChild(tr);
  });
  table.classList.add('show');
};

addBtn.addEventListener('click', addStudent);
filterBtn.addEventListener('click', filterStudent);
sortBtn.addEventListener('click', sortStudent);
