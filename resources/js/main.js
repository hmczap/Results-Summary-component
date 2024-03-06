window.addEventListener("load", () => {
    let totalResult = document.getElementById('results-list');
    for (let i = 0; i < object1.length; i++){
        // create and append list element
        let listResult = document.createElement("li");
        listResult.className = object1[i].category.toLowerCase();

        // create html elements for each result + icon
        let icon = document.createElement("div");
        icon.className = "results-icon";
        icon.innerHTML = `<img src=${object1[i].icon} alt="">`;

        let title = document.createElement("h5");
        title.innerText = object1[i].category;

        let score = document.createElement("p");
        score.innerHTML = `<strong class="user-result">${object1[i].score}</strong>`;
        score.innerHTML += '/100';

        // append result to list element
        listResult.appendChild(icon);
        listResult.appendChild(title);
        listResult.appendChild(score);

        // append list element to list
        totalResult.appendChild(listResult)
    }
})


// get handle to the results list
//read in results from data.json (using the parse() method)
// for each list element in the results list, insert the score result and icon
//  into the innerhtml / innertext of the list element

