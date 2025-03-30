//Task 2 - Fetch Products with .then()

//Makes a variable named base url that is set equal to the api web address.
const BASE_URL = 'https://www.course-api.com/javascript-store-products'

//Creating a function that fetches products from the api and then console logs them.
function fetchProductsThen() {

    //Return the fetch of the base url.
    return fetch(BASE_URL)

    //It then checks if the resoponse is okay and if not throws an error.
    .then (response => {
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`)
        }

        //Return ths json response.
        return response.json()
    })

    //It then console logs each product name.
    .then (products => {
        products.forEach(product => console.log(product.fields.name))
    })

    //Catches any errors.
    .catch(error => {
        console.error(`Fetch Failed:` , error.message)
        throw error
    })
}

//Task 3 - Fetch Products with async/await.

//Creating an asyn function that fetches the product data and displays it.
async function fetchProductsAsync() {
    try {

        //Waits for the fetch to be completed before continuing the function.
        const res = await fetch(BASE_URL)

        //If the response is not okay, an error is thrown.
        if (!res.ok){
            throw new Error(`Error: ${res.status}`)
        }

        //Waits for the response to be put into json from.
        const products = await res.json()

        //Uses displayProducts() to display the products.
        displayProducts(products)

        //Catches an errors and puts them into handleError().
    } catch (error) {
        handleError(error)
    }
}

//Task 4 - Display the Products

//Creating the displayProducts() function.
function displayProducts() {

    //Accesses the product container div.
    const productContainer = document.getElementById("product-container")

    //Loops the function through the first five products.
    products.slice(0,4).forEach(product => {

        //Creating a div for the product post.
        const productPost = document.createElement('div')

        //Giving the product post a class.
        productPost.classList.add('product')

        //Creating the product name as a h3.
        const productName = document.createElement('h3')
        productName.textContent = product.name

        //Creating the product proce as a p.
        const productPrice = document.createElement('p')
        productPrice.textContent = `$${product.price.tofixed(2)}`

        //Creating the product image as an img.
        const productImage = document.createElement('img')
        productImage.src = product.image

        //Adding alt text. 
        productImage.alt = product.name

        //Adding the name, price, and image to the product post.
        productPost.appendChild(productName)
        productPost.appendChild(productPrice)
        productPost.appendChild(productImage)

        //Adding the porduct post to the product container.
        productContainer.appendChild(productPost)

    })
}

//Task 5 - Reusable Error Handler

// Creating the handleError() function
function handleError(error) {
    console.error('An error occurred:' , error.message)
}