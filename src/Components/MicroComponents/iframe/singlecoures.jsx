
import YouTube from 'react-youtube';
export default function  SinglecourseIframe(props){
    const opts = {
        height: '300',
        width: '400',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
    return(
       
        <>
        <div className="div">
        <YouTube videoId={props.videoId} opts={opts} />
        </div>
      
        </>
    )
}