let script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js";
document.body.appendChild(script);

setTimeout(() => {
    particlesJS.load('body', '/particlesjs-config', function() {
        console.log('callback - particles.js config loaded');
    });
}, 500);
