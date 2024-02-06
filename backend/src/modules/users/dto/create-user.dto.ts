import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";


export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @Matches(RegExHelper.passwordRegex, { message: MessagesHelper.PASSWORD_VALID })
    password: string;
}