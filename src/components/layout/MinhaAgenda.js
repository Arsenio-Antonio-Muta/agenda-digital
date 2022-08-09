import React from "react";
import Input from "../Forms/Input";
import styles from "./MinhaAgenda.module.css"



const MinhaAgenda = () => {
  return (
    <div className={`${styles.agenda} animeLeft container`}>
      <h1 className="title">Register meeting</h1>
      <form>
        <Input
          label="Meeting theme"
          type="text"
          name="temadareuniao"
          id="temadare"
          placeholder="Write theme of meeting"
        />
        <Input
          label="Name"
          type="text"
          name="name"
          id="name"
          placeholder="Write the name"
        />
        <Input
          label="Start date"
          type="datetime-local"
          name="startdate"
          id="startdate"
        />
        <Input
          label="Piso"
          type="texte"
          name="piso"
          id="piso"
          placeholder="Write the floor"
        />
        <Input
          label="End date"
          type="datetime-local"
          name="enddate"
          id="enddate"
        />
        <fieldset>
          <legend>
            Prioridade
            <Input
              label="Maxima"
              name="opcoes"
              type="radio"
            />
            <Input
              label="Medio"
              name="opcoes"
              type="radio"
            />
            <Input
              label="Minimo"
              name="opcoes"
              type="radio"
            />
          </legend>
        </fieldset>
      </form>
    </div>
  )
}

export default MinhaAgenda;