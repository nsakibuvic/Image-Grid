import React, {useState} from 'react';
import styles from './ImageGrid.module.css';
import Image from './Image';
import GridLayout from 'react-grid-layout';

export type ImageGridData = {
  src?: string;
  alt?: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;   
  onReceiveId: (id: string) => void;
  itemClicked?: boolean 
};
export type ImageGridProps = {
  imageData: ImageGridData[];
  onReceiveId: (id: string) => void;
  itemClicked?: boolean 
};

export const ImageGrid = (props: ImageGridProps) => {
  const [clicked, setClicked] = useState<any>(null)
  const sendIdHandler = (id: string) => {
    props.onReceiveId(id!);
    setClicked(id)
  };
  const imagesFromBlock = props.imageData.map((item: ImageGridData) => {
    return (
      <Image
        key={item.id}
        id={item.id}
        alt={item.alt}
        src={item.src}
        onReceiveId={sendIdHandler}
        itemClicked = {clicked === item.id}
      />
    );
  });
  return (
    <div className={styles.imageGrid}>
      <GridLayout className="layout" cols={4} rowHeight={75} width={100}>
        {imagesFromBlock}
      </GridLayout>
    </div>
  );
};
