const upDateForm = (e, ref, setFormData) => {
    setFormData((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,

        [e.target.name]: ref.current.value,
      },
    }));
    // console.log(formData.info);
  };

  export default upDateForm