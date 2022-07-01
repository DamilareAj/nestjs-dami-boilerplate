 import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService){}

    @Get()
    async findAll() {
        const posts = await this.postsService.findAll()
        return {
            statusCode: HttpStatus.OK,
            message: "Posts fetched successfully",
            posts
        }
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const post = await this.postsService.findOne(id)
        if(!post) return {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Post Not Found"
        }
        else return {
            statusCode: HttpStatus.OK,
            message: "Post fetched successfully",
            post
        }
    }

    @Post()
    async create(@Body() createPost: CreatePostDto){
        const post = await this.postsService.create(createPost)
        if(!post) return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: "Unable to create post"
        }
        else return {
            statusCode: HttpStatus.OK,
            message: "Post created successfully",
            post
        }
    }

    @Put(":id")
    async update(@Body() updatePost: UpdatePostDto, @Param('id') id) {
        const post = await this.postsService.findOne(id)
        if(!post) return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: "Unable to update post"
        }
        else {
            await this.postsService.update(updatePost, id)
            return {
            statusCode: HttpStatus.OK,
            message: "Post updated successfully",
            post
        }
    }
    }

    @Delete(":id")
    async delete(@Param("id") id) {
        const post = await this.postsService.delete(id)
        if(!post) return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: "Unable to delete post"
        }
        else return {
            statusCode: HttpStatus.OK,
            message: "Post deleted",
            post
        }
    }
}


