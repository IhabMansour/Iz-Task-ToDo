import { Button, Flex, Input, Select } from 'antd';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import { useTranslation } from 'react-i18next';
import { FC, useCallback, useMemo } from 'react';
import CircleCreateTaskSmall from '../Icons/CircleCreateTaskSmall';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { useState } from 'react';

interface SearchAndFilterProps {
  handleOpenCreateNewStatusModal?: () => void;
}

const SearchAndFilter: FC<SearchAndFilterProps> = ({
  handleOpenCreateNewStatusModal = () => {},
}) => {
  const isMobileScreen = useIsMobile();
  const { t } = useTranslation();
  const {
    statuses,
    queryString,
    selectedStatusID,
    setQueryString,
    setSelectedStatusID,
  } = useTaskContext();

  const [queryStringState, setQueryStringState] = useState(queryString);

  const debouncedSetQueryString = useCallback(
    debounce((query: string) => {
      setQueryString(query);
    }, 500),
    []
  );

  const items = useMemo(() => {
    return [
      ...statuses?.map((status) => {
        return {
          value: status.id,
          label: (
            <Flex gap="small" align="center">
              <div
                {...{
                  style: {
                    background: status.color,
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                  },
                }}
              />
              <a onClick={() => setSelectedStatusID(status.id)}>
                {status.title}
              </a>
            </Flex>
          ),
        };
      }),
      {
        key: '51000',
        label: (
          <Button
            type="primary"
            icon={<CircleCreateTaskSmall />}
            onClick={handleOpenCreateNewStatusModal}
            {...{ style: { width: '100%' } }}
          >
            {t('CREATE_NEW_STATUS')}
          </Button>
        ),
      },
    ];
  }, [statuses]);

  return (
    <Flex gap="middle" justify="space-between" align="center" wrap>
      <Input
        addonBefore={<SearchOutlined />}
        placeholder={t('SEARCH_PLACEHOLDER')}
        value={queryStringState}
        onChange={(e) => {
          setQueryStringState(e.target.value);
          debouncedSetQueryString(e.target.value);
        }}
        allowClear
        style={{ width: isMobileScreen ? '100%' : '66%' }}
      />

      <Select
        allowClear
        value={selectedStatusID}
        onClear={() => setSelectedStatusID('')}
        placeholder={t('STATUS')}
        options={items}
        {...{
          style: {
            width: isMobileScreen ? '100%' : '32%',
          },
        }}
      />
    </Flex>
  );
};

export default SearchAndFilter;
