      

import React from 'react';
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/Home.css';



const Home = () => {
 

    
  const tours = [
    { id: 1, title: "Paris Getaway", description: "Experience the city of love", location: "Paris", date: "Aug 30, 2024", image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Tokyo Adventure", description: "Explore the vibrant metropolis", location: "Tokyo", date: "Sep 15, 2024", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "African Safari", description: "Witness nature's wonders", location: "Kenya", date: "Oct 5, 2024", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "Tsavo Safari", description: "Experience the migration", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "Nairobi Adventure", description: "Experience the city of love", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },


  ];

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1565472501696-b871fa1ccfda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Eiffel Tower" },
    { id: 2, src: "https://images.unsplash.com/photo-1497281852309-02ee1925c3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "Mount Fuji" },
    { id: 3, src: "https://images.unsplash.com/photo-1430026996702-608b84ce9281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "African Elephant" },
    { id: 4, src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww", alt: "Eiffel Tower" },
    { id: 5, src: "https://images.unsplash.com/photo-1603998382124-c9835bf50409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDE0NDM0fHxlbnwwfHx8fHw%3D", alt: "Eiffel Tower" },
  
];


  const reviews = [
    { id: 1, text: "An unforgettable experience!", author: "John Doe"},
    { id: 2, text: "Professionally organized and amazing tours!", author: "Jane Smith" },
    { id: 3, text: "Will definitely book again!", author: "Mike Johnson" },
  ];



  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* <a className="navbar-brand" href="#">Arika Le Travels</a> */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search events and tours" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="carousel-container">
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1527073620320-77635188c627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 3" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1580150083503-b69bbabc96c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxODE1ODF8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1544121378-0326a232266b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxODE1ODF8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1533161167560-e48f8fc55dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTgxNTgxfHxlbnwwfHx8fHw%3D" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <section id="upcoming-tours" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Tours and Events</h2>
          <div className="row">
            {tours.map(tour => (
              <div key={tour.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={tour.image} className="card-img-top" alt={tour.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{tour.title}</h5>
                    <p className="card-text">{tour.description}</p>
                    <p className="card-text mt-auto"><small className="text-muted">Location: {tour.location} | Date: {tour.date}</small></p>
                    <a href="#" className="btn btn-primary mt-2">Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="photo-gallery" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Photo Gallery</h2>
          <div className="row">
            {galleryImages.map(image => (
              <div key={image.id} className="col-md-4 mb-4">
                <img src={image.src} className="img-fluid rounded" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">Arika Le Travels is your gateway to extraordinary adventures. We specialize in curating unforgettable experiences for travelers seeking both luxury and authenticity. Our team of seasoned professionals ensures that every journey is meticulously planned and flawlessly executed.</p>
        </div>
      </section>

      <section id="reviews" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Customer Reviews</h2>
          <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {reviews.map((review, index) => (
                <div key={review.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <blockquote className="blockquote text-center">
                
                    <p className="mb-0">{review.text}</p>
                    <br/>
                    <footer className="blockquote-footer">{review.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );


};

export default Home;





// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../components/Home.css';

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedTour, setSelectedTour] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState({
//     name: '',
//     email: '',
//     idNumber: '',
//     mpesaNumber: '',
//   });

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setBookingDetails({
//       ...bookingDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBookNow = (tour) => {
//     setSelectedTour(tour);
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     // Handle booking logic here (e.g., send to backend)
//     alert(`Booking submitted for ${selectedTour.title}`);
//     setSelectedTour(null); // Reset selected tour after submission
//   };

//   // Move the `tours` array declaration before filtering.
//   const tours = [
//     { id: 1, title: "Paris Getaway", description: "Experience the city of love", location: "Paris", date: "Aug 30, 2024", image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 2, title: "Tokyo Adventure", description: "Explore the vibrant metropolis", location: "Tokyo", date: "Sep 15, 2024", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 3, title: "African Safari", description: "Witness nature's wonders", location: "Kenya", date: "Oct 5, 2024", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 4, title: "Tsavo Safari", description: "Experience the migration", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 5, title: "Nairobi Adventure", description: "Experience the city of love", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   ];

//   const filteredTours = tours.filter((tour) =>
//     tour.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1565472501696-b871fa1ccfda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Eiffel Tower" },
//     { id: 2, src: "https://images.unsplash.com/photo-1497281852309-02ee1925c3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "Mount Fuji" },
//     { id: 3, src: "https://images.unsplash.com/photo-1430026996702-608b84ce9281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "African Elephant" },
//     { id: 4, src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww", alt: "Eiffel Tower" },
//     { id: 5, src: "https://images.unsplash.com/photo-1603998382124-c9835bf50409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDE0NDM0fHxlbnwwfHx8fHw%3D", alt: "Eiffel Tower" },
//   ];

//   const reviews = [
//     { id: 1, text: "An unforgettable experience!", author: "John Doe"},
//     { id: 2, text: "Professionally organized and amazing tours!", author: "Jane Smith" },
//     { id: 3, text: "Will definitely book again!", author: "Mike Johnson" },
//   ];

//   return (
//     <div className="home">
//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <div className="container">
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search events and tours"
//               aria-label="Search"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <button className="btn btn-outline-light" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </nav>

//       <div className="carousel-container">
//         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src="https://images.unsplash.com/photo-1527073620320-77635188c627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 2" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://images.unsplash.com/photo-1615462212429-348a5ac2e210?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 3" />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       <section id="tours" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4">Explore Our Tours</h2>
//           <div className="row">
//             {filteredTours.map((tour) => (
//               <div key={tour.id} className="col-md-4 mb-4">
//                 <div className="card h-100">
//                   <img src={tour.image} className="card-img-top" alt={tour.title} />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{tour.title}</h5>
//                     <p className="card-text">{tour.description}</p>
//                     <p className="card-text mt-auto"><small className="text-muted">Location: {tour.location} | Date: {tour.date}</small></p>
//                     <button
//                       className="btn btn-primary mt-2"
//                       data-bs-toggle="modal"
//                       data-bs-target="#bookNowModal"
//                       onClick={() => handleBookNow(tour)}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="gallery" className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-4">Gallery</h2>
//           <div className="row">
//             {galleryImages.map((image) => (
//               <div key={image.id} className="col-md-4 mb-4">
//                 <img src={image.src} className="img-fluid" alt={image.alt} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="reviews" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4">What Our Clients Say</h2>
//           <div className="row">
//             {reviews.map((review) => (
//               <div key={review.id} className="col-md-4 mb-4">
//                 <div className="card h-100">
//                   <div className="card-body d-flex flex-column">
//                     <p className="card-text">"{review.text}"</p>
//                     <p className="card-text mt-auto"><small className="text-muted">- {review.author}</small></p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact-us" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4">Contact Us</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <form className="row g-3">
//                 <div className="col-md-6">
//                   <label htmlFor="name" className="form-label">Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     value={bookingDetails.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="email" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={bookingDetails.email}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="col-12">
//                   <label htmlFor="message" className="form-label">Message</label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     rows="3"
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="col-12">
//                   <button type="submit" className="btn btn-primary">Send</button>
//                 </div>
//               </form>
//             </div>
//             <br></br>
//             <div className="col-md-6">
//               <h4>Our Location</h4>
//               <p>1234 Travel Street</p>
//               <p>Nairobi, Kenya</p>
//               <p>Email: info@arikatravels.com</p>
//               <p>Phone: +254 700 000 000</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modal for Booking */}
//       {selectedTour && (
//         <div className="modal fade" id="bookNowModal" tabIndex="-1" aria-labelledby="bookNowModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="bookNowModalLabel">Book {selectedTour.title}</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleBookingSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       name="name"
//                       value={bookingDetails.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={bookingDetails.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="idNumber" className="form-label">ID Number</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="idNumber"
//                       name="idNumber"
//                       value={bookingDetails.idNumber}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="mpesaNumber" className="form-label">Mpesa Number</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="mpesaNumber"
//                       name="mpesaNumber"
//                       value={bookingDetails.mpesaNumber}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

