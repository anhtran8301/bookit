/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
        DB_URI: "mongodb+srv://pes0kloveu:Tuananh123@cluster0.u5iph.mongodb.net/bookit?retryWrites=true&w=majority",

        STRIPE_WEBHOOK_SECRET: "whsec_RttgNby59AibRTDnyz2sHOdfaJ6AuMjW",
        STRIPE_SECRET_KEY: "sk_test_51OLSGCGhe66TslRTcusNeOF8FwyoKBWvplKJ1bEld5Hpi1Ek9LjRUfJqVdMdU0rMfnHdcsJY3ykbcsq8e356URME00iW50Rw3U",

        CLOUDINARY_CLOUD_NAME: "dg5i28qz8",
        CLOUDINARY_API_KEY: "673662212522199",
        CLOUDINARY_API_SECRET: "Qste5R06IlPDclMQsego9e6yL0k",

        SMTP_HOST: "sandbox.smtp.mailtrap.io",
        SMTP_PORT: 2525,
        SMTP_USER: "23ba7a0a9eda34",
        SMTP_PASSWORD: "9754c08409b89f",
        SMTP_FROM_EMAIL: "pes0kloveu123@gmail.com",
        SMTP_FROM_NAME: "BookIT",

        GEOCODER_API_KEY: "yHQL9KCOfvVvnnL6umGuzeHNcNRMU2NF",
        GEOCODER_PROVIDER: "mapquest",

        MAPBOX_ACCESS_TOKEN: "",

        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "ANHTRAN8301",
        REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",

    },
    images: {
        domains: ["res.cloudinary.com"],
      },
}

module.exports = nextConfig

