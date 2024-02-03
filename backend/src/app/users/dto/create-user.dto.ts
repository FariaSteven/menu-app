import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "../helpers/regex.helper";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.passwordRegex)
    password: string;
}