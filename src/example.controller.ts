import "reflect-metadata";

import { Controller, Get, ContentType, Post, Put, Delete, Patch, Param, Body } from 'routing-controllers';

export interface IUser {
    id: number;
    name: string;
}

@Controller()
export class UserController {

    @Get("/users")
    @ContentType("application/json")
    getAll(): IUser[] {
        return [
            { id: 1, name: "First user!" },
            { id: 2, name: "Second user!" }
        ];
    }

    @Get("/users/:id")
    getOne(@Param('id') id: number): string {
        return "User #" + id;
    }

    @Post("/users")
    post(@Body() body: IUser): string {
        let user = JSON.stringify(body); // probably you want to install body-parser for express
        return "User " + user + " !saved!";
    }

    @Put("/users/:id")
    put(@Param('id') id: number): string {
        return "User #" + id + " has been putted!";
    }

    @Patch("/users/:id")
    patch(@Param('id') id: number): string {
        return "User #" + id + " has been patched!";
    }

    @Delete("/users/:id")
    remove(@Param('id') id: number): string {
        return "User #" + id + " has been removed!";
    }

}