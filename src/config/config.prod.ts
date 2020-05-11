import { EggAppConfig, PowerPartial } from 'midway'

export type DefaultConfig = PowerPartial<EggAppConfig>

export default () => {
  const config = {} as DefaultConfig
  config.mongoose = {
    url: 'mongodb://mongo-prod.common:27017/reportRecords'
  }
  return config
}
