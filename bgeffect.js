let script = document.createElement("script");
script.src = "";
document.body.appendChild(script);

setTimeout(() => {
    particlesJS.load('body', '/particlesjs-config', function() {
        console.log('callback - particles.js config loaded');
    });
}, 500);
