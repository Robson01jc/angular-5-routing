import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

interface Server {
  id: number,
  name: string,
  status: string
}

// If you want to inject a service into another service you have to add @Injactable to it.
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server |
    Observable<Server> |
    Promise<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}