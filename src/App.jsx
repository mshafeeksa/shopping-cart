export default function App() {
    getData();
}

async function getData() {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
        .then(json => console.log(json))
    
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => console.log(json));
}