import React, { useState, useEffect } from 'react';
import './Playvideo.css';
import like from '../../assets/like.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import dislike from '../../assets/dislike.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';
import moment from 'moment';
import { value_converter } from '../../data';

const Playvideo = ({ videoId }) => {
  const [apiData, setapiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchData = async () => {
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoDetail_url);
    const data = await response.json();
    setapiData(data.items[0]);
  };

  const fetchOtherData = async () => {
    if (!apiData?.snippet?.channelId) return;
    const channelDetail_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    const response = await fetch(channelDetail_url);
    const data = await response.json();
    setChannelData(data.items[0]);

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
  await fetch(comment_url).then((res)=>res.json()).then(data=>setCommentData(data.items))

  };

  

  useEffect(() => {
    fetchData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="video player"
      ></iframe>

      <h3>{apiData?.snippet?.title ?? "Title"}</h3>
      <div className='play-video-info'>
        <p>{value_converter(apiData?.statistics?.viewCount ?? '16k')} views</p>
        <div className="publisher">
          <div>
            <img className='jack' src={channelData?.snippet?.thumbnails?.default?.url ?? ''} alt='channel thumbnail' />
          </div>
          <div className='info'>
            <p>{apiData?.snippet?.channelTitle ?? "Ganta sai kiran"}</p>
            <span>
              {value_converter(apiData?.statistics?.subscriberCount ?? "150k")} subscribers • {moment(apiData?.snippet?.publishedAt ?? "0").fromNow()}
            </span>
          </div>
          <button>Subscribe</button>
          <div className='likes'>
            <div className="like">
              <img src={like} alt='like' /> {value_converter(apiData?.statistics?.likeCount ?? "0")}
              <img src={dislike} alt='dislike' />
            </div>
            <img className='share' src={share} alt='share' />
            <img className='save' src={save} alt='save' />
          </div>
        </div>
        <hr />
        <div className="vid-description">
          <p>{apiData?.snippet?.description?.slice(0, 250) ?? "Description"}</p>
        </div>
        <hr />
        <h4>
          {value_converter(apiData?.statistics?.commentCount ?? "0")} Comments
        </h4>
        {commentData.map((item,index)=>{
             return(
                <div key = {index} className='comment'>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='user profile' />
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span> </span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment-action">
                    <img src={like} alt='like' />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt='dislike' />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.dislikeCount)}</span>
                  </div>
                </div>
              </div>
              )
        })}
       
        {/* Repeat the comment block as needed */}
      </div>
    </div>
  );
};


export default Playvideo;
