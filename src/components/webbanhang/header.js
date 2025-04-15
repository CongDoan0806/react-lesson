import React from 'react';

function Header() {
    return (
        <div id="header">
            {/* Top Bar */}
            <div className="header-top bg-light py-2 border-bottom">
                <div className="container d-flex justify-content-between align-items-center">
                    <ul className="top-menu d-flex list-unstyled m-0">
                        <li className="me-3">
                            <a href="#"><i className="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Q1</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-phone"></i> 0163 296 7751</a>
                        </li>
                    </ul>
                    <ul className="top-details d-flex list-unstyled m-0">
                        <li className="me-3"><a href="/admin"><i className="fa fa-user"></i> Admin</a></li>
                        <li className="me-3"><a href="/page/signup">Đăng ký</a></li>
                        <li><a href="/page/login">Đăng nhập</a></li>
                    </ul>
                </div>
            </div>

            {/* Logo + Search + Cart */}
            <div className="header-body py-3 shadow-sm bg-white">
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="/" id="logo">
                        <img
                            src="https://idodesign.vn/wp-content/uploads/2023/10/35-mau-thiet-ke-logo-tiem-banh-dep-31.jpg"
                            width="200"
                            alt="Logo"
                        />
                    </a>
                    <form className="d-flex border rounded px-2 py-1" role="search" method="post" action="/page/search">
                        <input type="text" className="form-control border-0 me-2" name="search" placeholder="Nhập từ khóa..." />
                        <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </form>
                    <div className="cart position-relative">
                        <a href="#" className="btn btn-outline-primary">
                            <i className="fa fa-shopping-cart"></i> Giỏ hàng (Trống)
                        </a>
                        <div className="cart-dropdown position-absolute bg-white shadow p-3">
                            <p className="text-center">Giỏ hàng của bạn trống.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="header-bottom bg-secondary">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-toggler" data-bs-toggle="collapse" href="#main-menu">
                            <i className="fa fa-bars"></i> Menu
                        </a>
                        <div className="collapse navbar-collapse" id="main-menu">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item me-5">
                                    <a className="nav-link text-white" href="/page/trangchu">Trang chủ</a>
                                </li>
                                <li className="nav-item me-5 dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Sản phẩm</a>
                                    <ul className="dropdown-menu sub-menu">
                                        {/* {loai_sp.map((loai) => (
                                            <li key={loai.id}>
                                                <a className="dropdown-item" href={`/page/product/type/${loai.id}`}>
                                                    {loai.name}
                                                </a>
                                            </li>
                                        ))} */}
                                    </ul>
                                </li>
                                <li className="nav-item me-5">
                                    <a className="nav-link text-white" href="/page/about">Giới thiệu</a>
                                </li>
                                <li className="nav-item me-5">
                                    <a className="nav-link text-white" href="/page/contact">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
