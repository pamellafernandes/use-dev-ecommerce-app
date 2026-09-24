import { useEffect, useState } from "react";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const useFetchProducts = (productService: IProductService) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const productsData = await productService.fetchProducts();
                setProducts(productsData);
                setIsLoading(false);
            } catch (error) {
                setError("Failed to fetch products");
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [productService]);

    return {
        products,
        isLoading,
        error,
    };
};

export default useFetchProducts;