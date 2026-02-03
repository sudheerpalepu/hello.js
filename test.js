async function getData() {
  try {
    const response = await fetch('https://www.xe.com/currencycharts/');
    if (!response.ok) throw new Error('Network error');

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
