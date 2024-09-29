import { Request, Response } from 'express';
export declare class HelloController {
    index(request: Request, response: Response): Response<any, Record<string, any>>;
    somethingNew(): string;
    notFoundPage(): string;
    errorPage(): string;
    getNumber(num: number): number;
    isUserActive(status: boolean): boolean;
    greet(query: {
        name: string;
        age: number;
    }): string;
}
