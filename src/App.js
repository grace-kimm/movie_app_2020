import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
} // props object 안에 있는 fav argument를 가져옴

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://static01.nyt.com/images/3019/03/22/dining/jm-kimchi/merlin_150934050_507fb4e7-4773-4be3-96eb-9eae98f7b9e6-articleLarge.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Chicken",
    image: "https://rereco.co/wp-content/uploads/2019/01/gyochon_menu2.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Pizza",
    image: "http://www.pizzabig.co.kr/theme/basic/img/sub0201_img05.jpg",
    rating: 3.7,
  },
  {
    id: 4,
    name: "Dongas",
    image: "https://t1.daumcdn.net/cfile/tistory/998976505AA8C06921",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Chobap",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80",
    rating: 2.2,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
