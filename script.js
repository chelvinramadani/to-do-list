// Tugas PIBITI Day 2: To do list!
// Cek file index.html untuk mengetahui id dari elemen-elemen yang
// kamu butuhkan selama pengerjaan.

// Selamat mengerjakan! :)

// Array yang berisi daftar to do item. Data di dalam array ini
// cukup berupa object dengan key `text` dan `done`.
// (Tidak perlu diubah)
const todoList = [];

// Fungsi untuk menandai sebuah to do item sebagai selesai.
// (Tidak perlu diubah)
function checkTodoItem(index) {
  todoList[index].done = !todoList[index].done;
  renderTodoList();
}

// Fungsi untuk membuat elemen <li> yang berisi sebuah to do item.
// (Tidak perlu diubah)
function createTodoItemElement(todo, index) {
  const todoItemElement = document.createElement('li');
  todoItemElement.classList.add('list-group-item', 'list-group-item-action');
  todoItemElement.setAttribute('role', 'button');
  todoItemElement.innerHTML = todo.done ? `<del>${todo.text}</del>` : todo.text;
  todoItemElement.addEventListener('click', () => {
    checkTodoItem(index);
  });

  return todoItemElement;
}

// Kerjakan kode JavaScript kamu di bawah ini!
// (Note: kamu bebas menambahkan fungsi-fungsi baru jika diperlukan)

// Array untuk menyimpan to-do items
var todo = [];

// Fungsi untuk menambahkan to-do item baru
function addTodoItem() {
  // 1.1 Ambil nilai dari input field `#inputTodo`
  var inputTodo = document.querySelector('#inputTodo').value;

  // 1.2 Buat sebuah object baru dengan key `text` dan `done`
  //     Isi `text` dengan nilai dari input field `#inputTodo`
  //     Isi `done` dengan nilai boolean `false`
  var newTodo = { text: inputTodo, done: false };

  // 1.3 Tambahkan nilai tersebut ke dalam array `todoList`
  todoList.push(newTodo);

  // 1.4 Kosongkan input field `#inputTodo`
  document.querySelector('#inputTodo').value = '';

  // Panggil fungsi `renderTodoList` di paling akhir dari fungsi ini.
  renderTodoList();
}

// 2. Berikan event handler `click` ke tombol "Tambah"
//    yang memanggil fungsi addTodoItem.
//    (Hint: gunakan `document.querySelector` dan `addEventListener`)
document.querySelector('#addTodo').addEventListener('click', addTodoItem);

// 3. Kerjakan fungsi renderTodoList
//    Fungsi ini digunakan untuk menampilkan to do item dari array `todoList`.
function renderTodoList() {
  // 3.1 Ambil elemen <ul> dengan id `todoList` dan masukkan ke dalam sebuah variabel
  var todoListUl = document.querySelector('#todoList');

  // 3.2 Kosongkan isi dari elemen <ul> tersebut
  todoListUl.innerHTML = '';

  // 3.3 Untuk setiap to do item yang ada di dalam array `todoList`.
  todoList.forEach(function (todo, index) {
    // 3.3.1 Panggil fungsi `createTodoItemElement`
    //       untuk membuat elemen todo item baru dengan memberikan data
    //       dari loop sebagai parameter pertama
    //       dan index dari loop sebagai parameter kedua.
    var todoItemElement = createTodoItemElement(todo, index);

    // 3.3.2 Tambahkan hasil dari fungsi `createTodoItemElement`
    //       ke dalam variabel elemen <ul> yang sudah diambil di langkah 3.1
    todoListUl.appendChild(todoItemElement);
  });
}

// 4. Fungsi untuk membuat elemen todo item baru
function createTodoItemElement(todo, index) {
  var li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <span>${todo.text}</span>
    <div>
      <input type="checkbox" ${todo.done ? 'checked' : ''} onchange="toggleDone(${index})">
      <button class="btn btn-danger btn-sm ms-2" onclick="deleteTodoItem(${index})">Hapus</button>
    </div>
  `;
  return li;
}

// 5. Fungsi untuk toggle status "done" dari sebuah todo
function toggleDone(index) {
  todoList[index].done = !todoList[index].done;
  renderTodoList();
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);
  renderTodoList();
}