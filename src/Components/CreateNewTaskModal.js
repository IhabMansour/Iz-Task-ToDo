var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Form, Input, Modal, Select } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../Contexts/TaskContext';
import { createTask } from '../Services/TaskServices';
const CreateNewTaskModal = ({ isModalOpen, handleCloseModal = () => { }, }) => {
    const { t } = useTranslation();
    const { statuses, fetchTasks } = useTaskContext();
    const onFinish = (_a) => __awaiter(void 0, [_a], void 0, function* ({ title, description, statusId, }) {
        createTask(title, description, statusId).then(() => fetchTasks());
        handleCloseModal();
    });
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const getStatusMenu = useMemo(() => {
        return statuses === null || statuses === void 0 ? void 0 : statuses.map((status) => {
            return {
                label: status.title,
                value: status.id,
            };
        });
    }, [statuses]);
    return (_jsx(Modal, { title: t('CREATE_TASK'), open: isModalOpen, onCancel: handleCloseModal, footer: null, children: _jsxs(Form, { name: "createTask", onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off", layout: "vertical", requiredMark: false, children: [_jsx(Form.Item, { label: t('TASK_TITLE'), name: "title", layout: "vertical", rules: [
                        {
                            required: true,
                            message: t('TASK_TITLE_ERROR_MESSAGE'),
                        },
                    ], children: _jsx(Input, { placeholder: t('TASK_TITLE') }) }), _jsx(Form.Item, { label: t('DESCRIPTION'), name: "description", layout: "vertical", rules: [
                        {
                            required: true,
                            message: t('DESCRIPTION_ERROR_MESSAGE'),
                        },
                    ], children: _jsx(Input.TextArea, { rows: 4, placeholder: t('DESCRIPTION') }) }), _jsx(Form.Item, { label: t('STATUS'), name: "statusId", layout: "vertical", rules: [
                        {
                            required: true,
                            message: t('STATUS_ERROR_MESSAGE'),
                        },
                    ], children: _jsx(Select, { placeholder: t('STATUS'), options: getStatusMenu }) }), _jsx(Form.Item, { label: null, children: _jsx(Button, { type: "primary", htmlType: "submit", style: { width: '100%' }, children: t('SAVE') }) })] }) }));
};
export default CreateNewTaskModal;
