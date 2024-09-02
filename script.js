document.addEventListener("DOMContentLoaded", function() {
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            const images = data.images;

            function loadRandomImage() {
                const randomIndex = Math.floor((Math.random() * images.length) / 2);
                const randomImage = images[randomIndex];
                document.getElementById('randomWaifu').src = randomImage;
            }

            loadRandomImage();
            randomWaifu
            document.getElementById('randomWaifu').addEventListener('click', loadRandomImage);
        })
        .catch(error => console.error('Error loading images:', error));
});
