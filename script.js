function showImage() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('hidden');

    var button = document.getElementById('pressMeButton');
    button.style.display = 'none';
}
function showText() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('hidden');

    var button = document.getElementById('pressMeButton');
    button.style.display = 'none';

    var displayText = document.getElementById('displayText');
    displayText.classList.toggle('hidden');
}