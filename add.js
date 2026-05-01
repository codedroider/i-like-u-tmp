// © codedroider. 2026
document.documentElement.innerHTML = `
<meta charset="UTF-8">
<style>
  body { 
    background: #0a0a0a; 
    color: #ff4d6d; 
    font-family: 'Courier New', monospace; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    margin: 0; 
    overflow: hidden; 
  }
  h1 { 
    font-size: 2.5rem; 
    z-index: 10; 
    text-shadow: 0 0 20px rgba(255, 77, 109, 0.5); 
  }
  .heart { 
    position: absolute; 
    user-select: none; 
    z-index: 1; 
  }
</style>

<h1>i like u <3</h1>

<script>
  for (let i = 0; i < 35; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.innerHTML = '';
    h.style.fontSize = Math.random() * 30 + 10 + 'px';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.top = Math.random() * 100 + 'vh';
    h.style.opacity = Math.random() * 0.25 + 0.25;
    h.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(h);
  }
</script>`;
