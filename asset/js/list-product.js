
fetch('./product.json')  
    .then(response => response.json())  
    .then(data => {
    const container = document.getElementById("sub-container"); 
    const buttons = document.querySelectorAll("#content-sub a");
    const dropdown = document.getElementById("categoryDropdown");

    // render data
    function renderCards(filteredData) {
        container.innerHTML = ""; 
        filteredData.forEach(item => {
        container.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card" style="width: 100%;">
                <img src="${item.images[0].url}" class="card-img-top w-100" alt="${item.title}" style="height: 30vh;">
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
        });
    }

    // from button
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
        e.preventDefault();
        const value = btn.getAttribute("value");

        // กรองข้อมูลตามหมวดหมู่
        if (value === "all") {
            renderCards(data); // all
        } else {
            const filtered = data.filter(item => item.category.toLowerCase() === value);
            renderCards(filtered); // filter
        }
        });
    });

    // from dropdown
    dropdown.addEventListener("change", e => {
        const value = e.target.value;

        
        if (value === "all") {
        renderCards(data); // all
        } else {
        const filtered = data.filter(item => item.category.toLowerCase() === value);
        renderCards(filtered); // filter
        }
    });

    
    renderCards(data);
    })
    .catch(error => console.error('Error fetching data:', error));  