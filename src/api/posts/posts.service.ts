import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly posts: Repository<Post>
    ) {}

    async findAll(): Promise<Post[]> {
        return await this.posts.find()
    }

    async findOne(id: string): Promise<Post> {
        return await this.posts.findOne({ where: { id: id }})
    }

    async create(post: CreatePostDto) {
        const newPost = this.posts.create(post);
        await this.posts.save(post);
        return newPost;
    }

    async update(post: UpdatePostDto, id: string) {
        await this.posts.update({ id }, post);
        return await this.posts.findOne({ id });
    }

    async delete(id: string) {
        return await this.posts.delete({ id })
    }

}
