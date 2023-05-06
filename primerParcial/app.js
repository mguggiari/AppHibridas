
import express from 'express'

const app = express(); 

app.use(express.urlencoded({extended: true}))
// app.use('/api', express.json()) 
app.use('/', express.static('public'))

app.use()
// app.use('/api', )

app.listen(2222, function() {
    console.log('Servidor corriendo con éxito: http://localhost:2222');
})