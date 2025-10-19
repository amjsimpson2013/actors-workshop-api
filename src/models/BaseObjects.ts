interface ICreatable {
    createdDate: Date;
    createdUser: string;
}

interface IUpdatable {
    updatedDate: Date | null;
    updatedUser: string | null; 
}

export type Creatable<Type> = ICreatable & Type;
export type Updatable<Type> = IUpdatable & Type;
export type Saveable<Type> = ICreatable & IUpdatable & Type;