import { FC } from 'react';
interface DeleteStatusModalProps {
    isModalOpen?: boolean;
    handleDeleteTask?: () => void;
}
declare const DeleteStatusModal: FC<DeleteStatusModalProps>;
export default DeleteStatusModal;
