const colorButtons = document.querySelectorAll('.color-btn');
const genderButtons = document.querySelectorAll('.gender-btn');
const productImage = document.getElementById('productImg');
const orderButton = document.getElementById('orderBtn');
const sizeSelect = document.getElementById('sizes');
let selectedColor = 'red'; // Cor padrão
let selectedGender = 'masculino'; // Gênero padrão

// Função para alterar a imagem com base na cor e gênero selecionados
function updateProductImage() {
  productImage.src = `product-${selectedGender}-${selectedColor}.jpg`;
}

// Event listeners para seleção de cores
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedColor = button.getAttribute('data-color');
    updateProductImage(); // Atualizar imagem quando a cor mudar
  });
});

// Event listeners para seleção de gênero
genderButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedGender = button.getAttribute('data-gender');
    updateProductImage(); // Atualizar imagem quando o gênero mudar
  });
});

// Função para enviar mensagem via WhatsApp com os detalhes do pedido
orderButton.addEventListener('click', () => {
  const selectedSize = sizeSelect.value;
  const productName = document.querySelector('.product-title').innerText;
  const productPrice = document.querySelector('.product-price').innerText;

  // Criar mensagem de WhatsApp
  const message = `Olá,Bom dia! Tudo bem? Estou com interesse no:
- Nome: ${productName}
- Tamanho: ${selectedSize}
- Gênero: ${selectedGender}
- Cor: ${selectedColor}
- Preço: ${productPrice}`;

  // WhatsApp API link com a mensagem codificada
  const whatsappLink = `https://wa.me/5541992151906?text=${encodeURIComponent(message)}`;

  // Redirecionar para o WhatsApp
  window.open(whatsappLink, '_blank');
});

