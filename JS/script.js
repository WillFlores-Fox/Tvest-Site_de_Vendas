// MENU HAMBURGUER
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// CARROSSEL PRINCIPAL
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

// Função para mostrar slide
function showSlide(i) {
  if (i < 0) index = slideItems.length - 1;
  else if (i >= slideItems.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Botões manual
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Carrossel automático infinito
setInterval(() => {
  showSlide(index + 1);
}, 4000);

// FADE-IN DAS SEÇÕES AO ROLAR
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("fade");
  observer.observe(section);
});

// MODAL DE LOGIN FAKE
const loginBtn = document.querySelector('.user-actions button[title="Perfil"]');
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Senha">
    <button>Entrar</button>
  </div>
`;
document.body.appendChild(modal);

loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

// CARRINHO LATERAL
const cartBtn = document.querySelector('.user-actions button[title="Carrinho"]');
const cartPanel = document.querySelector('.cart-panel');
const closeCart = document.querySelector('.close-cart');

cartBtn.addEventListener("click", () => {
  cartPanel.classList.add("show");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("show");
});

// ALTERAR QUANTIDADE DOS ITENS
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

plusButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const count = e.target.parentElement.querySelector('.count');
    count.textContent = parseInt(count.textContent) + 1;
  });
});

minusButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const count = e.target.parentElement.querySelector('.count');
    if (parseInt(count.textContent) > 1) {
      count.textContent = parseInt(count.textContent) - 1;
    }
  });
});