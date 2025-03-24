import { jsx as _jsx } from "react/jsx-runtime";
import { Pagination } from 'antd';
import { useTaskContext } from '../Contexts/TaskContext';
const PaginationComponent = () => {
    const { totalNumTasks, page, setPage } = useTaskContext();
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return _jsx("a", { children: "Previous" });
        }
        if (type === 'next') {
            return _jsx("a", { children: "Next" });
        }
        return originalElement;
    };
    return (_jsx(Pagination, { total: totalNumTasks, itemRender: itemRender, style: { justifyContent: 'center' }, current: page, onChange: (page) => setPage(page) }));
};
export default PaginationComponent;
