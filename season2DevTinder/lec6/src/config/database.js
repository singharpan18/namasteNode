//connecting to cluster
const mongoose = require("mongoose");
//it returns us a promise and tells us weather connection was established successfully or not, so we should use asyc wait so it wait until the response comes, once response comes handle it accordingly

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://singharpan9748:FOzGAqlAsmk7gR5u@namastenode.zncny.mongodb.net/?retryWrites=true&w=majority&appName=namasteNode");
};
//connectDB function is getting called and it is returing promise and we are handling it using then
connectDB().then(() => {
    console.log("Database connection established....");
})
.catch((err) => {
    console.log("Database cannot be connected...");
});
