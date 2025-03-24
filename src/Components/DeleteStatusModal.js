import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Modal, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
const { Title, Text } = Typography;
const DeleteStatusModal = ({ isModalOpen, handleDeleteTask = () => { }, }) => {
    const { t } = useTranslation();
    return (_jsxs(Modal, { title: t('DELETE_STATUS'), open: isModalOpen, footer: null, styles: { body: { display: 'flex', flexDirection: 'column' } }, children: [_jsx(Title, { level: 2, style: { textAlign: 'center' }, children: t('DELETE_STATUS_TITLE') }), _jsx(Text, { style: { textAlign: 'center', marginBottom: 40 }, children: t('DELETE_STATUS_DESCRIPTION') }), _jsx(Button, { type: "primary", style: { width: '100%' }, onClick: handleDeleteTask, children: t('DELETE_THE_STATUS_BUTTON') })] }));
};
export default DeleteStatusModal;
