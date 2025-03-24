import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import { VIEW_MODE } from '../Constants/SharedConstants';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import LayoutGridIcon from '../Icons/LayoutGridIcon';
import LayoutTableIcon from '../Icons/LayoutTableIcon';
const ToDoHeader = ({ handleOpenCreateTaskModal }) => {
    const isMobileScreen = useIsMobile();
    const { t } = useTranslation();
    const { view, setView } = useTaskContext();
    return (_jsxs(Flex, { justify: "space-between", wrap: true, gap: "small", children: [_jsxs(Flex, { gap: "middle", style: { width: isMobileScreen ? '100%' : 'auto' }, children: [_jsx(Button, { type: view === VIEW_MODE.TABLE ? 'primary' : 'text', icon: _jsx(LayoutTableIcon, {}), onClick: () => setView(VIEW_MODE.TABLE), style: { width: isMobileScreen ? '50%' : 'auto' }, children: t('TABLE') }), _jsx(Button, { type: view === VIEW_MODE.GRID ? 'primary' : 'text', icon: _jsx(LayoutGridIcon, {}), onClick: () => setView(VIEW_MODE.GRID), style: { width: isMobileScreen ? '50%' : 'auto' }, children: t('GRID') })] }), _jsx(Button, { type: "primary", onClick: handleOpenCreateTaskModal, style: { width: isMobileScreen ? '100%' : 'auto' }, children: t('CREATE_NEW_TASK') })] }));
};
export default ToDoHeader;
