import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Product } from "../types/product";

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("/api/products");
  return data;
};

export function useProducts() {
  return useQuery("products", () => fetchProducts());
}

const addProduct = async (product: Product): Promise<Product> => {
  const { data } = await axios.post("/api/products", product);
  return data;
};

export function useAddProduct() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    }
  });

  return { isAdding: isLoading, addProduct: mutateAsync };
}
