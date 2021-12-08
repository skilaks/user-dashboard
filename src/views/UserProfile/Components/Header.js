import React, { useState, useEffect }from 'react'
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
export default function Header(prop) {
    const {classes , User , EditMode} = prop;
    
    const [editMode, setEditeMode] = useState(EditMode);
    const [lastName, setLastName] = useState(User.lastName);
    const [firstName, setFirstName] = useState(User.firstName);
    const [discription, setDiscription] = useState(User.discription);
    const [userPost] = useState()
    const [image, setImage] = useState(User.imgAdderss);
    return (
        <Card profile>
        <CardAvatar profile>

          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={image} alt="..." />
            {console.log(image)}
          </a>

        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>{userPost}</h6>
          <h4 className={classes.cardTitle}>{firstName + " " + lastName}</h4>
          {!editMode ? (
            <CustomInput
              id="discription"
              onChange={(e) => setDiscription(e.target.value)}
              value={discription}
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                multiline: true,
                rows: 5,
                disabled: editMode,
              }}
            />
          ) : (
            <p className={classes.description}>
              {discription}
            </p>
          )}
        </CardBody>
      </Card>
    )
}
