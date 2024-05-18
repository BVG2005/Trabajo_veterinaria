import express from "express";
import registrosModelPrisma from "../../registros-model.prisma.mjs";


const { Router } = express;

export default class RegistroController{

    #router = Router();
    #registroModel = null;

    constructor(){
      this.#registroModel = new registrosModelPrisma();
      this.registrar();


    }

    getRouter(){
      return this.#router;
    }

    registrar() {
      const routerV1 = Router();
      routerV1.get(`/registros`, async (req, res) => await this.getAllregistro(req, res));
      routerV1.post(`/registros`, async (req, res) => await this.createRegistro(req, res));
      routerV1.get(`/usuarios`, async (req, res) => await this.getAllusuarios(req, res));
      routerV1.post(`/usuarios`, async (req, res) => await this.createUsuario(req, res));

        
    
        
      this.#router.use('/v1',routerV1);
    }

    async getAllregistro(req, res) {
      try {
       const registros = await this.#registroModel.getAllregistro();
       res.json(registros);
      } catch (error) {
        console.error(`error: ${error}`);
    
      }
    }
    async getAllusuarios(req, res) {
      try {
          const usuarios = await this.#registroModel.getAllusuario();
          res.json(usuarios);
      } catch (error) {
          console.error(`Error: ${error}`);
          
        }
    }

    async createRegistro(req, res) {
      try{
        const registro = req.body;
        console.info({registro});
        this.#registroModel.addregistro(registro);
        res.send('registro creado');
      } catch (error){
        console.log(`error:${error}`)
      }

    }
    async createUsuario(req, res) {
      try{
        const usuario = req.body;
        console.info({usuario});
        this.#registroModel.addusuario(usuario);
        res.send('usuario creado');
      } catch (error){
        console.log(`error:${error}`)
      }

    }
    
}
