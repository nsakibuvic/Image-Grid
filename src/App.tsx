import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getBlocks } from './blocks';

import { Header } from './components/Header/Header';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { useEffect, useState } from 'react';
import { Block } from './blocks';
import { extractUrlsAndIds } from './ExtractData';

export type DataBlock = Block & {  
  src: string;
  alt: string;
  width: string;
  height: string;
  createdAt?: string;
  description?: string;
  dimension?: string;
  onReceiveId: (id: string) => void;
  itemClicked: boolean
};
export const App = () => {
  const [imageData, setImageData] = useState<DataBlock[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [infoPanelData, setInfoPanelData] = useState<DataBlock[] | []>([]);

  useEffect(() => {
    const retrieveData = async () => {
      const blocks: Block = await getBlocks();
      const data = extractUrlsAndIds(blocks);
      setImageData(data);
      setIsLoading(false);
    };
    retrieveData();
  }, []);

  const receivedIdHandler = (id: string) => {
    const filteredData = imageData.filter((item) => item.id === id);
    setInfoPanelData(filteredData);
  };

  const filteredPanelData = infoPanelData?.map((data) => (
    <InfoPanel
      key={data.id}
      id={data.id}
      description={data.alt}
      dimensions={`${data.width} X ${data.height}`}
      createdAt={data.createdAt}
    />
  ));

  return (
    <Router>
      <Header />
      <main>
        {isLoading && <p>Loading Images..........</p>}
        <ImageGrid imageData={imageData} onReceiveId={receivedIdHandler} />
        {filteredPanelData}
      </main>
    </Router>
  );
};
