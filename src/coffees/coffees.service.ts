import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id:1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla']
        }
    ]


    findAll(){
        return this.coffees
    }

    findById(id:string){
        const coffee = this.coffees.find(item => item.id === +id)

        if(!coffee) throw new NotFoundException(`no such coffee by this id #${id} exists`)

        return coffee
    }

    updateCoffee(id:string, updateCoffeeData: Partial<Coffee>){
        const existingCoffee = this.findById(id)

        if(!existingCoffee) return `no such coffee by this id #${id} exists`

        const index = this.coffees.findIndex(item => item.id === +id)

        this.coffees[index] = { ...this.coffees[index], ...updateCoffeeData }

        return this.coffees[index]
        
    }

    createCoffe(CreateCoffeeDto: any){
        this.coffees.push(CreateCoffeeDto)
        return CreateCoffeeDto
    }

    removeCoffee(id:string){
        const existingCoffee = this.findById(id)

        if(!existingCoffee) return `no such coffee by this id #${id} exists`

        this.coffees = this.coffees.filter(item => item.id !== +id)

        return `Coffee with id #${id} has been removed`
        
    }
}

