export declare const createStatus: (title: string, color: string) => Promise<any>;
export declare const getAllStatuses: () => Promise<any>;
export declare const updateStatus: (statusID: string, title: string, color: string, newOrderIndex: number) => Promise<any>;
export declare const deleteStatus: (statusID: string) => Promise<any>;
export declare const getTasksBYStatusID: (taskID: string) => Promise<any>;
