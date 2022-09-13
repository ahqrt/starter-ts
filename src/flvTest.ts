import { readFileSync } from 'fs'
import { resolve } from 'path'
import { STATIC } from './constants'

const pathToResolve = resolve(STATIC, '786528172_nb3-1-32.flv')

export function init() {
  const bufferData = readFileSync(pathToResolve)
  console.log('bufferData', bufferData)
}

