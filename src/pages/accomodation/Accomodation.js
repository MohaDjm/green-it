import './accomodation.scss';
import { useParams } from 'react-router-dom';
import datas from '../../data/logements.json';
import Header from '../../components/header/Header';
import Slider from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import { Navigate } from 'react-router-dom';
import Tag from '../../components/tag/Tag';

export default function Accomodation() {
  const idAccomodation = useParams('id').id;
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  );

  if (dataCurrentAccomodation.length === 0) {
    return <Navigate to="/404" />;
  }

  const name = dataCurrentAccomodation[0].host.name.split(' ');
  const rating = dataCurrentAccomodation[0].rating;
  const description = dataCurrentAccomodation[0].description;
  const equipments = dataCurrentAccomodation[0].equipments;

  return (
    <>
      <Header />
      <Slider imageSlider={dataCurrentAccomodation[0].pictures} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation[0].title}</h1>
            <p>{dataCurrentAccomodation[0].location}</p>
            <div className="tag-container">
              {dataCurrentAccomodation[0].tags.map((tag, index) => {
                return <Tag key={index} value={tag} />;
              })}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation[0].host.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
