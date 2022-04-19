import React from 'react'

export const Error = ({title, message}) => {
    return (
        <section className="p-strip">
            <div className="row">
                <div className="col-6 col-medium-3 u-vertically-center u-align--center">
                    <img src="https://assets.ubuntu.com/v1/03c7318e-image-404.svg" alt="Page not found" width="360" height="365" />
                </div>
                <div className="col-6 col-medium-3 u-vertically-center">
                    <div>
                        <h1>{title}</h1>
                        <p className="p-heading--4">{message}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

