let count = 0;
let entries = [];

function increment() {
  count += 1;
  console.log(count);
  document.getElementById('count').innerText = count;
}
function save() {
  entries.push(count);
  count = 0;
  document.getElementById('count').innerText = count;
  document.getElementById('save-entries').innerText = entries.join(' - ');
}