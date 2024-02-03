import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "../../helpers/regex.helper";
import { MessagesHelper } from "../../helpers/messages.helper";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.passwordRegex, { message: MessagesHelper.PASSWORD_VALID })
    password: string;
}