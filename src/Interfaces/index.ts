export interface TaskInterface {
  id: string;
  orderIndex: number;
  title: string;
  description: string;
  isFavorite: boolean;
  status: StatusInterface;
}

export interface StatusInterface {
  id: string;
  orderIndex: number;
  title: string;
  color: string;
}

export interface UserInterface {
  id: string;
  email: string;
  name: string;
}

export interface FetchTaskProps {
  querySearch?: string;
  statusId?: string;
  page?: number;
  limit?: number;
}

export interface UpdateTaskProps {
  taskID?: string;
  title?: string;
  description?: string;
  newOrderIndex?: number;
  newStatusId?: string;
}
