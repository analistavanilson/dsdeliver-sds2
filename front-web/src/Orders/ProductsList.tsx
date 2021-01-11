import { checkIsSelected } from "./helpers";
import ProuctCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProdutsList( {products, selectedProducts, onSelectProduct} : Props ) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProuctCard 
                        key={product.id} 
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProdutsList;