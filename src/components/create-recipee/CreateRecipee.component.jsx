import React, { useState } from "react";
import "./createRecipee.style.scss";
import selectimage from "../../assets/food/upload.png";
import del from "../../assets/food/delete.png";
import edit from "../../assets/food/edit.png";
import sort from "../../assets/food/sort.png";
import DropDown from "../drop-down/DropDown";
import { id } from "date-fns/locale";
const CreateRecipee = () => {
  const [addIngOpen, setAddIngOpen] = useState(false);
  const [preprationStep, setPreprationStep] = useState(false);
  const [ingInfo, setIngInfo] = useState({
    ingredient: "",
    quantity: "",
    qType: "",
  });

  const [pStepInfo, setPStepInfo] = useState("");
  const addIngredient = () => {
    setAddIngOpen(true);
  };
  let [arr, setArr] = useState([]);
  let [preArr, setPreArr] = useState([]);

  const saveIngredient = () => {
    setArr([...arr, ingInfo]);
    setIngInfo({
      ingredient: "",
      quantity: "",
      qType: "",
    });
    setAddIngOpen(false);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    setIngInfo({ ...ingInfo, [name]: e.target.value });
  };

  const handlePrepration = () => {
    setPreprationStep(true);
  };

  const savePrepration = () => {
    setPreprationStep(false);
    let id = Date.now();
    setPreArr([...preArr, { id: id, info: pStepInfo }]);
    setPStepInfo("");
  };

  return (
    <>
      <div className="create_recipe_main">
        <div className="title_recipe">
          <p>Create Recipe</p> <button className="btn-default">Save</button>
        </div>
        <div className="recipe_content">
          <div className="general_info">
            <h3>General Information</h3>
            <div className="input-box">
              <h4>Recipe Name</h4>
              <input type="text" className="custom_input" />
              <div className="drop-image">
                <img src={selectimage} />
                <div>
                  <p>
                    Drop your image here, or{" "}
                    <span className="text-default">Browse</span>
                  </p>
                  <p className="small-text">Supports: JPG, GIF, PNG</p>
                </div>
              </div>
            </div>
            <div className="serving-size">
              <h3>Serving Size</h3>
              <div className="serving-select">
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="visibility">
              <h3>Visibility</h3>
              <select>
                <option>Select who can see this recipe</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="time">
              <div className="prep">
                <h3>Prep Time</h3>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="700"
                />
              </div>
              <div className="cook">
                <h3>Cook Time</h3>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="700"
                />
              </div>
              <div className="tim">
                <h3>Total Time</h3>
                <span className="minutes">Minutes</span>
              </div>
            </div>
            <div className="visibility">
              <h3>Categoriess</h3>
              <select>
                <option>Select a recipe category</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
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
                    options={["Quantity Type", 1, 2, 3, 4]}
                    className="select_quantity"
                    name="qType"
                  />
                </div>
                <div className="btn">
                  <button onClick={saveIngredient}>Save</button>
                  <span className="add_cate" onClick={()=> setAddIngOpen(false)}>
                    Cancel
                  </span>
                </div>
              </div>
            )}
            {/* after addition */}
            {arr?.map((val) => (
              <div>
                <div className="after_add">
                  <div className="content">
                    {val.quantity} {val.ingredient} {val.qType}
                  </div>
                  <div className="action">
                    <a href="#" className="delete">
                      <img src={del} />
                    </a>
                    <a href="#" className="edit">
                      <img src={edit} />
                    </a>
                    <a href="#" className="shuffle">
                      <img src={sort} />
                    </a>
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
                <h4>Step 1</h4>
                <div className="edit">
                  <textarea>{res.info}</textarea>
                  <div className="action">
                    <a href="#" className="delete">
                      <img src={del} />
                    </a>
                    <a href="#" className="edit">
                      <img src={edit} />
                    </a>
                    <a href="#" className="shuffle">
                      <img src={sort} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {preprationStep && (
              <div className="prepration-step">
                <h4>Step 1</h4>
                <textarea
                  value={pStepInfo}
                  onChange={(e) => setPStepInfo(e.target.value)}
                />
                <div className="btn">
                  <button onClick={savePrepration}>Save</button>
                  <span className="add_cate" onClick={() =>  setPreprationStep(false)}>
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
