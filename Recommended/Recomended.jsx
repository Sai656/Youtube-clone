import React, { useState, useEffect } from 'react';
import './Recomended.css';
import { API_KEY } from '../../data';
import moment from 'moment';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const response = await fetch(relatedVideo_url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiData(data.items);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className='recommended'>
      {error && <p className="error-message">{error.message}</p>}
      {apiData.length > 0 ? (
        apiData.map((item, index) => {
          const { id, snippet } = item;
          const { title, channelTitle, publishedAt, thumbnails } = snippet;
          return (
            <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className='side-video-list'>
              <img src={thumbnails.medium.url} alt={title} />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics?.viewCount || '178k')} views • {moment(publishedAt).fromNow()}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recomended;
