import { useState, useContext } from "react";
import { RecipesContext } from "../store/recipes-context";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import styles from "../styles/Recipe.module.css";
import formStyles from "../styles/NewRecipe.module.css";
import Input from "./form/Input";
import TextArea from "./form/TextArea";
import StepListInputs from "./form/StepListInputs";

export default function NewRecipe() {
  const RecipeCtx = useContext(RecipesContext);

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [directions, setDirections] = useState([""]);
  const [isInvalid, setIsInvalid] = useState({
    name: null,
    ingredients: null,
    directions: null,
    image: null,
  });

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      image: image,
      description: description,
      ingredients: ingredients.filter((ingredient) => ingredient.length > 0),
      directions: directions.filter((direction) => direction.length > 0),
    };
    const currIsInvalid = {};
    for (const key in isInvalid) {
      if (!data[key] || data[key].length === 0) currIsInvalid[key] = true;
    }
    if (Object.keys(currIsInvalid).length > 0) {
      setIsInvalid(currIsInvalid);
      return;
    }
    RecipeCtx.onAdd(data);
    navigate("/");
  }
  return (
    <form
      className={`${styles.recipe} ${formStyles.recipe}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.header}>
        <div className={formStyles["image-control"]}>
          <div className={`${formStyles.imageWrap} ${styles.imageWrap}`}>
            <div className={formStyles["image-input"]}>
              <Input
                className={formStyles["image-input"]}
                type="file"
                id="image-input"
                name="img"
                style={{ display: "none" }}
                label=" "
                onChange={handleImageUpload}
              ></Input>
            </div>
            <img
              className={styles.image}
              src={image}
              alt="Your Image Here"
              style={{ visibility: image ? "visible" : "hidden" }}
            />
          </div>
          <div className="control-error">
            {isInvalid.image && <p>Please upload an image of the dish</p>}
          </div>
        </div>
        <div className={styles.summary}>
          <Input
            className={`${styles.name} ${formStyles.name}`}
            id="name"
            name="name"
            placeholder="What's cooking?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={isInvalid.name && "Please name your recipe"}
          />
        </div>
        <div className={styles.description}>
          <TextArea
            className={`${formStyles.lines} ${formStyles.description} ${styles.description}`}
            id="description"
            name="description"
            maxLength="138"
            rows="3"
            cols="56"
            placeholder="Sounds delicious! Describe it here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className={`${styles.body} ${formStyles.body}`}>
        <div>
          <h3>Ingredients:</h3>
          <ul className={`${styles.ingredients} ${formStyles.ingredients}`}>
            <StepListInputs
              array={ingredients}
              setArray={setIngredients}
              name={"ingredients"}
              placeholder={"List an ingredient..."}
              maxLength="50"
              rows="1"
              cols="26"
            />
          </ul>
          <div className="control-error">
            {isInvalid.ingredients && (
              <p>Please list at least one ingredient</p>
            )}
          </div>
        </div>
        <div>
          <h3>Directions:</h3>
          <ol className={`${styles.directions} ${formStyles.directions}`}>
            <StepListInputs
              array={directions}
              setArray={setDirections}
              name={"directions"}
              placeholder={"Specify a prep step..."}
              maxLength="120"
              rows="2"
              cols="25"
            />
          </ol>
          <div className="control-error">
            {isInvalid.directions && (
              <p>Please specify at least one preperation step</p>
            )}
          </div>
        </div>
      </div>
      <div className={formStyles.control}>
        <button className={formStyles.submit} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
