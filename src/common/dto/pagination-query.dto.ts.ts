import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";
import { off } from "process";

export class PaginationQueryDtoTs {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit:number

     @IsOptional()
    @Type(() => Number)
    offset:number
}
