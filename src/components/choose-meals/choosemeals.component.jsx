import React, { useEffect, useState } from "react";
import "./choosemeals.style.scss";
import close from "../../assets/meals/close.svg";
import Search from "../../assets/meals/search.svg";
import plus from "../../assets/meals/plus.svg";
import minus from "../../assets/meals/minus.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../redux/recipie-sagas/recipe.actions";
import back from "../../assets/meals/back.svg";
import { BASE_URI } from "../../Api/api";
import Card from "../Card";
const ChooseMealsPage = ({ setModalView }) => {
  const dispatch = useDispatch();
  const {
    recipe: { categoriesList },
  } = useSelector((state) => {
    return state;
  });

  console.log({ categoriesList });

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const [navItems, setNavItems] = useState(1);
  const [headerInfo, setHeaderInfo] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [recpieDetail, recpieDetailOpen] = useState(false);
  const [chooseClicked, setChooseClicked] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const handleCategory = (tab) => {
    setChooseClicked(false);
    setNavItems(tab._id);
    setSubCategory(tab.subCategoriesInfo);
    setHeaderInfo(tab.name);
    recpieDetailOpen(false);
  };

  const getRecipeData = async (e) => {
    recpieDetailOpen(true);
    const id = e._id;
    const data = await fetch(
      `${BASE_URI}/recipe/getSubCategoriesRecipes/${id}`,
      {
        method: "POST",
      }
    );
    const result = await data.json();
    console.log({ result });
    setRecipeData(result?.data);
    // window.open(result.data[result.data.length -1].image, '_blank')
  };
  const sideBarTabs = (e) => {};
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        {/* <span class="close">&times;</span> */}
        <div className="choose_meal_row">
          <div className="search_bar_meal">
            <ul onClick={sideBarTabs}>
              <li
                onClick={() => {
                  setNavItems(1);
                  setSubCategory([]);
                }}
                className={navItems == 1 ? "active" : ""}
              >
                Search
              </li>
              {categoriesList?.map((tab) => {
                let btnClass = {
                  active: navItems === tab._id,
                };
                return (
                  <li
                    onClick={() => handleCategory(tab)}
                    className={btnClass.active ? "active" : ""}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="choose_search_row">
            <div className="search_bar">
              <div className="back_with_title">
                {chooseClicked && (
                  <span className="backto">
                    <img src={back} onClick={()=> {recpieDetailOpen(false); setChooseClicked(false);}}/>
                  </span>
                )}

                <h3> {navItems == 1 ? "Search" : `${headerInfo} Recipies`} </h3>
              </div>

              <div className="filter_with_search">
                {chooseClicked && (
                  <span className="search_filter">
                    <input type="text" placeholder="Filter by Keyword"></input>
                  </span>
                )}
                <button onClick={() => setModalView(false)}>
                  <img src={close} />
                </button>
              </div>
            </div>
            <div className="recipee_meal meals_day">
              {navItems == 1 && (
                <form>
                  <div className="input_meal">
                    <label>Recipe or Meal by Keyword</label>
                    <input type="text" placeholder="keyword"></input>
                  </div>

                  <div className="input_meal">
                    <label>Include these ingredients</label>
                    <div className="input_inner">
                      <span>
                        <img src={plus} />
                      </span>
                      <input
                        type="text"
                        placeholder="Include  ingredients"
                      ></input>
                    </div>
                  </div>
                  <div className="input_meal">
                    <label>Exclude these ingredients</label>
                    <div className="input_inner">
                      <span>
                        <img src={minus} />
                      </span>

                      <input
                        type="text"
                        placeholder="Exclude  ingredients"
                      ></input>
                    </div>
                  </div>
                  <div className="submit">
                    <button>
                      <img src={Search} /> Search
                    </button>
                  </div>
                </form>
              )}
              {recpieDetail ? (
                <div className="card">
                  {recipeData?.map((e) => (
                    <Card img={e.image} name={e.name} />
                  ))}
                </div>
              ) : (
                <div className="recipee_order_list">
                  <ul>
                    {subCategory?.map((e) => (
                      <React.Fragment key={e._id}>
                        <li
                          onClick={() => {
                            getRecipeData(e);
                            setChooseClicked(true);
                          }}
                        >
                          {e.name}
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMealsPage;
