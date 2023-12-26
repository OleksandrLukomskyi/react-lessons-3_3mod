import { Component } from 'react';

const EditMaterialModal = ({onClose, onEdit}) => {
  return (
    <div>
      <h2>Модалка редагування матеріалів </h2>
      <button type='button' onClick={() => {
         onEdit();
         onClose();
      }
         
         }>Тепер сравді редагувати</button>
      <button type='button' onClick={
         onClose
         }>Закрити</button>
    </div>
  );
};

// {item, onDelete, onUpdate}

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
const { isModalOpen } = this.state; 
    return (
      <div>
        <p>
          <b>Назва:</b> {item.title}
        </p>
        <p>
          <b>Ссилка:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Видалить
        </button>
        <button
          type="button"
          onClick={this.openModal}
         
        >
          Редагувати
        </button>
        {isModalOpen && (
        <EditMaterialModal 
        onClose={this.closeModal} 
        onEdit={() => onUpdate({id: item.id, title: Date.now()})} />
        )}
      </div>
    );
  }
}
