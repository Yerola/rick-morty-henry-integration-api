import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCharacter } from "../Redux/actions";
import styles from "./FormCreate.module.css";

export default function FormCreate() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    image: "",
  });

  function handleInputChanges(e) {
    e.preventDefault();
    // console.log(e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log("input is",input)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("input",input);
    if (input.name === "") {
      return alert("Please enter a name");
    }

    const newFilm = {
      name: input.name,
      status: input.status,
      species: input.species,
      gender: input.gender,
      origin: input.origin,
      image: input.image,
      created_db: true,
    };
    dispatch(postCharacter(newFilm));
    alert("Your Character has been created");
    setInput({
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      image: "",
    });
  } // name, status, species, gender, origin, image, created_db
  return (
    <>
      <div className={styles.bodyc}>
        <div className={styles.signupFrm}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} action="" className={styles.form}>
              <h1 className={styles.title}>New || Character</h1>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Name
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  name="status"
                  type="text"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Status
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  name="species"
                  type="text"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Species
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  name="origin"
                  type="text"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Origin
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  name="gender"
                  type="text"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Gender
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  name="image"
                  type="text"
                  className={styles.input}
                  placeholder="a"
                  onChange={(e) => handleInputChanges(e)}
                />
                <label htmlFor="" className={styles.label}>
                  Image
                </label>
              </div>
              <input
                type="submit"
                className={styles.submitBtn}
                value="to Create"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
