
const loadPage = async () => {
    await controller.getDataFromServer();
    renderer.renderData(controller.tasks);
}

const addTask = async () => {
    const inputValue = document.getElementsByTagName('input')[0].value;
    await controller.addTask(inputValue);
    renderer.renderData(controller.tasks);
}

const deleteTask = async (event) => {
    const taskIdToDelete = event.target.id;
    await controller.deleteTask(taskIdToDelete);
    renderer.renderData(controller.tasks);
}

(async function() {
	await loadPage();
})();