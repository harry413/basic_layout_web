import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-10 bg-gray-100 text-center">
            <h2 className="text-2xl font-semibold">What Our Users Say</h2>
            <div className="mt-4 space-y-4">
                <blockquote className="max-w-lg mx-auto">
                    <p>"This app has transformed my projects!"</p>
                    <cite>- Happy User</cite>
                </blockquote>
                <blockquote className="max-w-lg mx-auto">
                    <p>"Awesome icons and easy to use!"</p>
                    <cite>- Satisfied Customer</cite>
                </blockquote>
            </div>
        </section>
    );
}

export default Testimonials;
