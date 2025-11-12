export interface IEmailData {
    id: number | null;
    name: string;
    address: string;
    message: string;
}

export interface IEmailNullable {
    id: number | null;
    name: string | null;
    email: string | null;
    message: string | null;
}

export type EmailDto = IEmailData;
export type EmailNullable = IEmailNullable;

export function mapFromNullable(nullable: EmailNullable): EmailDto {
    return {
        id: nullable.id,
        name: nullable.name ?? '',
        address: nullable.email ?? '',
        message: nullable.message ?? ''
    };
}