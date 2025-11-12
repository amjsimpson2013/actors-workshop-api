import { Posts } from "../utils/db/context";

export interface IPostData {
    createdDate: Date | null;
    id: number;
    message: string | null;
}

export interface IPostDisplay {
    createdDate: Date | undefined;
    message: string | null;
}

export type PostDto = IPostData;
export type PostDisplay = IPostDisplay;

export function mapFromDb(table: Posts): PostDto {
    return {
        id: table.id.__select__,
        message: table.message,
        createdDate: null
    }
}