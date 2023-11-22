window.addEventListener('load', function () {
    const loaderContainers = document.querySelectorAll('#loader-container');
    loaderContainers.forEach(function (loaderContainer) {
        loaderContainer.style.display = 'none';
    });
});