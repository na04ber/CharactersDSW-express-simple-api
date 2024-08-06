import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Character } from './character.entity.js';

@Entity()
export class Item {
  @Property({ nullable: false, unique: true })
  name!: string;

  @Property()
  descrpition!: string;

  @ManyToMany(() => Character, (character) => character.items)
  characters = new Collection<Character>(this);
}
