const $ = document.querySelector.bind(document)

const resetState = () => {
    document.getElementById('name').value = ''
    document.getElementById('file_input').value = ''
    document.getElementById('code').value = ''
    document.getElementById('old-price').value = ''
    document.getElementById('new-price').value = ''
    document.getElementById('code').value = ''
    document.getElementById('btn-update').classList.add('hidden')
    document.getElementById('btn-create').classList.remove('hidden')
    document.getElementById('title').innerHTML = "Thêm sản phẩm"
}

const handleRenderProducts = () => {
    const products = JSON.parse(localStorage.getItem('products'))
    if(!products) {
        localStorage.setItem('products', JSON.stringify([]))
    }
    document.getElementById('product').innerHTML = ""
    products.forEach((item, index) => {
        const productZone = document.getElementById('product')
        const trTag = document.createElement('tr')
        trTag.classList.add('odd:bg-white', 'even:bg-gray-50', 'border-b')
        trTag.innerHTML = `
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${item.id}
            </th>
            <td class="px-6 py-4">
                ${item.code}
            </td>
            <td class="px-6 py-4">
                ${item.name}
            </td>
            <td class="px-6 py-4">
                <img class="rounded-lg w-16 h-16" src="${item.image}" alt="" />
            </td>
            <td class="px-6 py-4">
                ${item.oldPrice}
            </td>
            <td class="px-6 py-4">
                ${item.newPrice}
            </td>
            <td class="px-6 py-4">
                <p class="inline-block mr-3 text-blue-500 cursor-pointer" onclick="handleSetProductToUpdate(${item.id})">Edit</p>
                <p class="inline-block text-red-500 cursor-pointer" onclick="handleDeleteProduct(${index})">Delete</p>
            </td>
        `
        productZone.appendChild(trTag)
    })
    resetState()
}

const handleAddProduct = () => {
    const products = JSON.parse(localStorage.getItem('products'))
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value
    const productURL = URL.createObjectURL(productImage)
    const newProduct = {
        id: products.length + 1,
        name: productName,
        image: productURL,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    products.push(newProduct)
    console.log({products});
    localStorage.setItem("products", JSON.stringify(products))

    handleRenderProducts()
}

const handleSetProductToUpdate = (productID) => {
    const products = JSON.parse(localStorage.getItem('products'))
    document.documentElement.scrollTop = 0;
    document.getElementById('title').innerHTML = "Sửa sản phẩm"
    document.getElementById('btn-update').classList.remove('hidden')
    document.getElementById('btn-create').classList.add('hidden')
    const foundProduct = products.find(product => productID === product.id)
    document.getElementById('name').value = foundProduct.name
    document.getElementById('code').value = foundProduct.code
    document.getElementById('old-price').value = foundProduct.oldPrice
    document.getElementById('new-price').value = foundProduct.newPrice
    document.getElementById('idProductUpdate').value = productID
}

const updateProduct = () => {
    const products = JSON.parse(localStorage.getItem('products'))
    const productID = parseInt($("#idProductUpdate").value)
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value

    const foundProduct = products.find(product => productID === product.id)
    const newProduct = {
        id: foundProduct.id,
        name: productName,
        image: productImage ? URL.createObjectURL(productImage) : foundProduct.image,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    products.splice(newProduct.id - 1, 1, newProduct)
    localStorage.setItem("products", JSON.stringify(products))
    handleRenderProducts()
}

const handleDeleteProduct = (productID) => {
    const products = JSON.parse(localStorage.getItem('products'))
    products.splice(productID, 1)
    localStorage.setItem("products", JSON.stringify(products))
    handleRenderProducts()
}