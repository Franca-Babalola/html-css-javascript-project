const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Franca Babalola',
        position: 'Devops',
        photo: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        text: "The best mask I have ever used for exfoliating my face. It's quite gritty so I only use it a couple of times a week, however it is still gentle enough not to irritate my sensitive skin... I find the best way to use it is in the shower in the morning. I apply it about 10 minutes before hopping in the shower and then wash it off.",
    },
]

let idx = 1

function updateTestimonial() {
    console.log(testimonials[1])
}

updateTestimonial()