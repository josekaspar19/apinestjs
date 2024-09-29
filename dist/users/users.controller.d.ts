import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string;
        password: string;
        name: string | null;
        createdAt: Date;
        updateAt: Date;
    }[]>;
    createUser(user: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        password: string;
        name: string | null;
        createdAt: Date;
        updateAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
