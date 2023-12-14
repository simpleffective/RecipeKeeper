import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepListInputs from "./form/StepListInputs";
import Input from "./form/Input";
import TextArea from "./form/TextArea";
import styles from "../styles/Recipe.module.css";
import "../styles/form.css";

export default function NewRecipe({ onAdd }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingridients, setIngridients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [isInvalid, setIsInvalid] = useState({
    name: null,
    ingridients: null,
    steps: null,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      description: description,
      ingridients: ingridients.filter((ingridient) => ingridient.length > 0),
      steps: steps.filter((step) => step.length > 0),
    };
    const currIsInvalid = {};
    for (const key in isInvalid) {
      if (!data[key] || data[key].length === 0) currIsInvalid[key] = true;
    }
    if (Object.keys(currIsInvalid).length > 0) {
      setIsInvalid(currIsInvalid);
      return;
    }

    console.log(data);
    onAdd(data);
    navigate("/");
  }

  return (
    <form className={styles.recipe} onSubmit={handleSubmit}>
      <p className="hint">
        Write your recipe here!
        <br />
        Click save when you're done.
        <br />
        Don't worry, if you make a mistake, you can edit and fix it later!
      </p>

      <Input
        id="name"
        name="name"
        placeholder="What's cooking?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={isInvalid.name && "Please name your recipe"}
      />

      <TextArea
        className="lines"
        id="description"
        name="description"
        maxLength="153"
        rows="3"
        cols="50"
        placeholder="Sounds delicious! Describe it here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <h3>Ingridients</h3>
      <div>
        <ul>
          <StepListInputs
            array={ingridients}
            setArray={setIngridients}
            name={"ingridients"}
            placeholder={"List an ingridient here..."}
          />
        </ul>
        <div className="control-error">
          {isInvalid.ingridients && <p>Please list at least one ingridient</p>}
        </div>
      </div>
      <h3>Preperation</h3>
      <div>
        <ol>
          <StepListInputs
            array={steps}
            setArray={setSteps}
            name={"steps"}
            placeholder={"Specify a prep step here..."}
          />
        </ol>
        <div className="control-error">
          {isInvalid.steps && (
            <p>Please specify at least one preperation step</p>
          )}
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
