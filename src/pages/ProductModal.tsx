import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import ModalBody from "../components/ModalBody";
import ModalFooter from "../components/ModalFooter";
import ModalHeader from "../components/ModalHeader";
import TextArea from "../components/TextArea";
import { Product } from "../types/product";

type ProductModalProps = {
  loading?: boolean;
  onAdd: (product: Partial<Product>) => void;
  onClose: () => void;
  open: boolean;
  product?: Product;
};

export default function ProductModal({
  loading,
  onAdd,
  onClose,
  open,
  product
}: ProductModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: Partial<Product>) => {
    if (product && product.id) {
      //onUpdate({ ...data, id: data.id } as Product);
    } else {
      onAdd(data);
    }
  };

  return (
    <Modal closeModal={onClose} open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Product</ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent your an
            email with all of the details of your order.
          </p>
          <Input
            error={Boolean(errors.name)}
            helper={errors.name && "This field is invalid"}
            label="Name"
            {...register("name", { maxLength: 50, required: true })}
          />
          <TextArea
            error={Boolean(errors.description)}
            helper={errors.description && "This field is invalid"}
            label="Description"
            {...register("description", { maxLength: 255 })}
          />
          <Input
            error={Boolean(errors.price)}
            helper={errors.price && "This field is invalid"}
            label="Price"
            type="number"
            {...register("price", { min: 0 })}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:ml-3 sm:w-auto"
            color="primary"
            disabled={loading}
            loading={loading}
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="w-full mt-3 sm:mt-0 sm:ml-3 sm:w-auto"
            color="ghost-primary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
