
fetch('./product.json') 
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('sub-container');

      data.forEach(item => {
        const cardHTML = `
          <div class="col col-sm-1 col-md-4 col-lg-3" id="sub">
            <div class="card" style="width: 18rem;">
              <img src="${item.images[0].url}" class="card-img-top w-100" alt="sub${item.id}" style="height: 30vh;">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
              </div>
              <div class="d-flex justify-content-around mb-3">
                <h3>$${item.price}</h3>
                <button class="btn btn-primary">Buy now</button>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));