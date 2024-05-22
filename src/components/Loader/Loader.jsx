import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader_wrapper}>
      <span className={styles.loader_title}>Loading...</span>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
