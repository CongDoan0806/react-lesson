import { useState } from "react";

export const FormAdd = () => {
  let list = JSON.parse(localStorage.getItem('products'))
  const [inputs, setInputs] = useState({ name_category: "Thời trang nam" });
  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.name === "image") {
        value = "image/" + document.getElementById("image").files.item(0).name;
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    list.push(inputs)
    localStorage.setItem('products', JSON.stringify(list));
    window.location.reload(true);
  }
  return (
    <div className="col-sm-4">
      <div id="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name_category">Category</label>
          <select
            className="form-control"
            id="name_category"
            name="name_category"
            onChange={handleChange}
            defaultValue="Thời trang nam"
          >
            <option value="Thời trang nam">Nam</option>
            <option value="Thời trang nữ">Nữ</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="code">Code</label>
          <input
            className="form-control"
            id="code"
            name="code"
            placeholder="XXXXXXX"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" id="avatar-label">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            id="price"
            name="price"
            placeholder="10000"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="old_price">Old price</label>
          <input
            className="form-control"
            id="old_price"
            name="old_price"
            placeholder="1500"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-2"
          id="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};
