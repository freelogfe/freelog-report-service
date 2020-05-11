export interface PlainObject {
    [key: string]: any;
}
/**
 * @description response
 */
export interface FreelogResponse {
    ret: number;
    errcode: number;
    msg: string;
    data: PlainObject | null;
}
export interface CurlRequestOption {
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'TRACE' | 'CONNECT' | undefined;
    data?: any;
    dataType?: string;
    headers?: PlainObject;
    timeout?: number;
    auth?: string;
    followRedirect?: boolean;
    gzip?: boolean;
}
export declare type nextDefinition = () => Promise<void>;
