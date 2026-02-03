async function fetchData() {
  try {
    const res = await fetch("https://www.xe.com/currencyconverter/"); // put your API here
    const data = await res.json();

    document.getElementById("data").textContent =
      JSON.stringify(data, null, 2);

  } catch (e) {
    document.getElementById("data").textContent = "Error loading data";
    console.error(e);
  }
}

fetchData();
