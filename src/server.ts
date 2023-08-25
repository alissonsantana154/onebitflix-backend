import express from "express"
import { sequelize } from "./database"
import { adminJs, adminJsRouter } from "./adiminjs"

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull')
  })

  console.log(`server started successfuly at port ${PORT}`)
})