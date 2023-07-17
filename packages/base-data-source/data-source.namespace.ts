declare namespace DataSource {

    export interface CRUD<T, ID> {
        create(obj: T): T;
        get(id: ID): T;
        update(obj: T): T;
        delete(id: ID): T;
    }

    export interface findableCRUD<T, ID> extends CRUD<T, ID> {
        findAll(): T[];
        findBy(query: T): T[];
    }

    export interface Category<T, ID> extends findableCRUD<T, ID> {

    }

    export interface Order<T, ID> extends findableCRUD<T, ID> {
        
    }

    export interface Table<T, ID> extends CRUD<T, ID> {
        
    }

    export interface Item<T, ID> extends findableCRUD<T, ID> {
        
    }
}