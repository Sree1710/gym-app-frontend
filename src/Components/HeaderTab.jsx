import React from 'react'

const HeaderTab = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Gym App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/addg">Add Client</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewg">View Client</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/searchg">Search Client</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/deleteg">Delete Client</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderTab