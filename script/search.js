let searchItemLS = JSON.parse(localStorage.getItem("searchItem"));
console.log(searchItemLS);
let ul = document.querySelector(".search_results_list");
function append(searchItemLS) {
  let total_results = document.getElementById("total_search_results");
  total_results.innerText = `${searchItemLS.length} results`;

  searchItemLS.forEach(function (elem) {
    let list_item = document.createElement("li");
    // list_item.innerText = elem.strMeal;

    let title = document.createElement("h2");
    title.innerText = elem.strMeal;

    let area = document.createElement("p");
    area.innerText = elem.strArea;

    list_item.append(title, area);
    ul.append(list_item);
  });
}
append(searchItemLS);
