const checkForm = (formData) => {
    if (formData.info.year === "" || formData.info.year <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Rok rozpoczecia budowy")
    }
    else if (formData.info.voivodeship === "") {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Województwo gdzie prowadzona jest inwestycja")
    }
    else if (formData.info.workStage === "" || formData.info.workStage <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Stan robót")
    }
    else if (formData.info.workOrderLevel === "" || formData.info.workStage <= 0) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole -  Poziom zlecanych prac")
    }
    else if (formData.info.houseArea <= 0 || formData.info.houseArea>400 ) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole - Całkowita powierzchnia domu - wraz z garażem i piwnicą")
    }
    else if (formData.info.constructionCost <= 0 || formData.info.constructionCost<10000 ) {
      return alert("Sprawdź czy poprawnie uzupełniłeś pole - Całkowity koszt budowy brutto")
    }
    else {
        return true;
    }

  }
  export default checkForm