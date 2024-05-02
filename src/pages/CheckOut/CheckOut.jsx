import { useLoaderData } from "react-router-dom";
import useAuth from "../../customHook/useAuth";

const CheckOut = () => {
  const { user } = useAuth();
  const loadedData = useLoaderData();

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const dueAmount = form.dueAmount.value;

    const order = {
      customerName: name,
      email,
      date,
      dueAmount,
      service: loadedData.title,
      serviceId: loadedData._id,
      image: loadedData.img,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h2>CheckOut Title: {loadedData.title}</h2>

      <form
        onSubmit={handleCheckOut}
        className="card-body grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input
            type="text"
            name="dueAmount"
            defaultValue={"$" + loadedData.price}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-block">
            Order confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
