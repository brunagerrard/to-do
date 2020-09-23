var list = document.querySelector('#app ul')
var input = document.querySelector('#app input')
var button = document.querySelector('#app button')

var tasks = [
  'Do this',
  'Do that'
]

function renderTasks() {
  list.innerHTML = ''

  for (todo of tasks) {
    var indexOfTaskClicked = tasks.indexOf(todo)
    var todoListItem = document.createElement('li')
    var todoText = document.createTextNode(todo)
    var link = document.createElement('a')
        link.setAttribute('href', '#')
        link.setAttribute('onclick', `delTask(${indexOfTaskClicked})`)
    var linkText = document.createTextNode('Delete')

    list.appendChild(todoListItem)
      todoListItem.appendChild(todoText)
      todoListItem.appendChild(link)
        link.appendChild(linkText)
  }
}

renderTasks()

function addTask() {
  var todoText = input.value
  tasks.push(todoText)
  input.value = ''
  renderTasks()
}

function delTask(indexOfTaskClicked) {
  tasks.splice(indexOfTaskClicked, 1)
  renderTasks()
}