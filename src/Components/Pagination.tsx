import { Pagination, PaginationProps } from 'antd';
import { useTaskContext } from '../Contexts/TaskContext';

const PaginationComponent = () => {
  const { totalNumTasks, page, setPage } = useTaskContext();

  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement
  ) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <Pagination
      total={totalNumTasks}
      itemRender={itemRender}
      {...{ style: { justifyContent: 'center' } }}
      current={page}
      onChange={(page) => setPage(page)}
    />
  );
};

export default PaginationComponent;
