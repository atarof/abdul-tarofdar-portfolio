export const sendContactForm = async (data) =>{
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
        } else {
            console.log('Sorry something went wrong')
        }
    })
}