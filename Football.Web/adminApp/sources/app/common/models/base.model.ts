export class BaseModel<T>{
    Id: T;
}

export class ModelWithName<T> extends BaseModel<T>{
    Name: string;
}