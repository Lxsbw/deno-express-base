import { express } from './deps.ts';
import { bodyParser } from './deps.ts';
import { mongoose } from './deps.ts';
import { appRouters } from './routes/router.ts'; // 路由
import { sysConfig, getMongoUrl, env } from './config/config.default.ts'; // 配置

// import { createRequire } from 'https://deno.land/std/node/module.ts';
// const require = createRequire(import.meta.url);
// const mongoose = require('mongoose');

class App {
  public app: express.Application;

  constructor() {
    console.log('app初始化');

    this.app = express();
    this.middleware();
    // this.swaggerInit();
    this.routes();
    this.mongo();
    this.launchConf();
  }

  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.use(appRouters);
  }

  private mongo(): void {
    console.log(getMongoUrl());
    mongoose.set('debug', env.DEBUG);
    mongoose
      .createConnection(getMongoUrl())
      .then(open => {
        console.log('📚  mongodb is launching...');
      })
      .catch(err => {
        console.error.bind(console, `connection error:${err}`);
      });
  }

  private launchConf() {
    console.log('====================================');
    console.log('🚀  Your awesome APP is launching...');
    console.log('====================================');

    /**
     * Start Express server.
     */
    this.app.listen(sysConfig.port, () => {
      console.log('====================================');
      console.log(`✅  http://${sysConfig.host}:${sysConfig.port}`);
      console.log(`✅  http://${sysConfig.host}:${sysConfig.port}/api-docs/swagger`);
      console.log(`✅  Your awesome APP launched ${this.app.get('env')}`);
      console.log('====================================');
    });
  }
}

export default new App().app;
