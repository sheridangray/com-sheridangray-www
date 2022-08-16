import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import selectimage from "../../assets/food/upload.png";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "280px",
  height: "170px",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  //   minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function DragnDrop({files,setFiles,setImage}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      setImage(acceptedFiles[0])
      setFiles(

        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {thumbs.length == 0 ? (
          <>
            {/* <img src={selectimage} /> */}

            <p>
              Drop your image here, or{" "}
              <span className="text-default">Browse</span>
            </p>
            <p className="small-text">Supports: JPG, GIF, PNG</p>
          </>
        ) : (
          <aside style={thumbsContainer}>{thumbs}</aside>
        )}
      </div>
    </section>
  );
}

export default DragnDrop;
