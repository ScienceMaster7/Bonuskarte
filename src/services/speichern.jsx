export default function speichern(key, item) {
  const ItemList = localStorage.getItem(key);

  if (ItemList !== null) {
    const storedItems = JSON.parse(ItemList);

    storedItems.push(item);

    localStorage.setItem(key, JSON.stringify(storedItems));
  } else {
    const storedItems = [];
    storedItems.push(item);

    localStorage.setItem(`${key}`, JSON.stringify(storedItems));
  }
}
