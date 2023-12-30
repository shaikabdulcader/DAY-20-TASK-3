 ///**div creation(container,row,col) */
 var div1=createDiv("div","class","container");
 var div2=createDiv("div","class","row modified d-flex");
 var div3=createDiv("div","class","col col1 col-sm-12 col-md-12 col-lg-6 m-2");
 
 
 function createDiv(tagname,attrname,attrvalue){
     var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue)
     return ele;
 }
 
 
 
 
 ///**Form creation */
 var form=createForm("form","class","form-group","id","form","method","POST");
 
 function createForm(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
   var ele=document.createElement(tagname);
   ele.setAttribute(attrname,attrvalue);
   ele.setAttribute(attrname1,attrvalue1);
   ele.setAttribute(attrname2,attrvalue2);
   return ele;
 }
 
 
 
 //*  Creating     Heading 
 var h1tag=createH1("h1","id","title","Nationalize API")
 
 //*  Creating     Heading  Welcome
 var h3tag=createH1("h3","id","welcome","Hello Everybody 👋")
 
 // Creating Content
 var Ptag=createH1("p","id","content","We are providing nationality based on the name..!")
 var br3=createlinebreak("br");
 function createH1(tagname,attrname,attrvalue,content){
     var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
 }
 
 //* Creating Line Break
 var br1=createlinebreak("br");
 
 function createlinebreak(tagname){
     var ele=document.createElement(tagname);
     return ele;
     }
 
 
 
 //*  Creating Input Field 
 var inputfield=createinput("input","type","text","id","input","class","form-control mb-2","placeholder","Search Any Country Name here");
 
 var br2=createlinebreak("br");
 function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
     var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.setAttribute(attrname1,attrvalue1);
     ele.setAttribute(attrname2,attrvalue2);
     ele.setAttribute(attrname3,attrvalue3);
     return ele;
 }
  
     //**** Creating Button */
                     var button1=createbutton1("button","type","button","class","btn form-control mt-3","id","submit","Search")
                   
                 
                     function createbutton1(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,content){
                         var ele=document.createElement(tagname);
                         ele.setAttribute(attrname,attrvalue);
                         ele.setAttribute(attrname1,attrvalue1);
                         ele.setAttribute(attrname2,attrvalue2);
                         ele.innerHTML=content;
                         return ele;
                     }
 
 
 
 
 // Creating a table
 var table = document.createElement("table")
 table.setAttribute("class", "table text-center col-lg-12 col-md-12 col-sm-12 ")
 
 
 //Creating Thead
 var thead = document.createElement("thead")
 
 // Creating tr
 var tr = document.createElement("tr")
 
 // Creating th
 var th1 = createthtd("th", "Name")
 th1.setAttribute("scope", "col")
 var th2 = createthtd("th", "Countries")
 th2.setAttribute("scope", "col")
 var th3 = createthtd("th", "Probabilities")
 th3.setAttribute
 
 // Adding innerHTML elements 
 th1.innerHTML = "Name"
 th2.innerHTML = "Countries"
 th3.innerHTML = "Probability<p><em>(Top 2 countries)</em></p>"
 
 //* Appending the child
 tr.append(th1, th2, th3)
 thead.append(tr)
 table.append(thead)
 
 
 
 //** Appending Html Elements */
 
 div3.append(form)
 div2.append(div3)
 div1.append(h1tag,div2,table)
 form.append(h3tag,Ptag,br3,br1,inputfield,br2,button1)
 document.body.append(div1);
 
 
 function createthtd(attrname,attrvalue) {
   var ele = document.createElement(attrname);
   ele.innerHTML = attrvalue;
   return ele;
 
 }
 
 var tbody = document.createElement("tbody")
 document.getElementById("submit").addEventListener("click", foo)
 
 // Async function 
 async function foo() {
   var inputValue = document.getElementById("input").value
 
   // Using try catch For Error handling
   try {
     // Using fetch function to get the Api data
 
     var data = await fetch(`https://api.nationalize.io/?name=${inputValue}`)
     if (data.ok === false) {
       throw "Page not found"
     }
     var data1 = await data.json() 
     tbody.innerHTML = ""
     console.log(data1);
   } catch (error) {
     console.log(error);
     console.log("Page 404 Error");
   }
   var country_value = []; // Variable to get an country data
   var prob_value = []; //Variable to get an probablity data
   for (i = 0; i < data1.country.length; i++) {
     country_value.push(data1.country[i].country_id);     // getting an country data into an array 
     prob_value.push(data1.country[i].probability) // getting an probablity data into an array
 
   }
   var tr1 = document.createElement("tr")  // creating an tr1
 
   var td1 = document.createElement("td")   // creating an td1
   var Name = data1.name      // Here we getting an name data
   td1.setAttribute("rowspan", data1.country.length + 1)
   td1.innerHTML = `${Name}`
   tr1.append(td1)
   tbody.append(tr1)
   for (j = 0; j < country_value.length-3; j++) {
 
     var tr2 = document.createElement("tr")       // creating an tr2
     
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
 
     var result = regionNamesInEnglish.of(`${country_value[j]}`);  //country code into Full name
 
     var td2 = document.createElement("td")        // creating an td2
     td2.innerHTML = `${result}`
     
     var td3 = document.createElement("td")       //  creating an td3
     td3.innerHTML = `${prob_value[j]}`
 
 
 
 
     tr2.append(td2, td3)
     tbody.append(tr2)
 
 
   }
   table.append(tbody)         // Finally appending it into Tbody 
 }
 
 
 
 
 
 
 
 
 
 
