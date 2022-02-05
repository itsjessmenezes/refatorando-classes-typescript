import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import {Input} from '../Input';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood:(food: any) => void;
  editingFood: {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
  }
}

export function ModalEditFood({isOpen, setIsOpen, handleUpdateFood, editingFood}: ModalEditFoodProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: any) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input icon="" name="image" placeholder="Cole o link aqui" />

          <Input icon="" name="name" placeholder="Ex: Moda Italiana" />
          <Input icon="" name="price" placeholder="Ex: 19.90" />

          <Input icon="" name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
}