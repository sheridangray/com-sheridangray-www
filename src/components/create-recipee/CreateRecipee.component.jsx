import React, { useEffect, useState } from "react";
import "./createRecipee.style.scss";
import del from "../../assets/food/delete.png";
import edit from "../../assets/food/edit.png";
import sort from "../../assets/food/sort.png";
import DropDown from "../drop-down/DropDown";
import DragnDrop from "../drag-and-drop/DragnDrop";
import selectimage from "../../assets/food/upload.png";
import { useDispatch } from "react-redux";
import {
  addRecipe,
  getCategoryList,
} from "../../redux/recipie-sagas/recipe.actions";
import { useSelector } from "react-redux";
import { categoryOptions, qTypeArr, servingArr } from "../../data/staticData";
import { BASE_URI } from "../../Api/api";
import Multiselect from "multiselect-react-dropdown";

const CreateRecipee = () => {
  const [recipeName, setRecipeName] = useState("");
  const [imgfiles, setFiles] = useState([]);
  const [addIngOpen, setAddIngOpen] = useState(false);
  const [preprationStep, setPreprationStep] = useState(false);
  const [stepCount, setStepCount] = useState(1);
  const [ingInfo, setIngInfo] = useState({
    ingredient: "",
    quantity: "",
    qType: "",
  });
  const [categorySelected, setCategorySelected] = useState();
  const [cookingTime, setCookingTime] = useState({
    prepTime: 0,
    cookTime: 0,
  });
  const [servingSize, setServingSize] = useState();
  const [pStepInfo, setPStepInfo] = useState("");
  let [ingArr, setIngArr] = useState([]);
  let [preArr, setPreArr] = useState([]);

  const handleCookingTime = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCookingTime({ ...cookingTime, [name]: value });
  };

  const addIngredient = () => {
    setAddIngOpen(true);
  };

  const saveIngredient = () => {
    let id = Date.now();
    setIngArr([...ingArr, { id: id, ...ingInfo }]);
    setIngInfo({
      ingredient: "",
      quantity: "",
      qType: "",
    });
    setAddIngOpen(false);
  };

  const handleChange = (e) => {
    console.log(e);
    let name = e.target.name;
    setIngInfo({ ...ingInfo, [name]: e.target.value });
  };

  const handlePrepration = () => {
    setPreprationStep(true);
  };

  const savePrepration = () => {
    let step = stepCount;
    setStepCount((p) => stepCount + 1);
    setPreprationStep(false);
    let id = Date.now();
    setPreArr([...preArr, { id: id, info: pStepInfo, step: step }]);
    setPStepInfo("");
  };

  const deltePrepration = (id) => {
    let filterPre = preArr.filter((val) => val.id !== id);
    setPreArr(filterPre);
  };

  const deleteIng = (id) => {
    let filterIng = ingArr.filter((val) => val.id !== id);
    setIngArr(filterIng);
  };

  // For Editing Ingdritents
  const [editIngClicked, isEditIngClicked] = useState(false);
  const editIngArray = (val) => {
    localStorage.setItem("id", val.id);
    setIngInfo({
      ingredient: val.ingredient,
      quantity: val.quantity,
      qType: val.qType,
    });
    // console.log(val);
    isEditIngClicked(true);
    setAddIngOpen(true);
  };

  const updateIngredient = () => {
    let id = localStorage.getItem("id");
    let findID = ingArr.find((e) => e.id == id);
    findID.ingredient = ingInfo.ingredient;
    findID.quantity = ingInfo.quantity;
    findID.qType = ingInfo.qType;

    console.log(findID, "findID");
    
    setIngArr((p) => p);
  };

  // Code ends here for edit ing

  const handleCategories = (event) => {
    console.log(event);
    // setCategorySelected(event.target.value);
  };

  const handleServingSize = (event) => {
    setServingSize(event.target.value);
  };

  const saveFormData = async () => {
    //Upload Image
    const data = new FormData();
    data.append("image", imgfiles[0], imgfiles[0].name);

    let requestOptions = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    const imgResult = await fetch(`${BASE_URI}/upload/image`, requestOptions);
    const imgRes = await imgResult.json();
    console.log(imgRes, "img res");

    let ingredientArray = ingArr.map((val) => {
      return {
        ingredient: val.ingredient,
        quantity: Number(val.quantity),
        qType: val.qType,
      };
    });
    let preprationArray = preArr.map((val) => {
      return {
        info: val.info,
        step: val.step,
      };
    });
    const formData = {
      name: recipeName,
      ingredients: ingredientArray,
      preparation: preprationArray,
      servingSize: Number(servingSize) || 1,
      prepTime: cookingTime.prepTime || 0,
      cookTime: cookingTime.cookTime || 0,
      totalTime:
        (parseInt(cookingTime.prepTime) || 0) +
        (parseInt(cookingTime.cookTime) || 0),
      categories: [categorySelected],
    };
    console.log(formData);

    const res = await fetch(`${BASE_URI}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log(result);
    alert(result.statusMessage);
  };

  const dispatch = useDispatch();
  const {
    recipe: { categoriesList },
  } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  return (
    <>
      <div className="create_recipe_main">
        <div className="title_recipe">
          <p>Create Recipe</p>{" "}
          <button className="btn-default" onClick={() => saveFormData()}>
            Save
          </button>
        </div>
        <div className="recipe_content">
          <div className="general_info">
            <h3>General Information</h3>
            <div className="input-box">
              <h4>Recipe Name</h4>
              <input
                type="text"
                className="custom_input"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
              <div className="drop-image">
                {imgfiles.length == 0 && <img src={selectimage} />}
                <DragnDrop files={imgfiles} setFiles={setFiles} />
              </div>
            </div>
            <div className="serving-size">
              <h3>Serving Size</h3>
              <div className="serving-select">
                <DropDown
                  options={servingArr}
                  handleChange={handleServingSize}
                  selected={servingSize}
                />
              </div>
            </div>
            <div className="visibility">
              <h3>Visibility</h3>
              <Multiselect
                displayValue="key"
                placeholder="Select who can see this recipe"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                onSearch={function noRefCheck() {}}
                onSelect={function noRefCheck() {}}
                options={[
                  {
                    cat: "Family",
                    key: "Family",
                  },
                  {
                    cat: "Public",
                    key: "Public",
                  },
                ]}
                singleSelect
              />
            </div>
            <div className="time">
              <div className="prep">
                <h3>Prep Time</h3>
                <input
                  type="number"
                  name="prepTime"
                  min="1"
                  value={cookingTime.prepTime}
                  onChange={handleCookingTime}
                />
              </div>
              <div className="cook">
                <h3>Cook Time</h3>
                <input
                  type="number"
                  name="cookTime"
                  min="1"
                  value={cookingTime.cookTime}
                  onChange={handleCookingTime}
                />
              </div>
              <div className="tim">
                <h3>Total Time</h3>
                <span className="minutes">
                  {(parseInt(cookingTime.prepTime) || 0) +
                    (parseInt(cookingTime.cookTime) || 0)}{" "}
                  Minutes
                </span>
              </div>
            </div>
            <div className="visibility">
              <h3>Categoriess</h3>
              <Multiselect
                displayValue="key"
                groupBy="cat"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                onSearch={function noRefCheck() {}}
                onSelect={(e) => handleCategories(e)}
                singleSelect
                options={categoryOptions}
              />

              <a href="#" className="add_cate">
                Add additional category
              </a>
            </div>
          </div>
          <div className="ingrediant">
            <h3>Ingredients</h3>
            {/* add integridient */}

            {addIngOpen && (
              <div className="add_ingredient">
                <input
                  type="text"
                  className="custom_input"
                  name="ingredient"
                  placeholder="Ingredient"
                  value={ingInfo.ingredient}
                  onChange={handleChange}
                />
                <div className="quantity">
                  <input
                    type="text"
                    className="custom_input"
                    name="quantity"
                    placeholder="Quantity"
                    value={ingInfo.quantity}
                    onChange={handleChange}
                  />
                  <DropDown
                    handleChange={handleChange}
                    options={qTypeArr}
                    className="select_quantity"
                    name="qType"
                  />
                </div>
                <div className="btn">
                  {editIngClicked ? (
                    <button onClick={updateIngredient}>Update</button>
                  ) : (
                    <button onClick={saveIngredient}>Save</button>
                  )}
                  <span
                    className="add_cate"
                    onClick={() => setAddIngOpen(false)}
                  >
                    Cancel
                  </span>
                </div>
              </div>
            )}
            {/* after addition */}
            {ingArr?.map((val) => (
              <div key={val.id}>
                <div className="after_add">
                  <div className="content">
                    {val?.quantity} {val?.ingredient} {val?.qType}
                  </div>
                  <div className="action">
                    <span className="delete" onClick={() => deleteIng(val.id)}>
                      <img src={del} />
                    </span>
                    <span className="edit" onClick={() => editIngArray(val)}>
                      <img src={edit} />
                    </span>
                    <span className="shuffle">
                      <img src={sort} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <span className="add_cate" onClick={addIngredient}>
              Add Ingredients
            </span>
          </div>
          <div className="prepration">
            <h3>Preparation</h3>

            {/* after add step */}
            {preArr?.map((res) => (
              <div className="prepration-step " key={res.id}>
                <h4>Step {res.step}</h4>
                <div className="edit">
                  <textarea>{res.info}</textarea>
                  <div className="action">
                    <span
                      className="delete"
                      onClick={() => deltePrepration(res.id)}
                    >
                      <img src={del} />
                    </span>
                    <span className="edit">
                      <img src={edit} />
                    </span>
                    <span className="shuffle">
                      <img src={sort} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {preprationStep && (
              <div className="prepration-step">
                <h4>Step {stepCount}</h4>
                <textarea
                  value={pStepInfo}
                  onChange={(e) => setPStepInfo(e.target.value)}
                />
                <div className="btn">
                  <button onClick={savePrepration}>Save</button>
                  <span
                    className="add_cate"
                    onClick={() => setPreprationStep(false)}
                  >
                    Cancel
                  </span>
                </div>
              </div>
            )}
            <span className="add_cate" onClick={handlePrepration}>
              Add Preparation Step
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipee;
