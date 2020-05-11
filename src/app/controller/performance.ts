import { provide, inject, controller, Context, post, get, plugin, EggLogger } from 'midway'
import { PlainObject } from '../../interface'

@provide()
@controller('/v1/report')
export default class NodeReport {

  @inject()
  ctx: Context

  @plugin()
  dal: any

  @inject()
  logger: EggLogger

  @post('/performance')
  async createRecord() {
    try {
      const body: string = this.ctx.request.body
      const bodyObj: PlainObject = JSON.parse(body)
      const res = await this.dal.nodePerformanceReportRecord.create(bodyObj)
      this.ctx.success(res)
    } catch (e) {
      this.logger.error(e)
    }
  }

  @get('/performance/list')
  async list() {
    const condition = {}
    const projection: string [] = []
    const res = await this.dal.nodePerformanceReportRecord.findPageList(condition, 1, 50, projection.join(' '))
    this.ctx.success(res)
  }
}
