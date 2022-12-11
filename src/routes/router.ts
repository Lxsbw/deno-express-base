/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-24 15:46:35
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-26 16:20:43
 */

import { Router } from '../deps.ts';
import * as MobilePhone from '../controller/mobile-phone.ts';

class AppRouter {
  public appRouter: Router;

  public constructor() {
    this.appRouter = Router();
    this.init();
  }

  private init() {
    this.appRouter.get('/', (req, res): void => {
      res.send('Hello, Deno Express TypeScript');
    });

    // const mobile = new MobilePhone.MobilePhoneController();
    this.appRouter.get('/api/mobile-phone/findone', MobilePhone.mobilePhoneController.findOne);
    this.appRouter.get('/api/mobile-phone/findall', MobilePhone.mobilePhoneController.findAll);
    this.appRouter.post('/api/mobile-phone/save', MobilePhone.mobilePhoneController.save);
    this.appRouter.put('/api/mobile-phone/update', MobilePhone.mobilePhoneController.update);
    this.appRouter.delete('/api/mobile-phone/delete', MobilePhone.mobilePhoneController.delete);
  }
}

export const appRouters = new AppRouter().appRouter;
