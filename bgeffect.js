let script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
document.body.appendChild(script);

setTimeout(() => {
    particlesJS.load('body', '/particlesjs-config', function() {
        console.log('callback - particles.js config loaded');
    });
}, 500);
