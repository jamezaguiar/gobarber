import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { newPassword, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordService);

    await resetPassword.execute({ token, newPassword });

    return response.status(204).json();
  }
}
