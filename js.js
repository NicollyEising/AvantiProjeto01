document.addEventListener("DOMContentLoaded", function () {
    createDepartment();
    createList();
  
    window.addEventListener('DOMContentLoaded', function () {
      function configurarBusca(inputId, btnId, resultId) {
        const input = document.getElementById(inputId);
        const button = document.getElementById(btnId);
        const result = document.getElementById(resultId);
    
        if (input && button && result) {
          button.addEventListener('click', function () {
            const termo = input.value.trim();
            console.log("Busca realizada:", termo);
            result.textContent = termo !== '' ? `Você buscou por: '${termo}'` : '';
          });
        }
      }
    
      // Configura para mobile
      configurarBusca('searchInput', 'searchBtn', 'searchResult');
    
      // Configura para desktop
      configurarBusca('searchInputDesktop', 'searchBtnDesktop', 'searchResultDesktop');
    });
    

    


    const listItems = document.querySelectorAll('.list-group-item');
  
    listItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        const targetClass = this.getAttribute('data-target');
        const targets = document.querySelectorAll('[class^="div-"]');
  
        targets.forEach(div => {
          div.style.display = 'none';
        });
  
        const targetDiv = document.querySelectorAll(`.${targetClass}`);
        targetDiv.forEach(div => {
          div.style.display = 'block';
        });
  
        listSelected(this);
      });
    });
  
    const allTargets = document.querySelectorAll('[class^="div-"]');
    allTargets.forEach((div, index) => {
      div.style.display = index === 0 ? 'block' : 'none';
    });
  
    atualizarCategorias();
  
    // Seleciona o primeiro item automaticamente
    const firstItem = document.querySelector('.list-group-item');
    if (firstItem) {
      firstItem.click();
    }
  
    // Controle de destaque do dropdown-toggle selecionado
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        // Remove destaque de todos os toggles
        dropdownToggles.forEach(item => {
          item.classList.remove('active-dropdown');
          item.style.color = ''; // cor padrão
        });
  
        // Aplica destaque ao toggle clicado
        this.classList.add('active-dropdown');
        this.style.color = '#005CFF'; // cor ativa
      });
    });


      createDepartment();
      createList();


      function createCards(carouselId, indicatorsClass) {
        const carouselItemsContainer = document.getElementById(carouselId);
        const carouselIndicators = document.querySelector(`.${indicatorsClass}`);
      
        carouselItemsContainer.innerHTML = '';
        carouselIndicators.innerHTML = '';
      
        const cards = [];
        for (let i = 0; i < 18; i++) {
          cards.push({
            imgSrc: "imagens/2j0a2073 1.svg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            priceOld: "R$100,00",
            priceNew: "R$79,90",
            discount: "10% OFF",
            installment: "10x de R$ 7,90"
          });
        }
      
        const isMobile = window.innerWidth < 992;
        const cardsPerChunk = isMobile ? 2 : 6;
      
        const cardChunks = [];
        for (let i = 0; i < cards.length; i += cardsPerChunk) {
          cardChunks.push(cards.slice(i, i + cardsPerChunk));
        }
      
        cardChunks.forEach((chunk, index) => {
          const carouselItem = document.createElement('div');
          carouselItem.className = index === 0 ? "carousel-item active" : "carousel-item";
      
          const row = document.createElement('div');
          row.className = "row";
      
          chunk.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = "card-wrapper";
      
            cardElement.innerHTML = `
              <div class="card col mx-2 cards-buy">
                <p class="card-text card-new">NOVO</p>
                <img src="${card.imgSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <div class="row">
                    <div class="col">
                      <span class="price-1">${card.priceOld}</span><br>
                      <span class="price-2">${card.priceNew}</span>
                    </div>
                    <div class="col">
                      <span class="discount">${card.discount}</span>
                    </div>
                  </div>
                  <p class="card-text text-values">Ou em até <span class="nav-link-bold">${card.installment}</span></p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>
              </div>
            `;
            row.appendChild(cardElement);
          });
      
          carouselItem.appendChild(row);
          carouselItemsContainer.appendChild(carouselItem);
      
          const indicator = document.createElement('button');
          indicator.type = 'button';
          indicator.setAttribute('data-bs-target', `#${carouselId.replace("carouselItemsContainer", "carouselExample")}`);
          indicator.setAttribute('data-bs-slide-to', index);
          indicator.setAttribute('aria-label', `Slide ${index + 1}`);
          if (index === 0) {
            indicator.classList.add('active');
          }
          carouselIndicators.appendChild(indicator);
        });
      }
      
    
    // Criação inicial
    createCards('carouselItemsContainer', 'carousel-indicators');     // Primeiro carousel
    createCards('carouselItemsContainer2', 'carousel-indicators-2');  // Segundo carousel
    

    
    // Recria os cards ao redimensionar a janela
    window.addEventListener('resize', function () {
      createCards('carouselItemsContainer', 'carousel-indicators');     // Primeiro carousel
      createCards('carouselItemsContainer2', 'carousel-indicators-2');  // Segundo carousel
      
    });
    
    });

  // Cria a lista de departamentos
  function createDepartment() {
    const containers = document.querySelectorAll(".list-example");
    if (!containers.length) return;
  
    containers.forEach(container => {
      for (let count = 0; count < 15; count++) {
        const newDiv = document.createElement("a");
        newDiv.className = "list-group-item list-group-item-action depart-1";
        newDiv.href = "#";
        newDiv.setAttribute("data-target", "div-1");
  
        newDiv.style.display = "flex";
        newDiv.style.alignItems = "center";
  
        const text = document.createTextNode(`Departamento`);
  
        const img = document.createElement("img");
        img.src = "imagens/Arrow.svg";
        img.className = "arrow-icon";
        img.style.marginLeft = "auto";
        img.style.filter = "brightness(0) saturate(100%)";
  
        newDiv.appendChild(text);
        newDiv.appendChild(img);
  
        container.appendChild(newDiv);
      }
    });
  }
  
  // Cria a lista de itens dentro de cada departamento
  function createList() {
    for (let i = 0; i <= 2; i++) {
      const containers = document.querySelectorAll(`.scrollspy-example-${i}`);
      if (!containers.length) continue;
  
      containers.forEach(container => {
        for (let count = 0; count < 8; count++) {
          const newLi = document.createElement("li");
          const newA = document.createElement("a");
          newA.href = "#";
  
          const newText = document.createElement("span");
          newText.className = "list-item";
          newText.style.color = count === 0 ? "#005CFF" : "#000000";
          newText.textContent = "";
          newText.style.display = "inline-block";
          newText.style.marginBottom = "10px";
          newText.style.marginLeft = "-20vh";
  
          newA.appendChild(newText);
          newLi.appendChild(newA);
          container.appendChild(newLi);
        }
      });
    }
  }
  
  // Atualiza os textos das categorias dentro de .div-1
  function atualizarCategorias() {
    const containers = document.querySelectorAll(".div-1");
    if (!containers.length) return;
  
    containers.forEach(container => {
      const itens = container.querySelectorAll(".list-item");
      const novasCategorias = [];
  
      for (let i = 0; i < itens.length; i++) {
        novasCategorias.push(`Categoria`);
        itens[i].textContent = novasCategorias[i];
      }
    });
  }
  
  // Destaque do item selecionado
  function listSelected(selectedElement) {
    const items = document.querySelectorAll('.list-group-item');
  
    items.forEach(item => {
      item.style.color = "#000000";
      const icon = item.querySelector(".arrow-icon");
      if (icon) {
        icon.style.filter = "brightness(0) saturate(100%)";
      }
    });
  
    if (selectedElement) {
      selectedElement.style.color = "#005CFF";
      const icon = selectedElement.querySelector(".arrow-icon");
      if (icon) {
        icon.style.filter = "invert(33%) sepia(99%) saturate(7482%) hue-rotate(210deg) brightness(97%) contrast(104%)";
      }
    }
  }
  