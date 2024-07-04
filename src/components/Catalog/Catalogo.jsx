import Producto from "../Product/Producto";

const Catalogo = () => {
	
	const products = [
		{
			name : 'producto1',
			description : 'esto es una descipcion del producto 1',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto2',
			description : 'esto es una descipcion del producto 2',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto3',
			description : 'esto es una descipcion del producto 3',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto4',
			description : 'esto es una descipcion del producto 4',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
	];

	return (
		<div class="container">
			<div class="row">
				<div class="col-8 row">
					
					
					{products.map((producto,index) => (
						<Producto
						key={index} 
						name={producto.name} 
						description={producto.description} 
						url={producto.url} />
					))}
					
				</div>
				
				<div id="carrito" class="col-4 bg-secondary mt-2 mb-2">
					<h3>Carrito de Compras</h3>
						<ul id="cont-cart">
						</ul>
					<p>TOTAL: <span id="total-cart">S/ 0</span></p>
					<button class="btn btn-primary">PAGAR</button>
				</div>
				
			</div>
		</div>
	);
}

export default Catalogo;