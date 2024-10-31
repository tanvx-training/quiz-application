export default function Contact() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                We would love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-2"><strong>Email:</strong> support@certquizapp.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="mb-4"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                <p>
                    For the quickest response, please email us. We aim to respond to all inquiries within 24 hours.
                </p>
            </div>
        </div>
    )
}