var database = { products: []};

for (var i = 1; i<= 10; i++) {
  database.products.push({
    id: i,
    name: "produit n° " + i,
    description: "ceci est une description de base",
    price: Math.floor(Math.random() * 4000),
    imageUrl: `https://picsum.photos/400?random=${i}.webp`,
    quantity: Math.floor(Math.random() * 10)
  });
}

console.log(JSON.stringify(database));
