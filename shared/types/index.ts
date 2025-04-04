export interface ExampleData {
    id: string;
    name: string;
    description: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';