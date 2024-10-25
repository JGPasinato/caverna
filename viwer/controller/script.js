
const orderButtons = document.querySelectorAll('#orderBtn');

orderButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    const productName = button.closest('.product-details').querySelector('.product-title').textContent;
    const productPrice = button.closest('.product-details').querySelector('.product-price').textContent;

    const message = `Olá, bom dia! Tudo bem? Quais cores e tamanhos vocês têm disponível para:
- Nome: ${productName}
- Preço: ${productPrice}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=5541992017347&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Script para alternar a exibição do menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});
