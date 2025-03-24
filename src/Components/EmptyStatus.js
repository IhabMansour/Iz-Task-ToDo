import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import EmptyStatusIcon from '../Icons/EmptyStatusIcon';
const { Title, Text } = Typography;
const EmptyStatus = ({ handleCreateNewStatus = () => { }, }) => {
    const { t } = useTranslation();
    return (_jsxs(Flex, { vertical: true, align: "center", justify: "center", gap: "middle", style: { minHeight: '80vh' }, children: [_jsx(Button, { color: "default", variant: "link", icon: _jsx(EmptyStatusIcon, {}), style: { height: 'fit-content' } }), _jsx(Title, { level: 2, children: t('EMPTY_STATUS_TITLE') }), _jsx(Text, { children: t('EMPTY_STATUS_DESCRIPTION') }), _jsx(Button, { type: "primary", onClick: handleCreateNewStatus, children: t('CREATE_NEW_STATUS') })] }));
};
export default EmptyStatus;
