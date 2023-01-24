import { ImageGridData } from './ImageGrid';
import styles from './Image.module.css';

export const Image = (props: ImageGridData) => {
  const imageClickedHandler = () => {
    props.onReceiveId(props.id!);
  };

  const updatedImageClass = `${styles.image} ${
    props.itemClicked ? styles.image_after : ''
  }`;

  return (
    <img
      src={props.src}
      alt={props.alt}
      className={updatedImageClass}
      onClick={imageClickedHandler}
      data-testid="image-clicked"
    />
  );
};
export default Image;
