import { Request, response, Response  } from "express";
import { GetAllCategoryService } from "../services/GetAllCategoryService";

export class GetAllCategoryController {
    async handle(request:Request, response:Response) {
        const services = new GetAllCategoryService()
        const categories = await services.execute();

        return response.json(categories)

    }
}