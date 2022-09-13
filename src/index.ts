import loudness from 'loudness'

async function init() {
  const muted = await loudness.getMuted()
  console.log('系统当前是否已静音', muted)
  let volume: number
  volume = await loudness.getVolume()
  console.log('系统当前的音量是', volume)
  await loudness.setVolume(90)
  volume = await loudness.getVolume()
  console.log('系统当前的音量是', volume)
}

init()

