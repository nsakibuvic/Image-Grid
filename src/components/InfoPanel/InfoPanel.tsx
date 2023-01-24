import styles from './InfoPanel.module.css';

type InfoPanelProps = {
  id?: string;
  description?: string;
  dimensions?: string;
  createdAt?: string;
};

export const InfoPanel = (props: InfoPanelProps) => {
  const { id, description, dimensions, createdAt } = props;

  if (!id) {
    return <aside className={styles.panel}></aside>;
  }

  const date = new Date(createdAt!);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <aside className={styles.panel}>
      <h2 className={styles.heading}>Block info</h2>
      <dl>
        <dt className={styles.title}>ID:</dt>
        <dd className={styles.details}>{id}</dd>

        <dt className={styles.title}>Description:</dt>
        <dd className={styles.details}>{description}</dd>

        <dt className={styles.title}>Dimensions:</dt>
        <dd className={styles.details}>{dimensions}</dd>

        <dt className={styles.title}>Created at:</dt>
        <dd className={styles.details}>{formattedDate}</dd>
      </dl>
    </aside>
  );
};
