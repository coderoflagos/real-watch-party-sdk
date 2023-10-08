import React, { useState } from 'react';
import RealWatchSDK from 'real-watch-sdk';

const WatchPartyComponent = () => {
  const [guestLink, setGuestLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createWatchParty = async () => {
    setIsLoading(true);

    try {
      // Initialize the RealWatchSDK with your configuration
      const watchPartySDK = new RealWatchSDK({
        apiKey: '1234567789', // Replace with your API key
        // Other configuration options specific to your SDK
      });

      // Replace hostId, title, and videoUrl with actual data
      const hostId = '123456';
      const title = 'Movie Night';
      const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-while-drinks-coffee-1730-large.mp4';

      const generatedGuestLink = await watchPartySDK.createWatchParty(hostId, title, videoUrl);
      setGuestLink(generatedGuestLink);
    } catch (error) {
      console.error('Error creating Watch Party:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Watch Party</h1>
      <button onClick={createWatchParty} disabled={isLoading}>
        {isLoading ? 'Creating Watch Party...' : 'Create Watch Party'}
      </button>
      {guestLink && (
        <div>
          <p>Guest Link:</p>
          <a href={guestLink} target="_blank" rel="noopener noreferrer">
            {guestLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default WatchPartyComponent;
