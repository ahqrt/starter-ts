import { resolve } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import Ffmpeg from 'fluent-ffmpeg'
import { STATIC } from './constants'

const pathToResolve = resolve(STATIC, '786528172_nb3-1-32.flv')
const savePath = resolve(STATIC, 'out.mp4')
const readStream = createReadStream(pathToResolve)
const writeStream = createWriteStream(savePath)

export const command = () => {
  Ffmpeg(readStream)
    .addOutputOptions('-movflags +frag_keyframe+separate_moof+omit_tfhd_offset+empty_moov')
    .format('mp4')
    .pipe(writeStream)

  // Ffmpeg(pathToResolve)
  //   .outputOptions([])
  //   .save(savePath)
}

