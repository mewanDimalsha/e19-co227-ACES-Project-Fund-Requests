const exspress = require('express');

const app = exspress();

app.use(exspress.static('./public'))




const countriesMiddleware = require('./routes/countries')

app.use(exspress.urlencoded({extended: false})) // handle POST requests body. Handle data in the trype "application/x-www-form-urlencoded"
app.use(exspress.json()); // Handle the data in the type "application/json"

app.use("/change/",countriesMiddleware);

app.get("/", (req, res) => {
    res.status(200).json({success:true})
})

// POST

// app.post("/login", (req, res)=>{
//     const {name} = req.body; // To handle the POST request properly we have to use a middleware, that is urlencoded
//     console.log(name);
//     if(name){
//        return res.status(200).send("Success")
//     }else{
//        return res.status(401).send("Please enter valid credentials")
//     }
// });

app.post("/contact", (req, res)=>{
    const {names, leadsName, email, phoneNo} = req.body;
    if (names && leadsName && email && phoneNo) {
        console.log(names);
        console.log(leadsName);
        console.log(email);
        console.log(phoneNo);
        res.status(200).json({success: true})
    }
})

app.post("/about", (req, res)=>{
    const {title, description, goals, risks, prType, startDate, endDate} = req.body;
    if (title && description && goals && risks && prType && startDate && endDate) {
        console.log(title);
        console.log(description);
        console.log(goals);
        console.log(risks);
        console.log(prType);
        console.log(startDate);
        console.log(endDate);
        res.status(200).json({success: true})

    }
})

app.listen(5000, ()=>{
    console.log("Server started and running on port 5000");
})