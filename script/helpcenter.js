let searchResult = document.getElementById("searchResult");
let searchInput = document.getElementById("query").value;
// let ul = document.getElementById("searchResult");
let list = document.getElementById("unorderedList");

async function search() {
  try {
    let res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    let data = await res.json();
    let actual_data = data.meals;
    console.log(actual_data);
    localStorage.setItem("searchItem", JSON.stringify(actual_data));
    append(actual_data);
  } catch (error) {
    console.log(error);
  }
}

let append = (data) => {
  searchResult.innerHTML = "";
  data.forEach((elem) => {
    let list_item = document.createElement("li");

    let link = document.createElement("a");
    link.href = elem.strYoutube;
    link.innerText = elem.strMeal;
    // list_item.innerText = elem.strMeal;

    list_item.append(link);
    searchResult.append(list_item);
    // ul.innerHTML = list_item;
    // list.append(x);
  });
};

function searchFun() {
  // window.location.href = "search.html";
  // localStorage.setItem("searchItem", JSON.stringify);
}

// if (searchInput !== "") {
//   searchResult.style.display = "block";
// }
