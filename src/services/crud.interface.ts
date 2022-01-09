
export interface ICrud<T> {
    getAll(): Promise<Array<T>>;
    delete(id: number | string): Promise<boolean>;
    getById(id: number | string): Promise<T>;
    save(t: T): Promise<T>;
}