import { EggAppConfig, EggAppInfo, PowerPartial, Context } from 'midway'

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585202352797_7394'

  config.middleware = [ 'errorHandler' ]
  // add your config here

  config.bodyParser = {
    enableTypes: ['json', 'form', 'text']
  }

  config.cors = {
    credentials: true,
    origin(ctx: Context) {
      return ctx.request.headers.origin || '*'
    },
    exposeHeaders: 'freelog-resource-type,freelog-meta,freelog-system-meta,freelog-sub-dependencies,freelog-entity-nid',
  }

  config.security = {
    domainWhiteList: [ '.testfreelog.com' ],
    csrf: {
      enable: false,
      ignoreJSON: true,
      cookieName: 'csrfToken',
    }
  }

  config.mongoose = {
    url: 'mongodb://39.108.77.211:30772/reportRecords'
  }
  /**
   * 内部中间件没有处理到的异常,在此处统一处理
   */
  config.onerror = {
    all(err: any, ctx: Context) {
      ctx.body = {
        ret: 0,
        errCode: 1,
        msg: '未处理的异常',
        data: err.stack || err.toString(),
      }
    },
  }

  return config
}
