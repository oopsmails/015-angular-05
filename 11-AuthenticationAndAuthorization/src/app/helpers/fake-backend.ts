import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
  backend: MockBackend,
  options: BaseRequestOptions) {

  const email = 'abc@abc.com';
  const password = '123';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsYmVydCBMaXUiLCJhZG1pbiI6dHJ1ZX0.SwWXHNLuADvWrPPUYON-q36qp7yF16OMrvoQEGTpuTw';

  const notAdminEmail = 'bbb@abc.com';
  const notAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkxIiwibmFtZSI6Ik5vdCBBZG1pbiIsImFkbWluIjpmYWxzZX0.hLll4lR_WKmifqXdoZxye4YCdlWHx9muwW7ViVUm6bs';

  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an
    // asynchronous call to the server that takes 1 second.
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        const body = JSON.parse(connection.request.getBody());

        if (body.email === email && body.password === password) {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
            })));
        } else if (body.email === notAdminEmail && body.password === password) {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: notAdminToken }
            })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }



      //
      // Fake implementation of /api/orders
      //
      if (connection.request.url.endsWith('/api/orders') &&
        connection.request.method === RequestMethod.Get) {
          // real back end need to check token as well, with proper jwt lib.
        if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: [1, 2, 3] })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 401 })
          ));
        }
      }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
