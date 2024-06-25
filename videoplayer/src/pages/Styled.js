import styled from "styled-components"

export const PlayerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  max-width: 100%;
  background: #000;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const PlayButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`
export const TimeLineBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

export const TimeLine = styled.input.attrs({ type: "range" })`
  width: 80%;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  background: #ddd;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }
`

export const TimelineValue = styled.p`
  float: right;
  padding-right: 20px;
  color: white;
`
