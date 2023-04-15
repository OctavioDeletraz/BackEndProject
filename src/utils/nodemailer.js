import nodemailer from 'nodemailer'


export async function  mailerCheckout(currentCart){
    const emailToSend = process.env.MAIL
    const passwordToSend = process.env.MAIL_PASS
    const productsMapped = currentCart.cart.map((e)=>{
        return `
        <h3>${e._id}</h3>
        <h3>${e.name}</h3>
        <h3>$ ${e.price}</h3>
        `
    })
    const mailOptions = {
    from: 'All Sports Deportes',
    to: `${currentCart.user.email}`,
    subject: `Compra Exitosa`,
    html: `
        <h3>${currentCart.user.username}</h3><br>
        <h3>${currentCart.user.names}</h3><br>
        ${productsMapped}
    `
    }
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: emailToSend, // generated ethereal user
          pass: passwordToSend, // generated ethereal password
        }
    })
    try {
        const info = await transporter.sendMail(mailOptions)
        return info
    } catch (error) {
        console.log(error)
    }
}
