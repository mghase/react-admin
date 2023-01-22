import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import Empty from "../components/Empty";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import Typography from "../components/Typography";
import { useAddProduct, useProducts } from "../hooks/useProducts";
import { useToast } from "../providers/ToastProvider";
import { Product } from "../types/product";
import ProductModal from "./ProductModal";

type ProductCardsProps = {
  products?: Product[];
};

function ProductCards({ products }: ProductCardsProps) {
  if (!products || !products.length) {
    return <Empty message="You don't have any product yet." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardBody>{product.name}</CardBody>
        </Card>
      ))}
    </div>
  );
}

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const { data } = useProducts();
  const { isAdding, addProduct } = useAddProduct();
  const toast = useToast();

  function closeProductModal() {
    setModalOpen(false);
  }

  function openProductModal() {
    setModalOpen(true);
  }

  const handleAddProduct = async (product: Partial<Product>) => {
    addProduct(product as Product)
      .then(() => {
        closeProductModal();
        toast.success(`Product ${product.name} has been added.`);
      })
      .catch(() => {
        // snackbar.error();
      });
  };

  return (
    <Page>
      <PageHeader
        extra={
          <Button color="primary" onClick={openProductModal}>
            Add
          </Button>
        }
      >
        <Typography variant="h1">Products</Typography>
      </PageHeader>
      <PageBody>
        <ProductCards products={data} />
        <ProductModal
          loading={isAdding}
          onAdd={handleAddProduct}
          onClose={closeProductModal}
          open={modalOpen}
        />
      </PageBody>
    </Page>
  );
}
