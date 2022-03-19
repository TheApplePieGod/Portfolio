export enum SnackbarStatus {
    Closed = 0,
    Error = 1,
    Success = 2,
    Warning = 3,
    Info = 4
}

export interface SnackbarState {
    status: SnackbarStatus;
    message: string;
    closeDelay: number;
}