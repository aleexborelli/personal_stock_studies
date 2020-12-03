import { Request, Response } from 'express';
import SessionService from '../services/Session/CreateSessionService';
import UserRepository from '../repositories/user/UserRepository';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRespository = new UserRepository();
    const createSesison = new SessionService(userRespository);

    const session = await createSesison.execute({
      email,
      password,
    });

    return response.json(session);
  }
}

export default SessionController;
