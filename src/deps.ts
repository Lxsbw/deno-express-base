import express from 'npm:express@~4.18.2';
import Router from 'npm:express@~4.18.2';
export { express, Router };
// export { Request, Response, Router, NextFunction } from 'npm:@types/express@~4.17.14';
// export { Request, Response, Router, NextFunction };

import bodyParser from 'npm:body-parser@1.20.1';
export { bodyParser };

// import { createRequire } from 'https://deno.land/std/node/module.ts';
// const require = createRequire(import.meta.url);
// const { Document, Schema, model } = require('mongoose');

import mongoose from 'npm:mongoose@^6.8.0';
import { Document, Schema, model } from 'npm:mongoose@^6.8.0';
// import Schema from 'npm:mongoose@5.13.15';
// import model from 'npm:mongoose@5.13.15';
export { mongoose, Document, Schema, model };

import joi from 'npm:joi@14.3.1';
export { joi };
