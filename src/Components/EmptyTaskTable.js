import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import EmptyTaskIcon from '../Icons/EmptyTaskIcon';
const { Title, Text } = Typography;
const EmptyTask = ({ handleCreateNewTask }) => {
    const { t } = useTranslation();
    return (_jsxs(Flex, { vertical: true, align: "center", justify: "center", gap: "middle", style: { minHeight: '80vh' }, children: [_jsx(Button, { color: "default", variant: "link", icon: _jsx(EmptyTaskIcon, {}), style: { height: 'fit-content' } }), _jsx(Title, { level: 2, children: t('EMPTY_TASK_TITLE') }), _jsx(Text, { children: t('EMPTY_TASK_DESCRIPTION') }), _jsx(Button, { type: "primary", onClick: handleCreateNewTask, children: t('CREATE_NEW_TASK') })] }));
};
export default EmptyTask;
