const express = require("express");
const cors = require("cors");
const { createClient } = require('@supabase/supabase-js')
const app = express();

app.use(cors());
app.use(express.json()); //req.body

const supabase = createClient(
  'https://ebrwdeqmuoevehjvprib.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicndkZXFtdW9ldmVoanZwcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NjQ5MTMsImV4cCI6MjAyMzE0MDkxM30.ffPJDAhL5f1h8QzK27oz7h71tUI2yEgFowdt3yOpPmU'
)

const main = async () => {
  let { data, error } = await supabase
    .from('countries')
    .select('name, continent')
    .order('continent', {ascending: true})
    .range(0,10)

  if (error) {
    console.error(error)
    return
  }

  console.log(data)
}

main()
app.listen(6000, () => {
  console.log("server has started on port 5000");
});