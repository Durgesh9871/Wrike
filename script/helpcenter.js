let searchResult = document.getElementById("searchResult");
let searchInput = document.getElementById("query");
let id;
async function search() {
  const value = searchInput.value;
  console.log({ value });
  const API = `https://dummyjson.com/products/search?q=${value}`;
  try {
    let res = await fetch(API);
    let { products } = await res.json();

    console.log({ products });
    localStorage.setItem("searchItem", JSON.stringify(products));
    append(products);
  } catch (error) {
    console.log({ error });
  }
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function showList() {
  searchResult.style.display = "block";
  searchResult.innerHTML = "";
}

function hideList() {
  searchResult.style.display = "none";
}

let append = (data) => {
  console.log({ data });
  let items = "";
  //searchResult.innerHTML = "";
  data.forEach((item) => {
    const li = `<li class='item'>${item.title}</li>`;
    items += li;
  });
  console.log({ items });
  searchResult.innerHTML = items;
};

function searchFun() {
  if (searchInput.value !== "") {
    window.location.href = "search.html";
  }
  // localStorage.setItem("searchItem", JSON.stringify);
}
