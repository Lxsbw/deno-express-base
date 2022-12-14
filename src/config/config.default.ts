/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-23 10:54:14
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-26 10:45:25
 */

import { ISystemConfig } from '../types/configs.ts';

export const sysConfig: ISystemConfig = {
  host: 'localhost',
  port: 8001,
};

export const env = {
  DEBUG: true,
  ENV: '',
};

const mongoConf = {
  user: 'test_user',
  pass: '123456',
  host: '121.37.188.31',
  port: '16380',
  db: 'testdb',
};

export const getMongoUrl = () => {
  let mongoUrl = 'mongodb://';
  let dbName = mongoConf.db;
  mongoUrl += `${mongoConf.user}:${mongoConf.pass}@${mongoConf.host}:${mongoConf.port}`;
  mongoUrl += `/${dbName}`;

  return mongoUrl;
};
