const items = [];

function addItem(name, quantity) {
  if (!name || quantity < 1) {
    return null;
  }
  const item = { id: items.length + 1, name, quantity };
  items.push(item);
  return item;
}

function totalQuantity() {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

function findItem(id) {
  return items.find((item) => item.id === id) || null;
}

function removeItem(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  }
  items.splice(index, 1);
  return true;
}

export { addItem, totalQuantity, findItem, removeItem };
//T
