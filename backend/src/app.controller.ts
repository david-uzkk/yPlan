import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body('email') email: string) {
    // Lógica de login será implementada aqui
    return `E-mail recebido: ${email}`;
  }
}
