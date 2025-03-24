import { FC } from 'react';
interface CreateNewTaskModalProps {
    isModalOpen?: boolean;
    handleCloseModal?: () => void;
}
declare const CreateNewTaskModal: FC<CreateNewTaskModalProps>;
export default CreateNewTaskModal;
