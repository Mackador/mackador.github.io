// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
    {
        name: "Chocolate",
        nutFree: false,
        lactoseIntolerance: false,
        organic: false,
        price: 0.79
    },
    {
        name: "Almonds",
        nutFree: false,
        lactoseIntolerance: true,
        organic: true,
        price: 1.09
    },
    {
        name: "Yogurt",
        nutFree: true,
        lactoseIntolerance: false,
        organic: false,
        price: 1.29
    },
    {
        name: "Pizza slice",
        nutFree: true,
        lactoseIntolerance: false,
        organic: false,
        price: 1.49
    },
    {
        name: "Brocoli",
        nutFree: true,
        lactoseIntolerance: true,
        organic: true,
        price: 1.99
    },
    {
        name: "Bread",
        nutFree: true,
        lactoseIntolerance: true,
        organic: true,
        price: 2.39
    },
    {
        name: "Milk",
        nutFree: true,
        lactoseIntolerance: false,
        organic: false,
        price: 4.49
    },
    {
        name: "Chicken sandwich",
        nutFree: true,
        lactoseIntolerance: true,
        organic: false,
        price: 4.99
    },
    {
        name: "Salmon",
        nutFree: true,
        lactoseIntolerance: true,
        organic: false,
        price: 9.99
    }
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProductNames(prods, nutAllergyRestriction, lactoseRestriction, organicRestriction) {
    let product_names = [];
    if (nutAllergyRestriction && lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].lactoseIntolerance && prods[i].organic) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (!nutAllergyRestriction && lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].lactoseIntolerance && prods[i].organic) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (nutAllergyRestriction && !lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].organic) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (nutAllergyRestriction && lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].lactoseIntolerance) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (nutAllergyRestriction && !lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (!nutAllergyRestriction && lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].lactoseIntolerance) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (!nutAllergyRestriction && !lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].organic) {
                product_names.push(prods[i].name);
            }
        }
    }
    if (!nutAllergyRestriction && !lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}

function restrictListProductPrices(prods, nutAllergyRestriction, lactoseRestriction, organicRestriction) {
    let product_prices = [];
    if (nutAllergyRestriction && lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].lactoseIntolerance && prods[i].organic) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (!nutAllergyRestriction && lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].lactoseIntolerance && prods[i].organic) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (nutAllergyRestriction && !lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].organic) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (nutAllergyRestriction && lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree && prods[i].lactoseIntolerance) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (nutAllergyRestriction && !lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].nutFree) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (!nutAllergyRestriction && lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].lactoseIntolerance) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (!nutAllergyRestriction && !lactoseRestriction && organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            if (prods[i].organic) {
                product_prices.push(prods[i].price);
            }
        }
    }
    if (!nutAllergyRestriction && !lactoseRestriction && !organicRestriction) {
        for (let i = 0; i < prods.length; i += 1) {
            product_prices.push(prods[i].price);
        }
    }
    return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}