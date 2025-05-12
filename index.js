// Charger les tâches existantes au démarrage
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => renderTask(task));
  };
  
  function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    renderTask(taskText);
    saveTask(taskText);
    input.value = "";
  }
  
  // Affiche une tâche dans la liste
  function renderTask(taskText) {
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 bg-neutral text-neutral-content rounded";
  
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="deleteTask(this, '${taskText}')" class="btn btn-sm btn-error">Supprimer</button>
    `;
  
    taskList.appendChild(li);
  }
  
  // Sauvegarde une tâche dans localStorage
  function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Supprime une tâche (du DOM et du localStorage)
  function deleteTask(button, taskText) {
    button.parentElement.remove();
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function changeTheme(select) {
    document.documentElement.setAttribute("data-theme", select.value);
    localStorage.setItem("theme", select.value);
  }
  
  window.onload = () => {
    // Charger les tâches
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => renderTask(task));
  
    // Appliquer le thème sauvegardé
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  };
  