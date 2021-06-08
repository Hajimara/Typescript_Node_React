import express from "express";
import cors from "cors";

class App {
    public application : express.Application;
    constructor(){
        this.application = express();
    }
}

const app = new App().application;
app.use(cors());

app.get("/",(req : express.Request , res : express.Response) =>{
    res.send("start");
})

app.listen(9090,()=>console.log("start"));
