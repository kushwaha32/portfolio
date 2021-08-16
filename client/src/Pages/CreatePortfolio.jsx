import Title from "../Components/Title";
import TextField from "@material-ui/core/TextField";
import { useContext, useEffect, useState } from "react";
import PortfolioContext from "../Context/Portfolio/PortfolioContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, CircularProgress } from "@material-ui/core";
import AlertComponent from "../Components/alert";
import alertContext from "../Context/Alert/alertContext";

const CreatePortfolio = () => {
  const usePortfolioContext = useContext(PortfolioContext);
  const useAlertContext = useContext(alertContext);
  const [editorText, setEditorText] = useState("");
  const [uptitle, setUptitle] = useState("");
  const [upimage, setUpimage] = useState("");
  // input fields onChange
  const onChange = (e) => {
    if (e.target.name === "image") {
      setUpimage(e.target.files[0]);
    } else {
      setUptitle(e.target.value);
    }
  };

  useEffect(() => {
    // set alert
    if (
      usePortfolioContext.error != null &&
      usePortfolioContext.error.length > 0
    ) {
      usePortfolioContext.error.map((err) =>
        useAlertContext.setAlert(err.msg, "error")
      );
    };
    // set success msg
    if (
      usePortfolioContext.success != null 
    ) {
      
      useAlertContext.setAlert(usePortfolioContext.success.msg, "success");
    };

    //eslint-disable-nex-line
  }, [usePortfolioContext.error,usePortfolioContext.success]);

  // form submit
  const onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("title", uptitle);
    formData.append("image", upimage);
    formData.append("discription", editorText);
    usePortfolioContext.createPortfolio(formData);

    // clear form
    setEditorText("");
    setUptitle("");
    setUpimage("");
  };
  return (
    <div className="Portfolio padding-comman">
      <div className="portfolio-title">
        <Title title="Create Portfolio" opaceTitle="Create Portfolio" />
      </div>
      <div className="mui-form-custom">
        <AlertComponent />
        <form
          onSubmit={onSubmit}
          className="port-form-cu"
          encType="multipart/form-data"
        >
          <TextField
            name="title"
            value={uptitle}
            onChange={onChange}
            label="Title"
          />
          <div className="ckeditor-custom">
            <CKEditor
              editor={ClassicEditor}
              data={editorText}
              onReady={(editor) => {
                 // this initializes our application //
              }}
              config={{
                ckfinder: {
                  uploadUrl: "/ckimgUpload",
                },
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorText(data);
              }}
            />
          </div>

          <input
            type="file"
            name="image"
            onChange={onChange}
            className="port-imgMy"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            {usePortfolioContext.loading ? (
              <CircularProgress style={{ width: "25px", height: "25px", color:"white" }} />
            ) : (
              "Create"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolio;
