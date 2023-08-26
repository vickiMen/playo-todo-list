
const loadPage = async () => {
    await controller.getDataFromServer();
    renderer.renderData(controller.tasks);
}

(async function() {
	await loadPage();
})();