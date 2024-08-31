import express, { json } from "express"
import cors from "cors"
import errorHandler from "./middlewares/error-handler"
import indexRouter from "./routes"

const app = express()

app.use(json())
// app.use(cors({
//     origin: ["https://mipagina.com.ar"] ORIGEN = PROTOCOLO + DOMINIO + PUERTO
// }))

app.use("/status",(req, res)=> res.json({environment: process.env.ENVIRONMENT}))
app.use("/", indexRouter)

app.use(errorHandler)

export default app

// CLIENTE => RUTAS => CONTROLADOR <=> SERVICIOS <=> MODELO <=> BD