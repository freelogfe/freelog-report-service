import { Context, EggLogger } from 'midway';
export default class NodeReport {
    ctx: Context;
    dal: any;
    logger: EggLogger;
    createRecord(): Promise<void>;
    list(): Promise<void>;
}
