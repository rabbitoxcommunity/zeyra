"use client";
const reviews = [
  {
    id: 1,
    name: "	Saikumar",
    rating: 5,
    comment:
      "Good product",
    img: "/img/reviews/review1.jpg"
  },
  {
    id: 1,
    name: "pranav trivedi",
    rating: 4,
    comment:
      "Very good",
    img: "/img/reviews/review2.jpg"
  },
  {
    id: 1,
    name: "Customer",
    rating: 3,
    comment:
      "Value for money",
    img: "/img/reviews/2.jpg"
  },
  {
    id: 1,
    name: "	Kundan kumar",
    rating: 5,
    comment:
      "Heavy-Duty Capability : I recently purchased the Solitude 20 Pcs PVC Heavy Duty Self Adhesive Stainless Hooks and I am genuinely impressed with their quality and versatility. Here's my detailed review:",
    img: "/img/reviews/3.jpg"
  },
  {
    id: 1,
    name: "Sushanta K Debnath",
    rating: 5,
    comment:
      "Very good product",
    img: "/img/reviews/4.jpg"
  },
  {
    id: 1,
    name: "Sabith",
    rating: 5,
    comment:
      "nice product",
    img: "/img/reviews/5.jpg"
  },
  {
    id: 1,
    name: "Mohammed",
    rating: 4,
    comment:
      "Mind blowing product",
    img: "/img/reviews/6.jpg"
  },
  {
    id: 1,
    name: "Sujatha",
    rating: 2,
    comment:
      "Very useful for kitchen ",
    img: "/img/reviews/7.jpg"
  },
  {
    id: 1,
    name: "Ameya",
    rating: 5,
    comment:
      "Good products",
    img: "/img/reviews/8.jpg"
  },
  {
    id: 1,
    name: "Ameya",
    rating: 5,
    comment:
      "Great Product to hang light weight items",
    img: "/img/reviews/9.jpg"
  },
  {
    id: 1,
    name: "Kranthi",
    rating: 5,
    comment:
      "Dont doubt, they are good for use",
    img: "/img/reviews/10.jpg",
  },
  {
    id: 1,
    name: "	Rohit",
    rating: 5,
    comment:
      "Absolutely perfect! Easy to installation not fuzz product. I didn't want to nail our walls and this product came in handy with great adhesive quality. It is transperant and worked perfectly to fix diwali lights at home. Hook size is adjustable as well which is a great touch. Just make sure your walls have smooth finish for better grip.",
    img: "/img/reviews/12.jpg",
    img2: "/img/reviews/121.jpg",
  },
];

export default function Reviews() {
  return (
    <>
      <div className="review-section">
        <ul className="review-list">
          {reviews.map((review) => (
            <li className="review-item" key={review.id}>
              <div className="review-content">
                <div className="review-info">
                  <div className="review-meta">
                    <span className="review-author fw-medium text-md">
                      {review.name}
                    </span>
                  </div>
                  <div
                    className={`list-star ${review.rating === 4 ? "star-4" : ""
                      }`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <i className="icon icon-star" key={index} />
                    ))}
                  </div>
                </div>
                <p className="text text-sm text-main-4">{review.comment}</p>
                <div className="d-flex gap-3">
                  <img alt="avt" src={review.img} width={100} height={100} />
                  {
                    review.img2 && (
                      <img alt="avt" src={review.img2} width={100} height={100} />
                    )
                  }
                </div>


              </div>
            </li>
          ))}
        </ul>
        <form
          id="form-review"
          onSubmit={(e) => e.preventDefault()}
          className="form-review"
        >
          <h6 className="title">Write a review</h6>
          <p className="note text-md text-main-4">
            Your email address will not be published.&nbsp;Required fields are
            marked&nbsp;*
          </p>
          <div className="box-rating">
            <span className="text-md">Your rating *</span>
            <div className="list-rating-check">
              <input type="radio" id="star5" name="rate" defaultValue={5} />
              <label htmlFor="star5" title="text" />
              <input type="radio" id="star4" name="rate" defaultValue={4} />
              <label htmlFor="star4" title="text" />
              <input type="radio" id="star3" name="rate" defaultValue={3} />
              <label htmlFor="star3" title="text" />
              <input type="radio" id="star2" name="rate" defaultValue={2} />
              <label htmlFor="star2" title="text" />
              <input type="radio" id="star1" name="rate" defaultValue={1} />
              <label htmlFor="star1" title="text" />
            </div>
          </div>
          <div className="group-2-ip">
            <input type="text" className="" placeholder="Name *" />
            <input type="email" className="" placeholder="Email *" />
          </div>
          <textarea
            name="note"
            id="note"
            placeholder="Your review *"
            defaultValue={""}
          />
          <div className="check-save">
            <input type="checkbox" className="tf-check" id="checksave" />
            <label htmlFor="checksave" className="label text-md">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit" className="tf-btn animate-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
