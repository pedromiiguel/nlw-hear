import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';
import { GetLast3MessagesServices } from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
   const service = new GetLast3MessagesServices()

   const result = await service.execute();

   return res.json(result);
  }
}

export { GetLast3MessagesController };
