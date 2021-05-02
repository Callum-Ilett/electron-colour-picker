import { PageHeading } from "components";
// import { useState } from "react";
// import styled from "styled-components";

// interface Collection {
//   id?: string;
//   name?: string;
//   type: "Pallete" | "Gradient" | "File Upload";
//   data: Gradient;
// }

const CreateCollection = () => {
  // const [collection, setCollection] = useState<Collection>({
  //   name: "",
  //   type: "Pallete",
  //   data: {},
  // });

  // const saveCollection = () => {
  //   console.log(collection);
  // };

  return (
    <>
      <PageHeading text="Create a Collection" backIcon />
      {/* 
      <div style={{ display: "flex", marginBottom: "16px" }}>
        <p style={{ width: "70px", marginRight: "16px" }}>Name:</p>
        <StyledInput
          type="text"
          value={collection.name}
          onChange={(e) =>
            setCollection({ ...collection, name: e.target.value })
          }
        />
      </div>

      <div style={{ display: "flex", marginBottom: "32px" }}>
        <p style={{ width: "70px", marginRight: "16px" }}>Type:</p>
        <StyledSelect>
          <option>Palette</option>
          <option>Gradient</option>
        </StyledSelect>
      </div>

      <Grid>
        <Grid.Item>
          <Colour
            collection={collection}
            setCollection={setCollection}
            create
          />
        </Grid.Item>

        <Grid.Item>
          <Colour
            collection={collection}
            setCollection={setCollection}
            create
          />
        </Grid.Item>

        <Grid.Item>
          <Colour
            collection={collection}
            setCollection={setCollection}
            create
          />
        </Grid.Item>

        <Grid.Item>
          <Colour
            collection={collection}
            setCollection={setCollection}
            create
          />
        </Grid.Item>

        <Grid.Item>
          <Colour
            collection={collection}
            setCollection={setCollection}
            create
          />
        </Grid.Item>
      </Grid> */}

      {/* <Button onClick={saveCollection} block>
        Save Collection
      </Button> */}
    </>
  );
};

// const StyledInput = styled.input`
//   background: #4d525b;
//   color: #e4e5e6;
//   border-radius: 4px;
//   width: 170px;
//   padding: 4px 8px 4px 8px;
//   outline: none;
//   border: none;
// `;

// const StyledSelect = styled.select`
//   background: #4d525b;
//   color: #e4e5e6;
//   border-radius: 4px;
//   width: 170px;
// `;

export default CreateCollection;
