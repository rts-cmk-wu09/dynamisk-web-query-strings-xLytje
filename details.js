const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`./data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        document.querySelector("body").innerHTML += `
        <section>
        <h2>${data.destination}</h2>
        <h1>${data.title}</h1>
        <p class="title">${data.subtitle}</p>
        <p class="desc">${data.text}</p>
        <h3>Faciliteter</h3>
        <ul>
            ${data.facilities.map(facility => `<li>${facility}</li>`).join("")}
        </ul>
        </section>
        `;
    });