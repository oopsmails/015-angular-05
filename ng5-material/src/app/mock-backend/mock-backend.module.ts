import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { MockHttpInterceptor } from './mock-http.interceptor';
import { MockHttpClientStockService } from './mock-httpclient-stock.service';
import { MockHttpClientUserService } from './mock-httpclient-user.service';

const providers: Array<any> = [
    MockHttpClientStockService,
    MockHttpClientUserService
];

if (environment.useMockBackend === true) {
    providers.push({
        provide: HTTP_INTERCEPTORS,
        useClass: MockHttpInterceptor,
        multi: true
    });
}

@NgModule({
    imports: [],
    exports: [],
    declarations: []
})
export class MockBackendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MockBackendModule,
            providers: providers
        };
    }
}
