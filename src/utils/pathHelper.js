import path from 'path'
import { remote } from 'electron'

export const getStaticPath = (relativePath) => {
  if (process.env.NODE_ENV === 'development') {
    return path.join(__static, relativePath)
  }
  return path.join(remote.app.getAppPath(), 'resources', relativePath)
}