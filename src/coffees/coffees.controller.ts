import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Param, 
    Patch, 
    Post, 
    Query
 } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery){
        // const {limit, offset} = paginationQuery
        
        return this.coffeesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        console.log(typeof id)
        return this.coffeesService.findById('' + id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.createCoffe(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() UpdateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.updateCoffee(id, UpdateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string, ){
        return this.coffeesService.removeCoffee(id)
    }
}
