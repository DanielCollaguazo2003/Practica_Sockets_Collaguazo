import { Injectable } from '@angular/core';
import { Express } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  port = process.env.PORT ?? 3000;

  app = Express();

}
