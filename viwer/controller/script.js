
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
