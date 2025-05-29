function mostrarSecao(id, botao) {
    document.querySelectorAll('section').forEach(sec => {
      sec.classList.remove('active');
    });
  
    document.querySelectorAll('nav button').forEach(btn => {
      btn.classList.remove('active');
    });
  
    document.getElementById(id).classList.add('active');
    botao.classList.add('active');
  }