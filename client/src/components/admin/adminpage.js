import React from "react";
import { Link, useParams } from "react-router-dom";

export function Adminpage() {
  var { id } = useParams();
  return (
    <>
      <section>
        <header>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <Link class="navbar-brand" href="#">
                KR Farm
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>
      <section id="admin_dashboard">
        <div className="admin_page bg-dark">
          <div className="admin_page_body">
            <div class="row row-cols-1 row-cols-md-2 g-0 w-100">
              <div class="col">
                <div class="card user-icon">
                  <img
                    src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"
                    class="container-fluid user-image"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title text-center">User</h3>
                    <Link
                      to="/viewuser"
                      className="btn btn-primary text-center"
                    >
                      View users
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card product-icon">
                  <img
                    src="https://img.freepik.com/premium-vector/fresh-farm-products-around-set-icons_24908-69624.jpg?w=2000"
                    class="container-fluid product-image"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3 class="card-title text-center">Product</h3>
                    <Link
                      to="/productinsert"
                      className="btn btn-primary text-center"
                    >
                      Insert products
                    </Link>
                    <Link
                      to="/viewproduct"
                      className="btn btn-primary text-center"
                    >
                      View products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
