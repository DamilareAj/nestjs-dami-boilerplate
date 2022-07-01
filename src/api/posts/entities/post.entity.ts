import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique
  } from 'typeorm';

@Entity()
@Unique(['id'])
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'title', nullable: false, length: 36 })
  title?: string;

  @Column('varchar', { name: 'body', nullable: false, length: 52 })
  body?: string;

  @Column('timestamp', { name: 'image', nullable: true })
  image?: string;

}