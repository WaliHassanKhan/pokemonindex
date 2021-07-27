import { HttpService } from '@nestjs/axios';
export declare class IndexService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<any>;
    process(res: any): any;
}
