import { PrismaClient } from '@prisma/client';

export default class registrosModelPrisma {
  
  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addregistro(registro) {
    const respuesta = await this.#prismaClient.registro.create({data: registro});  
    }
  async addusuario(usuarios) {
    const respuesta = await this.#prismaClient.usuarios.create({data: usuarios});  // Cambio aquí
  }
    
    
  async getAllregistro() { 
    return await this.#prismaClient.registro.findMany();
  }
  async getAllusuario() { 
    return await this.#prismaClient.usuarios.findMany();  // Cambio aquí
  }
}



