import './banner.scss';

export default function Banner({ title, classImg }) {
  return (
    <section className={classImg ? 'banner ' + classImg : 'banner'}>
      {title && <p>{title}</p>}
    </section>
  );
}

// <section className={aboutPage ? 'banner banner_about' : 'banner'}>
