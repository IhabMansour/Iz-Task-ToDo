import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Input, Select } from 'antd';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import CircleCreateTaskSmall from '../Icons/CircleCreateTaskSmall';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { useState } from 'react';
const SearchAndFilter = ({ handleOpenCreateNewStatusModal = () => { }, }) => {
    const isMobileScreen = useIsMobile();
    const { t } = useTranslation();
    const { statuses, queryString, selectedStatusID, setQueryString, setSelectedStatusID, } = useTaskContext();
    const [queryStringState, setQueryStringState] = useState(queryString);
    const debouncedSetQueryString = useCallback(debounce((query) => {
        setQueryString(query);
    }, 500), []);
    const items = useMemo(() => {
        return [
            ...statuses === null || statuses === void 0 ? void 0 : statuses.map((status) => {
                return {
                    value: status.id,
                    label: (_jsxs(Flex, { gap: "small", align: "center", children: [_jsx("div", { style: {
                                    background: status.color,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 4,
                                } }), _jsx("a", { onClick: () => setSelectedStatusID(status.id), children: status.title })] })),
                };
            }),
            {
                key: '51000',
                label: (_jsx(Button, { type: "primary", icon: _jsx(CircleCreateTaskSmall, {}), onClick: handleOpenCreateNewStatusModal, style: { width: '100%' }, children: t('CREATE_NEW_STATUS') })),
            },
        ];
    }, [statuses]);
    return (_jsxs(Flex, { gap: "middle", justify: "space-between", align: "center", wrap: true, children: [_jsx(Input, { addonBefore: _jsx(SearchOutlined, {}), placeholder: t('SEARCH_PLACEHOLDER'), value: queryStringState, onChange: (e) => {
                    setQueryStringState(e.target.value);
                    debouncedSetQueryString(e.target.value);
                }, allowClear: true, style: { width: isMobileScreen ? '100%' : '66%' } }), _jsx(Select, { allowClear: true, value: selectedStatusID, onClear: () => setSelectedStatusID(''), placeholder: t('STATUS'), options: items, style: {
                    width: isMobileScreen ? '100%' : '32%',
                } })] }));
};
export default SearchAndFilter;
