
    const dataName = (data) => {
        let name = [];
        for (let i = 0; i < data.length; i++) {
          name.push(data[i].name);
        }
        return name;
      }

      const dataGender = (data) => {
        let gender = [];
        for (let i = 0; i < data.length; i++) {
          name.push(data[i].gender);
        }
        return gender;
      }

      const dataImg = (data) => {
        let img = [];
        for (let i = 0; i < data.length; i++) {
          name.push(data[i].img);
        }
        return img;
      }

     


      window.data= data;
      window.dataGender = gender;
      window.dataImg = img;
