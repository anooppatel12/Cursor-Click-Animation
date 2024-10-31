document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    container.addEventListener('click', (e) => {
        // Create the bomb element
        const bomb = document.createElement('div');
        bomb.className = 'bomb';
        bomb.style.left = e.clientX + 'px';
        bomb.style.top = e.clientY + 'px';
        container.appendChild(bomb);

        // Create light effects
        for (let i = 0; i < 10; i++) {
            const light = document.createElement('div');
            light.className = 'light';
            light.style.left = e.clientX + 'px';
            light.style.top = e.clientY + 'px';
            light.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            light.style.width = Math.random() * 20 + 10 + 'px'; // Random width
            light.style.height = light.style.width; // Keep it circular

            // Set a random angle and distance for spreading lights
            const angle = Math.random() * 2 * Math.PI; // Random angle
            const distance = Math.random() * 200 + 50; // Random distance

            light.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            container.appendChild(light);

            // Remove the light effect after animation
            setTimeout(() => {
                light.remove();
            }, 1000);
        }

        // Remove the bomb after animation
        setTimeout(() => {
            bomb.remove();
        }, 400);
    });
});
