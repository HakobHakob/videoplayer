import ReactPlayer from "react-player"
import envtt from "../en.vtt?url"
import { useRef, useState } from "react"
import * as Styled from "./Styled"

export const Videoplayer = () => {
  const url = "src/assets/video/15_Business_Secrets_Every_CEO_Should_Know.mp4"
  const player = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [played, setPlayed] = useState(0)

  const playVideo = () => {
    setPlaying(!playing)
  }

  const handleProgress = (state) => {
    setPlayed(state.played)
  }

  const handleSeekChange = (e) => {
    const seekTo = parseFloat(e.target.value)
    player.current.seekTo(seekTo)
  }

  const handleDuration = () => {
    setDuration(duration)
  }

  return (
    <Styled.PlayerWrapper>
      <ReactPlayer
        muted
        loop
        url={url}
        playing={playing}
        ref={player}
        controls={true}
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{
          file: {
            attributes: {
              crossOrigin: "anonymous",
            },
            tracks: [
              {
                kind: "subtitles",
                src: envtt,
                srcLang: "en",
                default: true,
              },
            ],
          },
        }}
      />

      <Styled.Controls>
        <Styled.PlayButton onClick={playVideo}>
          {playing ? "Pause" : "Play"}
        </Styled.PlayButton>

        <Styled.TimeLineBox>
          <Styled.TimeLine
            min="0"
            max="1"
            step="0.001"
            value={played}
            onChange={handleSeekChange}
          />
         
        </Styled.TimeLineBox>
      </Styled.Controls>
    </Styled.PlayerWrapper>
  )
}
