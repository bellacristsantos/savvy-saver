import React from 'react';
import './LearnMore.css';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import client from '../../apollo';

const GET_TOP_FINANCE_PODCASTS = gql`
  query {
    financePodcasts: searchForTerm(
      term: "finance",
      filterForTypes: PODCASTSERIES,
      isSafeMode: true,
      filterForGenres: [PODCASTSERIES_BUSINESS],
      searchResultsBoostType: BOOST_POPULARITY_A_LOT,
      limitPerPage: 24
    ) {
      searchId
      podcastSeries {
        uuid
        name
        rssUrl
        imageUrl
      }
    }
  }
`;

const LearnMore = () => {
  const { loading, error, data } = useQuery(GET_TOP_FINANCE_PODCASTS, {
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const podcastsWithImages = data.financePodcasts
    ? data.financePodcasts.podcastSeries.filter((podcast) => podcast.imageUrl)
    : [];

  const handleListenClick = (podcast) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(podcast.name)}&entity=podcast`)
      .then((response) => response.json())
      .then((data) => {
        const podcastUrl = data.results[0]?.collectionViewUrl;
        if (podcastUrl) {
          window.location.href = podcastUrl;
        } else {
          console.error('No podcast URL found in the Apple Podcasts API response.');
        }
      })
      .catch((error) => {
        console.error('Error calling the Apple Podcasts API:', error);
      });
  };

  return (
    <div className="learn-more-container" id="learn-more">
      <div className="learn-more-items">
        {podcastsWithImages.slice(0, 24).map((podcast) => (
          <div key={podcast.uuid} className="podcast-container">
            <img
              src={podcast.imageUrl}
              alt={podcast.name}
              onClick={() => handleListenClick(podcast)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
