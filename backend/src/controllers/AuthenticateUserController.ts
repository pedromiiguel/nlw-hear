import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AutheticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;
    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code);

      return res.json(result);
    } catch (err) {
      console.log(err)
      return res.json(err.message);
    }
  }
}

export { AuthenticateUserController };
