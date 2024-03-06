import {IsString } from 'class-validator'

export class CreateCoffeeDto {
    @IsString()
    readonly name:string

    @IsString({each:true})
    readonly brand:string

    @IsString({each:true})
    readonly flavors:string[]
}
