import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ColorPicker, Form, Input, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../Contexts/TaskContext';
import { createStatus } from '../Services/StatusServices';
const CreateNewStatusModal = ({ isModalOpen, handleCloseModal = () => { }, }) => {
    const { t } = useTranslation();
    const { fetchStatuses } = useTaskContext();
    const onFinish = ({ title, color }) => {
        const parsedColor = typeof color === 'string' ? color : color === null || color === void 0 ? void 0 : color.toHexString();
        createStatus(title, parsedColor).then(() => fetchStatuses());
        handleCloseModal();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (_jsx(Modal, { title: t('CREATE_STATUS'), open: isModalOpen, onCancel: handleCloseModal, footer: null, children: _jsxs(Form, { name: "createSTATUS", onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off", layout: "vertical", requiredMark: false, initialValues: { color: '#1677ff' }, children: [_jsx(Form.Item, { label: t('STATUS_TITLE'), name: "title", layout: "vertical", rules: [
                        {
                            required: true,
                            message: t('STATUS_TITLE_ERROR_MESSAGE'),
                        },
                    ], children: _jsx(Input, { placeholder: t('STATUS_TITLE') }) }), _jsx(Form.Item, { label: t('STATUS_COLOR'), name: "color", layout: "vertical", rules: [
                        {
                            required: true,
                            message: t('STATUS_COLOR_ERROR_MESSAGE'),
                        },
                    ], children: _jsx(ColorPicker, { showText: true }) }), _jsx(Form.Item, { label: null, children: _jsx(Button, { type: "primary", htmlType: "submit", style: { width: '100%' }, children: t('SAVE') }) })] }) }));
};
export default CreateNewStatusModal;
