import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private nextId = 1;

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  create(createItemDto: CreateItemDto): Item {
    const newItem: Item = {
      id: this.nextId++,
      ...createItemDto,
    };
    this.items.push(newItem);
    return newItem;
  }

  update(id: number, updateItemDto: UpdateItemDto): Item {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    const updatedItem = { ...this.items[itemIndex], ...updateItemDto };
    this.items[itemIndex] = updatedItem;
    return updatedItem;
  }

  delete(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    this.items.splice(itemIndex, 1);
  }
}
